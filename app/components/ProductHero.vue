<template>
  <section class="relative overflow-x-clip px-6 pt-[180px] md:pt-[200px]">
    <div class="hero-grad pointer-events-none absolute inset-x-0 h-[540px] bottom-0 overflow-clip md:h-[970px] md:top-[1%] md:bottom-auto">
      <video class="h-full w-full object-cover relative" autoplay muted playsinline="true">
        <source src="~/assets/images/digital_illustration_1920x1080.mp4" type="video/mp4">
      </video>
      <div class="video-grad"></div>
    </div>
    <div class="img-grad bottom-0 md:top-[970px] md:bottom-auto">
      <img
        class="w-full"
        src="@/assets/images/hero-shade-curve.svg"
        alt=""
        loading="lazy"
      >
    </div>
    <div
      class="relative gap-y-[32px] flex flex-col items-center mx-auto max-w-[865px]"
      :style="{
        maxWidth: props.headingMaxWidth ? `${props.headingMaxWidth}px`: ''
      }"
    >
      <div
        v-if="props.label"
        class="text-[#FF7C53] font-medium leading-tight -mt-6 text-[16px] md:text-[26px]"
      >{{ props.label }}</div>
      <div v-else class=""></div>
      <h1 class="text-center font-medium tracking-tight leading-tight text-[42px] md:text-[80px] md:leading-[1.2]">
        {{ props.title }}
      </h1>
      <p class="text-lg text-center text-[#8f8f8f] max-w-[670px]">
        {{ props.description }}
      </p>
      <button
        v-if="!props.hideCTA"
        @click="openModal"
        class="main-btn max-w-full min-w-auto mt-[10px] sm:min-w-[280px]"
      >
        {{ props.ctaText || 'Request Sandbox Access' }}
      </button>
      <div v-else class="w-full pt-[4%]"></div>
    </div>
    <div
      v-if="!props.hideSpacer"
      class="hero-spacer"
    ></div>
    <div v-else class="mt-10"></div>
  </section>
  <div
    v-if="props.leaderHeadline"
    class="relative px-6 text-center pt-10 pb-[100px]"
  >
    <p
      class="mx-auto max-w-[890px] leading-snug font-medium text-[24px] md:text-[36px]"
      :style="{
        maxWidth: props.leaderMaxWidth ? `${props.leaderMaxWidth}px`: ''
      }"
    >
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
  headingMaxWidth: Number,
  leaderMaxWidth: Number,
  ctaText: String,
  hideCTA: {
    type: Boolean,
    default: false
  },
  hideSpacer: {
    type: Boolean,
    default: false
  }
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
.img-grad {
  @apply pointer-events-none h-[0px] absolute left-[50%] w-[1850px] translate-x-[-50%];
}
.img-grad::before {
  content: "";
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  height: 40px;
  backdrop-filter: blur(4px);
  border-radius: 100%;
}
.img-grad > img {
  @apply w-full -translate-y-[68%];
}
.hero-spacer {
  @apply overflow-clip max-h-[380px] mx-auto max-w-[940px];
}
.hero-spacer::before {
  content: "";
  display: block;
  width: 100%;
  padding-top: 40%;
}
</style>