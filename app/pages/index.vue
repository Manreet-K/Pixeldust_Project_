<template>
  <HomeHero />
  <section class="px-6 py-[100px] lg:py-[145px]">
    <div class="flex flex-wrap items-center justify-center gap-10 mx-auto max-w-[1050px] lg:justify-evenly">
      <img class="h-[18px]" src="@/assets/images/clients/oracle_logo.svg" alt="" loading="lazy" />
      <img class="h-[28px]" src="@/assets/images/clients/intel_logo.svg" alt="" loading="lazy" />
      <img class="h-[26px]" src="@/assets/images/clients/doordash_logo.svg" alt="" loading="lazy" />
      <img class="h-[28px]" src="@/assets/images/clients/uber_logo.svg" alt="" loading="lazy" />
      <img class="h-[36px]" src="@/assets/images/clients/logitech_logo.svg" alt="" loading="lazy" />
    </div>
  </section>

  <section class="px-6 py-[100px] relative overflow-x-clip">
    <div class="pointer-events-none absolute bottom-0 left-[50%] w-[1580px] translate-x-[-50%] translate-y-[30%]">
      <img
        class="w-full"
        src="@/assets/images/shade-curve-1.svg"
        alt=""
        loading="lazy"
      >
    </div>
    <div class="relative gap-y-6 flex flex-col items-center mx-auto text-center">
      <div class="text-[#ebebeb] bg-[#303030] font-mono text-[12px] px-6 py-2.5 rounded-4xl">
        FEATURED SOLUTIONS
      </div>
      <h2 class="max-w-[820px] font-medium tracking-tight leading-tight text-[36px] md:text-[56px]">
         Innovative AI solutions to drive your business forward
      </h2>
      <p class="text-base text-[#8f8f8f] max-w-[670px]">
        Discover our suite of AI-powered products designed to transform data into actionable insights,
        streamline operations, and accelerate growth.
      </p>
    </div>
    <div class="relative mt-[64px] mx-auto max-w-[1220px] md:mt-[64px]">
      <HomeSlides
        :items="pSlides"
      />
    </div>
  </section>


  <section class="overflow-x-clip relative px-6 py-[140px] md:py-[240px]">
    <div class="pointer-events-none absolute top-[50%] left-[50%] w-[1580px] translate-x-[-50%] translate-y-[-40%]">
      <img
        class="w-full"
        src="@/assets/images/shade-curve-sm.svg"
        alt=""
        loading="lazy"
      >
    </div>
    <div class="gap-y-6 flex flex-col items-center mx-auto text-center relative">
      <h2 class="font-medium tracking-tight leading-tight text-[36px] md:text-[56px]">
        The CriticalRiver advantage
      </h2>
      <p class="text-base text-[#8f8f8f] max-w-[670px]">
        Discover our suite of AI-powered products designed to transform data into
        actionable insights, streamline operations, and accelerate growth.
      </p>
    </div>
    <div class="relative overflow-clip mt-[64px] mx-auto max-w-[1118px] bg-black/80 rounded-lg divide-y divide-[#4c4c4c] border border-[#4c4c4c] grid md:grid-cols-3 md:divide-x">
      <div
        v-for="(item, i) in crAdvantages"
        :key="`a_${i}`"
        class="-mb-px -mr-px py-8 px-6 md:px-8 md:py-[45px]"
      >
        <img class="mb-6 size-[64px]" :src="item.image" alt="" loading="lazy" />
        <h4 class="mb-4 font-medium leading-snug text-[22px]">{{ item.title }}</h4>
        <p class="text-[#8F8F8F] text-base">{{ item.description }}</p>
      </div>
    </div>
  </section>

  <section class="px-6 py-20 md:py-[100px]">
    <div class="gap-y-[50px] flex flex-col items-center mx-auto max-w-[630px]">
      <h2 class="text-center font-medium tracking-tight leading-tight text-[36px] md:text-[56px]">
        Ready to unlock
        <br class="max-md:hidden"/>
        the power of Your data?
      </h2>
      <button
        @click="openModal"
        class="main-btn max-w-full w-[280px]"
      >
        Request Sandbox Access
    </button>
    </div>
  </section>
</template>

<script setup>
import { useModal } from "~/composables/useScheduleModal.js";
import IconRapid from '@/assets/images/icons/icon-rapid.svg';
import IconShield from '@/assets/images/icons/icon-shield.svg';
import IconSupport from '@/assets/images/icons/icon-expert-support.svg';

import SlideImage from '@/assets/images/home/slide-1-image.png';
import MeeruAIImage from '@/assets/images/home/meeru-ai-image.jpg';
import InsightStudioImage from '@/assets/images/home/insight-studio-image.jpg';

const { openModal } = useModal();

const crAdvantages = [
  {
    title: 'Rapid Deployment',
    description: 'Launch AI solutions faster with reduced time-to-value.',
    image: IconRapid
  },
  {
    title: 'Enterprise Grade',
    description: 'Built to scale with top-tier security and reliability.',
    image: IconShield
  },
  {
    title: 'Expert Support',
    description: 'Guidance from a team of AI specialists and data scientists.',
    image: IconSupport
  }
]

const pSlides = [
  {
    title: 'Meeru AI',
    description: `Transform your data into actionable insights with Meeru AI.
      Our advanced AI platform enables smarter decision-making, faster problem-solving,
      and continuous learning for your business.`,
    points: [
      'Real-Time Analytics: Make data-driven decisions instantly.',
      'Customizable Models: Tailor solutions to your business needs.',
      'Scalable Performance: From small projects to enterprise-scale applications.',
    ],
    image: MeeruAIImage,
    url: '/'
  },
  {
    title: 'Insights Studio',
    description: `Transform your data into actionable insights with Insights Studio.
      Our advanced platform enables smarter decision-making, faster problem-solving,
      and continuous learning for your business.`,
    points: [
      'Real-Time Analytics: Make data-driven decisions instantly.',
      'Customizable Models: Tailor solutions to your business needs.',
      'Scalable Performance: From small projects to enterprise-scale applications.',
    ],
    image: InsightStudioImage,
    url: '/'
  },
]
</script>

<style scoped>
</style>
