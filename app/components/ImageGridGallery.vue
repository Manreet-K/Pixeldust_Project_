<template>
  <section class="px-6 py-[50px] relative overflow-x-clip md:py-[100px]">
    <div
      v-if="false"
      class="pointer-events-none absolute top-[50%] left-[50%] w-[1580px] translate-x-[-50%] translate-y-[-35%]">
      <img
        class="w-full"
        src="@/assets/images/product-sp-bg.svg"
        alt=""
        loading="lazy"
      >
    </div>
    <div class="mx-auto max-w-[1220px] backdrop-blur-xs">
      <div class="head-box gap-y-3 py-8 border border-b-0 border-[#4c4c4c] md:py-10">
        <h2
          class="max-w-[620px] font-medium tracking-tight leading-tight text-[36px] md:text-[40px]"
          :style="{
            maxWidth: props.headingWidth ? `${props.headingWidth}px` : ''
          }"
        >
           {{ props.title }}
        </h2>
        <p
          v-if="props.description"
          class="text-base text-[#8f8f8f] max-w-[670px]">
          {{ props.description }}
        </p>
      </div>
      <div class="grid-container pr-px relative grid grid-cols-2 md:grid-cols-3 md:divide-x lg:grid-cols-4">
        <a
          v-for="(item, i) in points"
          :key="`a_${i}`"
          class="grid-item -mb-px -mr-px p-6 border border-[#4c4c4c] md:p-[26px]"
          target="_blank"
          :href="item.url"
        >
          <img class="mb-6 size-12 shrink-0 md:mt-6" :src="item.image" alt="" loading="lazy" />
          <h4 class="font-medium leading-snug text-[20px]">{{ item.title }}</h4>
          <p
            v-if="item.description"
            class="text-[#8F8F8F] text-base mt-4">
            {{ item.description }}
          </p>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  headingWidth: Number,
  points: {
    type: Array,
    default: () => ([])
  }
})
</script>

<style scoped>
  .head-box {
    @apply flex flex-col items-center text-center rounded-t-[8px];
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      linear-gradient(133.58deg, rgba(255, 107, 53, 0.6) -52.96%, rgba(3, 2, 2, 0.6) 21.78%);

  }
  .grid-container > * {
    border-radius: 0;
  }
  .grid-item:hover {
    cursor: pointer;
    color: #FF6B35;
    background: linear-gradient(180deg, rgba(255, 107, 53, 0) 5.91%, rgba(255, 107, 53, 0.0814045) 73.62%, #FF6B35 496.24%);
  }
</style>