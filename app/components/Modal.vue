<!-- Modal.vue -->
<template>
  <div
    v-if="props.open"
    class="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto px-6 py-6"
  >
    <!-- Overlay -->
    <div
      class="fixed inset-0 bg-slate-500/30 blur-[50px] animate-appear"
      :class="{
        'pointer-events-none': !props.maskClosable
      }"
      @click="emitClose"
    ></div>

    <!-- Modal Box -->
    <div
      class="relative rounded-lg bg-black shadow-lg p-6 pt-8 z-1 max-w-full mt-[80px] animate-open md:px-8"
      role="dialog"
      aria-modal="true"
      :style="{
        width: `${props.width || 640}px`
      }"
    >
      <!-- Close Button -->
      <button
        class="absolute z-2 top-3 right-3 rounded-full p-1.5 text-white cursor-pointer hover:bg-gray-500"
        @click="emitClose"
      >
        <IconCross />
      </button>

      <!-- Slot for content -->
      <slot />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import IconCross from "./IconCross.vue";

const props = defineProps({
  open: { type: Boolean, required: true },
  width: Number,
  maskClosable: {
    type: Boolean,
    default: true,
  }
})

const emit = defineEmits(["close"])

const emitClose = () => emit("close")

// Esc key listener
const handleEsc = (e) => {
  if (e.key === "Escape" && props.open) {
    emitClose()
  }
}

// Watch for open to toggle body scroll lock
watch(
  () => props.open,
  (val) => {
    if (val) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  },
  { immediate: false }
)

onMounted(() => window.addEventListener("keydown", handleEsc))
onUnmounted(() => {
  window.removeEventListener("keydown", handleEsc)
  // cleanup in case modal unmounts while open
  document.body.style.overflow = ""
})
</script>

<style scoped>
.animate-open {
  animation: scale-up 0.4s forwards ease;
  /* animation-timing-function: cubic-bezier(.47,1.64,.41,.8); */
}
@keyframes scale-up {
  0% {
    opacity: 0;
    transform: translateY(50%) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: translateY(0%) scale(1);
  }
}
.animate-appear {
  animation: appear 0.6s ease forwards;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
