<template>
  <div class="bg-black/80 overflow-hidden rounded-lg border border-[#4c4c4c]">
    <Carousel
      v-bind="config"
      ref="carouselRef"
    >
      <Slide
        v-for="(item, i) in props.items"
        :key="i"
        class="cust-slider"
      >
        <div class="flex flex-col items-stretch md:flex-row">
          <div class="flex flex-col bg-black px-8 py-12 lg:py-[68px] lg:px-[80px] md:w-[50%]">
            <h4
              class="mb-7 font-medium leading-tight text-[32px] lg:text-[40px]"
            >{{ item.title }}</h4>
            <p
              class="text-[#8F8F8F] text-base mb-9"
            >{{ item.description }}</p>
            <ul
              v-if="item.points"
              class="mb-9 space-y-3 font-medium list-points"
            >
              <li
                v-for="(point,x) in item.points || []"
                :key="`p_${x}`"
              >{{ point }}</li>
            </ul>
            <NuxtLink
              :to="item.url"
              class="s-link mt-auto"
            >
              Learn More
              <img class="h-4 w-4 shrink-0" src="@/assets/images/icons/icon-arrow.svg" alt="" />
            </NuxtLink>
          </div>
          <div class="md:w-[50%]">
            <img class="w-full" :src="item.image" alt="" loading="lazy" />
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
  <div class="flex items-center justify-end gap-4 mt-6">
    <button
      class="p-3 bg-black/40 border border-white/10 rounded cursor-pointer hover:bg-black/80"
      @click="prev"
    >
      <img class="w-4 rotate-180" src="@/assets/images/icons/icon-arrow-wt.svg" alt="" />
    </button>
    <button
      class="p-3 bg-black/40 border border-white/10 rounded cursor-pointer hover:bg-black/80"
      @click="next"
    >
      <img class="w-4" src="@/assets/images/icons/icon-arrow-wt.svg" alt="" />
    </button>
  </div>
</template>

<script setup>
import { Carousel, Slide } from 'vue3-carousel';

const props = defineProps({
  items: {
    type: Array,
    default: () => ([])
  }
})
const carouselRef = ref(null)
const next = () => carouselRef.value.next()
const prev = () => carouselRef.value.prev()
const config = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 10000,
  pauseAutoplayOnHover: true
}
</script>

<style scoped>
.s-link {
  @apply gap-[4px] inline-flex items-center text-[#FF6B35] text-[13px] font-[700];
}
.s-link:hover {
  @apply underline underline-offset-2;
}
.list-points > li {
  position: relative;
  padding-left: 24px;
}
.list-points > li::before {
  content: "";
  position: absolute;
  border-radius: 50px;
  padding: 4px;
  background-color: #FF6B35;
  left: 0;
  top: 8px;
}
.cust-slider :deep(.carousel__prev) {

}
.cust-slider :deep(.carousel__next) {
  
}
</style>