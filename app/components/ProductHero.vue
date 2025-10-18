<template>
  <section class="relative overflow-x-clip px-6 pt-[180px] md:pt-[200px]">
    <div class="pointer-events-none absolute inset-x-0 top-0 bottom-[120px] overflow-clip hero-grad">
      <video class="h-full w-full object-cover translate-y-[1%] relative" autoplay muted playsinline="true">
        <source src="~/assets/images/digital_illustration_1920x1080.mp4" type="video/mp4">
      </video>
      <div class="video-grad"></div>
    </div>
    <div class="pointer-events-none absolute bottom-0 left-[50%] w-[1580px] translate-x-[-50%] translate-y-[20%]">
      <img
        class="w-full"
        src="@/assets/images/hero-shade-curve.svg"
        alt=""
        loading="lazy"
      >
    </div>
    <div class="relative gap-y-[32px] flex flex-col items-center mx-auto max-w-[865px]">
      <div
        v-if="props.label"
        class="text-[#FF7C53] font-medium leading-tight text-[16px] md:text-[26px]"
      >{{ props.label }}</div>
      <h1 class="text-center font-medium tracking-tight leading-tight text-[48px] md:text-[80px]">
        {{ props.title }}
      </h1>
      <p class="text-lg text-center text-[#8f8f8f] max-w-[670px]">
        {{ props.description }}
      </p>
      <button
        @click="openModal"
        class="main-btn max-w-full w-[280px] mt-[10px]"
      >
        Request Sandbox Access
    </button>
    </div>
    <div class="mt-[64px] h-[380px] md:mt-[130px]">
    </div>
  </section>
  <div class="px-6 text-center pt-10 pb-[100px]">
    <p class="mx-auto max-w-[890px] leading-snug font-medium text-[24px] md:text-[36px]">
      {{ props.leaderHeadline }}
    </p>
  </div>
</template>

<script setup>
import { useModal } from "~/composables/useScheduleModal.js";
const props = defineProps({
  label: String,
  title: String,
  description: String,
  leaderHeadline: String,
})
const { openModal } = useModal();
</script>

<style scoped>
.hero-grad::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.95;
  background: linear-gradient(180deg, rgba(0, 0, 0, 1) 40.02%, rgba(0, 0, 0, 0.9) 52.77%, rgba(0, 0, 0, 0.5) 80.77%);
}
.hero-grad > .video-grad {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 300px;
  background-color: #000000;
}
</style>