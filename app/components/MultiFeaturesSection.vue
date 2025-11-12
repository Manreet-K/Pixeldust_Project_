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
    <template
     v-for="(comp, i) in props.rows"
     :key="i"
    >
      <template v-if="comp.type === 'point-list'">
        <div
          class="mx-auto max-w-[1118px] mt-[64px] bg-black/60 border border-[#4c4c4c] backdrop-blur-xs rounded-lg overflow-clip"
        >
          <div class="head-box gap-y-3 px-5 py-8 border-b border-[#4c4c4c]">
            <h2
              class="max-w-[620px] font-medium tracking-tight leading-tight text-[24px] md:text-[32px]"
            >
              {{ comp.title }}
            </h2>
            <p
              v-if="comp.subTitle"
              class="text-base text-[#8f8f8f] max-w-[740px]">
              {{ comp.subTitle }}
            </p>
          </div>
          <div class="grid-container pr-px relative grid grid-cols-1 md:grid-cols-3">
            <div
              v-for="(item, i) in comp?.points || []"
              :key="`a_${i}`"
              class="grid-item -mb-px -mr-0.5 p-6  border-b border-r border-[#4c4c4c] lg:py-8 lg:px-10"
            >
              <div class="mb-8 size-16 shrink-0 md:mt-4">
                <img class="w-full h-full" :src="item.image" alt="" loading="lazy" />
              </div>
              <h4 class="font-medium leading-snug text-lg md:text-[22px]">{{ item.title }}</h4>
              <p
                v-if="item.description"
                class="text-[#8F8F8F] text-base mt-3">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </template>
      <template v-else-if="comp.type === 'description-point-list'">
        <div
          class="mx-auto max-w-[1118px] mt-[64px] bg-black/60 border border-[#4c4c4c] backdrop-blur-xs rounded-lg overflow-clip"
        >
          <div class="head-box gap-y-3 px-5 py-8 border-b border-[#4c4c4c]">
            <h2
              class="max-w-[620px] font-medium tracking-tight leading-tight text-[24px] md:text-[32px]"
            >
              {{ comp.title }}
            </h2>
            <p
              v-if="comp.subTitle"
              class="text-base text-[#8f8f8f] max-w-[700px]">
              {{ comp.subTitle }}
            </p>
          </div>
          <div class="relative flex flex-col items-stretch gap-10 p-6 md:p-8 lg:flex-row lg:items-start">
            <div class="lg:w-[41.8%] lg:pt-5 lg:pr-5">
              <p class="text-[#8F8F8F] text-base md:text-lg">
                {{ comp.description }}
              </p>
              <ul
                v-if="comp.bullets?.length"
                class="mt-8 space-y-3"
              >
                <li
                  v-for="(pt, idx) in comp.bullets"
                  :key="idx"
                  class="text-white leading-tight text-[14px]  font-medium point-item md:text-[16px]"
                >
                  {{ pt }}
                </li>
              </ul>
            </div>
            <div class="flex-1">
              <p class="text-[#8F8F8F] text-sm mb-5">
                {{ comp.pointList?.title }}
              </p>
              <div
                v-if="comp.pointList?.points"
                class="grid gap-6 sm:grid-cols-2 border-[#4c4c4c] rounded-lg lg:border lg:p-6"
              >
                <div
                  v-for="(item, i) in comp.pointList?.points || []"
                  :key="`a_${i}`"
                  class="rounded-lg px-5 py-6 border border-[#4c4c4c] flex items-center gap-3"
                >
                  <div class="size-6 shrink-0">
                    <img class="w-full h-full" :src="item.image" alt="" loading="lazy" />
                  </div>
                  <div>
                    <h4 class="font-medium leading-snug text-base">{{ item.title }}</h4>
                    <p
                      v-if="item.description"
                      class="text-[#8F8F8F] text-base mt-3">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </template>
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
  rows: {
    type: Array,
    default: () => ([])
  },
})
</script>

<style scoped>
  .head-box {
    @apply flex flex-col items-center text-center rounded-t-[8px];
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      linear-gradient(133.58deg, rgba(255, 107, 53, 1) -52.96%, rgba(3, 2, 2, 0.6) 21.78%);
  }
  .grid-item:last-child {
    border-right: none;
  }
  .point-item {
    @apply flex items-start gap-[8px] justify-start;
  }
  .point-item::before {
    content: "";
    @apply bg-[#FF6B35] rounded-full p-[4px] shrink-0 mt-[6.5px];
  }
</style>