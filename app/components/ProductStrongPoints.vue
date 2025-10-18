<template>
  <section class="px-6 py-[100px] relative overflow-x-clip md:py-[200px]">
    <div class="pointer-events-none absolute bottom-0 left-[50%] w-[1580px] translate-x-[-50%] translate-y-[20%]">
      <img
        class="w-full"
        src="@/assets/images/shade-curve-1.svg"
        alt=""
        loading="lazy"
      >
    </div>
    <div class="relative gap-y-6 flex flex-col items-center mx-auto text-center">
      <div class="text-[#ebebeb] bg-[#303030] uppercase font-mono text-[12px] px-6 py-2.5 rounded-4xl">
        {{ props.label }}
      </div>
      <h2
        class="max-w-[620px] font-medium tracking-tight leading-tight text-[36px] md:text-[56px]"
        :style="{
          maxWidth: props.headingWidth ? `${props.headingWidth}px` : ''
        }"
      >
         {{ props.title }}
      </h2>
      <p class="text-base text-[#8f8f8f] max-w-[670px]">
        {{ props.description }}
      </p>
    </div>
    <div class="grid-container relative mt-[64px] mx-auto max-w-[1118px] grid md:grid-cols-2 md:divide-x">
      <div
        v-for="(item, i) in points"
        :key="`a_${i}`"
        class="-mb-px -mr-px py-8 px-6 bg-black/80 border border-[#4c4c4c] md:px-8 md:py-[45px]"
      >
        <img class="mb-6 size-[64px]" :src="item.image" alt="" loading="lazy" />
        <h4 class="mb-4 font-medium leading-snug text-[22px]">{{ item.title }}</h4>
        <p class="text-[#8F8F8F] text-base">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  label: String,
  headingWidth: Number,
  points: {
    type: Array,
    default: () => ([])
  }
})
</script>

<style scoped>

  .grid-container > * {
    border-radius: 0;
  }
  /* 🟢 First item → top-left */
  .grid-container > :first-child {
    border-top-left-radius: 8px;
  }

  /* 🟢 Second item → top-right */
  .grid-container > :nth-child(2) {
    border-top-right-radius: 8px;
  }

  /* 🟢 Odd last item (single in last row) → bottom corners */
  .grid-container > :last-child:nth-child(odd) {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  /* 🟢 Even last row (two items) → bottom corners per side */
  .grid-container > :nth-last-child(2):nth-child(odd) {
    border-bottom-left-radius: 8px;
  }
  .grid-container > :last-child:nth-child(even),
  .grid-container > :nth-last-child(2):nth-child(even) {
    border-bottom-right-radius: 8px;
  }

  /* 🟢 Special: only one item */
  .grid-container:has(:only-child) > :only-child {
    border-radius: 8px;
  }

  @media screen and (max-width:767px) {
    .grid-container > * {
      border-radius: 0;
    }
    .grid-container > :first-child {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
    .grid-container > :last-child {
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }
</style>