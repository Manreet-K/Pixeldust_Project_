<template>
  <header
    class="p-6 transition-colors duration-300 fixed inset-x-0 top-0 z-10"
    :class="[
      (headerSticky || menuOpen) ? 'bg-black': 'bg-transparent',
    ]"
  >
    <div class="max-w-[1450px] mx-auto flex items-center justify-between relative">
      <NuxtLink href="/" @click="closeMenu">
        <img class="h-[42px]" src="@/assets/images/critical-river-logo.png" alt="critical river" />
      </NuxtLink>
      <div
        class="flex items-center gap-6 header-links lg:gap-8"
        :class="{
          'open': menuOpen
        }"
      >

        <NuxtLink
          class="m-link"
          to="/"
          @click="closeMenu"
        >Solutions</NuxtLink>

        <NuxtLink
          class="m-link"
          to="/"
          @click="closeMenu"
        >About</NuxtLink>

        <div
          v-if="false"
          class="m-dropdown"
          :class="{ 'm-dropdown--open': openDropdowns.includes('services') }"
          @mouseenter="openOnHover('services')"
          @mouseleave="closeOnLeave('services')" 
        >
          <button
            class="m-link m-dropdown__btn"
            to="/services"
            @click="toggleDropdown('services')"
          >
            Services
            <IconChevronDown class="w-4 m-dropdown__icon" />
          </button>
          <div class="m-dropdown__panel">
            <NuxtLink
              v-for="link in [{url:'/', title: 'example'}]"
              :key="link.label"
              class="m-link"
              :to="link.url"
              @click="closeMenu"
              >{{ link.title }}</NuxtLink>
          </div>
        </div>

        <button
          class="m-btn w-[180px]"
          @click="() => {
            openModal()
            closeMenu()
          }"
        >Request Access</button>
      </div>
      <button @click="toggleMenu" class="md:hidden">
        <IconCross v-if="menuOpen" class="w-4 text-white" />
        <IconMenu v-else class="w-6 text-white" />
      </button>
    </div>
  </header>  
</template>

<script setup>
import { watchThrottled, useWindowSize, useWindowScroll } from '@vueuse/core';
import { useModal } from "~/composables/useScheduleModal.js";
import IconChevronDown from './IconChevronDown.vue';
import IconMenu from './IconMenu.vue';
import IconCross from './IconCross.vue';
const { width: windowWidth } = useWindowSize()
const { y: windowY } = useWindowScroll()
const isDesktop = computed(() => windowWidth.value > 1368)
const isMobile = computed(() => windowWidth.value < 768)
const openDropdowns = ref([])
const menuOpen = ref(false)
const headerSticky = ref(false)
const { openModal } = useModal()
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
function toggleDropdown(id) {
  if (!isDesktop.value && isMobile.value) {
    // Accordion (multiple allowed)
    if (openDropdowns.value.includes(id)) {
      openDropdowns.value = openDropdowns.value.filter(i => i !== id)
    } else {
      openDropdowns.value.push(id)
    }
  } else {
    // Desktop (single open at a time)
    openDropdowns.value = openDropdowns.value.includes(id) ? [] : [id]
  }
}

function openOnHover(id) {
  if (isDesktop.value) openDropdowns.value = [id]
}

function closeOnLeave(id) {
  if (isDesktop.value) {
    openDropdowns.value = openDropdowns.value.filter(i => i !== id)
  }
}

function closeAll() {
  openDropdowns.value = []
}
function closeMenu() {
  menuOpen.value = false
  closeAll()
}

// Close on outside click
function handleClickOutside(e) {
  const dropdown = e.target.closest('.m-dropdown')
  if (!dropdown && !isMobile.value && !menuOpen.value) {
    closeAll()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
watchThrottled(
  [windowWidth, windowY],
  () => {
    if (windowWidth.value > 767) {
      menuOpen.value = false
      closeAll()
    }
    if (windowY.value > 40) {
      headerSticky.value = true
    } else {
      headerSticky.value = false
    }
  },
  { throttle: 500 }
)

</script>

<style scoped>
.m-btn {
  @apply text-[#FFFFFF] font-[600] text-[14px] px-[24px] py-[12px] rounded-[50px];
  @apply cursor-pointer transition-colors duration-300 text-center;
  color: var(--color-white);
  background: linear-gradient(91.04deg, #FF6B35 -40.2%, #831915 152.61%);
}
.m-btn:hover {
  background: linear-gradient(90deg, #FF6B35 0%, #d95220 50%, #c2481b 100%);
}
.m-link {
  @apply py-[8px] tracking-[0.5px] text-[14px] font-[500] transition-colors duration-300;
  color: #8f8f8f;
}
.m-dropdown--open > .m-link,
.m-link:hover {
  color: var(--color-white);
}
.m-dropdown {
  @apply relative;
}
.m-dropdown__btn {
  @apply flex items-center gap-[2px] cursor-pointer;
}
.m-dropdown__panel {
  position: absolute;
  top: 100%;
  left: 50%;
  width: 280px;
  background-color: #FFFFFF;
  opacity: 0;
  height: 0;
  overflow: hidden;
  transform: translate(-50%, 20px);
  box-shadow: 0 10px 6px -6px rgb(0 0 0 / 0.4);
  @apply flex flex-col gap-[4px] transition-all duration-500 pointer-events-none;
}
.m-dropdown__panel {
  width: 320px;
}
.m-dropdown__panel .m-link {
  @apply relative normal-case text-[14px] text-[#000000];
  padding: 12px 34px 12px 14px;
}
/*
.m-dropdown__panel .m-link::after {
  content: "";
  padding: 6px;
  background-image: url('~/assets/images/icon-arrow.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  @apply absolute right-[16px] top-[50%] -translate-y-[50%] block opacity-0 transition-opacity duration-150;
}
*/
.m-dropdown__panel .m-link:hover {
  background-color: #FF6B35;
}
.m-dropdown__panel .m-link:hover::after {
  opacity: 1;
}
.m-dropdown--open .m-dropdown__panel {
  height: auto;
  opacity: 1;
  pointer-events: all;
  transform: translate(-50%, 0);
}
.m-dropdown--open .m-dropdown__icon {
  transform: translateY(-2px) rotate(180deg);
}
@media screen and (max-width:767px) {
  .header-links {
    background-color: var(--color-black);
    @apply overflow-hidden h-[0] opacity-0 py-[0] px-[24px] absolute top-full -left-[24px] -right-[24px] flex-col gap-[20px] items-start;
    @apply transition-opacity duration-300 pointer-events-none;
    max-height: 90vh;
    overflow-y: auto;
  }
  .header-links.open {
    @apply opacity-100 h-auto pointer-events-auto pt-[24px] pb-[32px];
  }
  .m-dropdown--open {
    width: 100%;
  }
  .m-dropdown__panel .m-link::after {
    opacity: 1;
  }
  .m-dropdown__panel {
    transform: translate(0, 20px);
    width: 100%;
  }
  .m-dropdown--open > .m-dropdown__panel {
    position: static;
    width: 100%;
    padding: 0;
    margin-top: 8px;
    box-shadow: none;
    transform: translate(0, 0);
  }
}
</style>