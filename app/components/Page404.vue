<template>
  <main
    class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black px-6 py-[100px]"
    role="main"
    aria-labelledby="title"
  >
    <section
      class="max-w-xl w-full text-center"
      aria-live="polite"
    >
      <div
        class="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 shadow-lg mb-6 mx-auto"
        aria-hidden="true"
      >
        <!-- simple icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75L14.25 14.25M14.25 9.75L9.75 14.25" />
        </svg>
      </div>

      <h1 id="title" class="text-6xl sm:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-3">
        404
      </h1>

      <p class="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4">
        Oops — the page you were looking for doesn't exist.
      </p>

      <p class="text-sm text-gray-500 dark:text-gray-400 mb-8">
        It might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          @click="goHome"
          class="inline-flex items-center justify-center px-5 py-3 rounded-lg main-btn text-white text-sm font-medium shadow-sm transition"
        >
          Go to Home
        </button>

        <button
          @click="goBack"
          class="inline-flex items-center justify-center px-5 py-3 rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 text-sm text-gray-700 dark:text-gray-200 transition"
        >
          Go Back
        </button>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  // prefer router push when available (keeps SPA navigation)
  if (router && typeof router.push === 'function') {
    router.push({ path: '/' })
  } else {
    // fallback
    window.location.href = '/'
  }
}

function goBack() {
  // try history back, otherwise go home
  if (window.history.length > 1) {
    window.history.back()
  } else {
    goHome()
  }
}
</script>

<style scoped>
/* small visual polish (optional) */
</style>
