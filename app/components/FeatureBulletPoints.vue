<template>
  <section
    class="px-6 py-[100px] relative overflow-x-clip"
    :class="[
      props.lgSpaceReduce ? 'md:py-[120px]': 'md:py-[200px]'
    ]"
  >
    <div class="pointer-events-none absolute top-[50%] left-[50%] w-[1580px] translate-x-[-50%] translate-y-[-45%]">
      <img
        class="w-full opacity-60"
        src="@/assets/images/product-sp-bg.svg"
        alt=""
        loading="lazy"
      >
    </div>
    <div class="relative gap-y-6 flex flex-col items-center mx-auto text-center">
      <div
        v-if="props.label"
        class="text-[#ebebeb] bg-[#303030] uppercase font-mono text-[12px] px-6 py-2.5 rounded-4xl"
      >
        {{ props.label }}
      </div>
      <h2
        class="max-w-[620px] font-medium tracking-tight leading-tight text-[36px] md:text-[56px]"
        :style="props.headingWidth
          ? {
            maxWidth: `${props.headingWidth}px`
          }:{}
        "
      >
         {{ props.title }}
      </h2>
      <p class="text-base text-[#8f8f8f] max-w-[720px]">
        {{ props.description }}
      </p>
    </div>
    <div class="grid-container relative mt-[64px] mx-auto max-w-[1220px] grid gap-y-6 gap-x-4 grid-cols-1 md:grid-cols-2 lg:gap-8">
      <div
        v-for="(item, i) in points"
        :key="`a_${i}`"
        class="bg-black/60 border border-[#4c4c4c] rounded-lg p-6 lg:p-10"
      >
        <img class="mb-6 size-[64px] md:mb-10" :src="item.image" alt="" loading="lazy" />
        <h4 class="mb-4 font-medium leading-snug tracking-tight text-[24px] md:text-[36px]">
          {{ item.title }}
        </h4>
        <p class="text-[#8F8F8F] text-base">
          {{ item.description }}
        </p>
        <ul
          v-if="item.points?.length"
          class="mt-9 space-y-3"
        >
          <li
            v-for="(pt, idx) in item.points"
            :key="idx"
            class="text-white leading-tight text-[14px]  font-medium point-item md:text-[16px]"
          >
            {{ pt }}
          </li>
        </ul>
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
  lgSpaceReduce: {
    type: Boolean,
    default: false
  },
  points: {
    type: Array,
    default: () => ([])
  }
})
</script>

<style scoped>
  .point-item {
    @apply flex items-start gap-[8px] justify-start;
  }
  .point-item::before {
    content: "";
    @apply bg-[#FF6B35] rounded-full p-[4px] shrink-0 mt-[6.5px];
  }
</style>