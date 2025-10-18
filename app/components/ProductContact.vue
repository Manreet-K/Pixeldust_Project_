<template>
  <section class="px-6 py-20 md:py-[100px]">
    <div class="gap-y-[50px] flex flex-col items-center mx-auto max-w-[730px]">
      <h2
        class="text-center font-medium tracking-tight leading-tight text-[36px] md:text-[56px]"
        v-html="props.title"
      >
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
const props = defineProps({
  title: String,
})
const { openModal } = useModal();
</script>

<style scoped>
</style>