<template>
  <section class="relative overflow-x-clip px-6 pt-[180px] md:pt-[240px]">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-[540px] translate-y-[45%] overflow-clip hero-grad sm:translate-y-0 sm:h-[680px] md:h-[970px]">
      <video class="h-full w-full object-cover relative" autoplay muted playsinline="true">
        <source src="~/assets/images/digital_illustration_1920x1080.mp4" type="video/mp4">
      </video>
      <div class="video-grad"></div>
    </div>
    <div class="img-grad top-[860px] md:top-[970px]">
      <img
        src="@/assets/images/hero-shade-curve.svg"
        alt=""
      >
    </div>
    <div class="relative">
      <div class="gap-y-[38px] flex flex-col items-center mx-auto max-w-[1040px]">
        <h1 class="text-center font-medium tracking-tight leading-tight text-[42px] md:text-[80px]">
          Empower your enterprise with Decision Intelligence
        </h1>
        <p class="text-lg text-center text-[#8f8f8f] max-w-[550px]">
          Unlock the potential of your data with our suite of
          innovative AI solutions, driving smarter business outcomes.
        </p>
        <button
          @click="openModal"
          class="main-btn max-w-full w-[280px]"
        >
          Request Sandbox Access
      </button>
      </div>
      <div class="overflow-clip mt-[64px] mx-auto max-w-[700px] bg-black/60 rounded-lg divide-y divide-x divide-[#4c4c4c] border border-[#4c4c4c] grid grid-cols-2 md:mt-[130px] lg:grid-cols-4 lg:max-w-[1178px]">
        <NuxtLink
          v-for="(item, i) in prItems"
          :key="`a_${i}`"
          class="p-btn block p-6 -mb-px -mr-px md:p-[26px] md:pr-5 xl:min-h-[200px] max-md:text-center"
          :to="item.link"
        >
          <img class="mb-6 size-[64px] xl:mt-6 max-md:mx-auto" :src="item.image" alt="" loading="lazy" />
          <h4 class="font-medium leading-snug text-lg sm:text-[20px]">{{ item.title }}</h4>
        </NuxtLink>
      </div>
      <h4 class="mt-16 text-center font-medium tracking-tight leading-tight text-[24px] md:text-[32px] md:mt-[85px]">
        Agent factory
      </h4>
      <div class="overflow-clip mt-[36px] mx-auto max-w-[700px] bg-black/60 rounded-lg divide-y divide-x divide-[#4c4c4c] border border-[#4c4c4c] grid grid-cols-2 lg:grid-cols-4 lg:max-w-[1178px]">
        <NuxtLink
          v-for="(item, i) in prItems2"
          :key="`a_${i}`"
          class="p-btn block p-6 -mb-px -mr-px md:p-[26px] md:pr-5 xl:min-h-[200px] max-md:text-center"
          :to="item.link"
        >
          <img class="mb-6 size-[64px] xl:mt-6 max-md:mx-auto" :src="item.image" alt="" loading="lazy" />
          <h4 class="font-medium leading-snug text-lg sm:text-[20px]">{{ item.title }}</h4>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useModal } from "~/composables/useScheduleModal.js";
import IconMeru from '~/assets/images/icons/icon-meru-ai.svg';
import IconInsightsStudio from '~/assets/images/icons/icon-insights-studio.svg';
import IconESA from '~/assets/images/icons/icon-search-agent.svg';
import IconDAA from '~/assets/images/icons/icon-data-graph.svg';
import IconESRA from '~/assets/images/icons/icon-search-agent.svg';
import IconMLC from '~/assets/images/icons/icon-chatbot.svg';
import IconRobot from '~/assets/images/icons/icon-robot.svg';
import IconLever from '~/assets/images/icons/icon-lever.svg';

const { openModal } = useModal();

const prItems = [
  {
    title: 'Meeru AI',
    link: '/projects/meeru-ai',
    image: IconMeru
  },
  {
    title: 'Insights Studio',
    link: '/projects/insights-studio',
    image: IconInsightsStudio
  },
  {
    title: 'AgentX Platform',
    link: '/projects/agentx-platform',
    image: IconRobot
  },
  {
    title: 'MultiLingual Chatbot',
    link: '/projects/multilingual-chatbot',
    image: IconMLC
  }
]
const prItems2 = [
  {
    title: 'Enterprise Strategy Agent',
    link: '/projects/enterprise-strategy-agent',
    image: IconESA
  },
  {
    title: 'Data Analyst Agent',
    link: '/projects/data-analyst-agent',
    image: IconDAA
  },
  {
    title: 'Enterprise Search Agent',
    link: '/projects/enterprise-search-agent',
    image: IconESRA
  },
  {
    title: 'Custom Agent',
    link: '/projects/custom-agent',
    image: IconLever
  }
]
</script>

<style scoped>
.p-btn:hover {
  color: #FF6B35;
  background: linear-gradient(180deg, rgba(255, 107, 53, 0) 5.91%, rgba(255, 107, 53, 0.0814045) 73.62%, #FF6B35 496.24%);
}
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
  @apply w-full -translate-y-[66%];
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