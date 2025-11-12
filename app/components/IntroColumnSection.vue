<template>
  <section class="px-6 py-[50px] relative overflow-x-clip md:py-[100px]">
    <div class="mx-auto max-w-[1220px] flex flex-col gap-y-16 gap-x-10 lg:flex-row">
      <div class="relative gap-y-6 flex flex-col items-center justify-center mx-auto text-center lg:text-left lg:w-[60%]">
        <div
          v-if="props.label"
          class="text-[#ebebeb] bg-[#303030] uppercase font-mono text-[12px] px-6 py-2.5 rounded-4xl"
        >
          {{ props.label }}
        </div>
        <h2
          class="font-medium tracking-tight leading-tight max-w-[650px] text-[36px] md:text-[56px]"
        >
           {{ props.title }}
        </h2>
        <p class="text-base text-[#8f8f8f] max-w-[670px]">
          {{ props.description }}
        </p>
      </div>
      <div class="flex-1 flex flex-col items-stretch gap-6 mx-auto max-w-[650px]">
        <div
          v-for="(item, i) in points"
          :key="`a_${i}`"
          class="box-bg bg-black/60 border border-[#4c4c4c] rounded-lg p-6 flex flex-col gap-6 lg:p-10"
        >
          <div class="shrink-0">
            <img class="size-16" :src="item.image" alt="" loading="lazy" />
          </div>
          <div>
            <h4 class="mb-6 font-medium leading-snug tracking-tight text-[24px] md:text-[32px]">
              {{ item.title }}
            </h4>
            <p class="text-[#8F8F8F] text-base">
              {{ item.description }}
            </p>
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
  .box-bg {
    background-image: linear-gradient(334.83deg, rgba(0, 0, 0, 0.6) 52.13%, rgba(255, 107, 53, 0.3) 132.84%);
    backdrop-filter: blur(40px);
  }
</style>