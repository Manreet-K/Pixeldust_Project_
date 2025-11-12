<template>
  <section class="px-6 py-[100px] relative overflow-x-clip md:py-[120px]">
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
    <div class="mx-auto max-w-[1220px] flex flex-col gap-y-16 gap-x-10 lg:flex-row">
      <div class="relative gap-y-6 flex flex-col items-center justify-center mx-auto text-center lg:text-left lg:w-[45%]">
        <div
          v-if="props.label"
          class="text-[#ebebeb] bg-[#303030] uppercase font-mono text-[12px] px-6 py-2.5 rounded-4xl"
        >
          {{ props.label }}
        </div>
        <h2
          class="font-medium tracking-tight leading-tight max-w-[720px] text-[36px] md:text-[56px]"
        >
           {{ props.title }}
        </h2>
        <p class="text-base text-[#8f8f8f] max-w-[620px] lg:max-w-[520px]">
          {{ props.description }}
        </p>
      </div>
      <div class="flex-1 flex flex-col items-stretch gap-6 mx-auto max-w-[720px]">
        <div
          v-for="(item, i) in points"
          :key="`a_${i}`"
          class="bg-black/60 border border-[#4c4c4c] rounded-lg py-6 px-6 flex flex-col gap-6 sm:flex-row md:px-6"
        >
          <div class="shrink-0">
            <img class="size-[40px]" :src="item.image" alt="" loading="lazy" />
          </div>
          <div>
            <h4 class="mb-3 font-medium leading-snug tracking-tight text-[20px] md:text-[24px]">
              {{ item.title }}
            </h4>
            <p class="text-[#8F8F8F] text-base">
              {{ item.description }}
            </p>
            <ul
              v-if="item.points?.length"
              class="mt-6 space-y-3"
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
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  label: String,
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