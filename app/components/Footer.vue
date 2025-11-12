<template>
  <footer class="relative px-6 pb-12 pt-[110px] overflow-x-clip footer-bg">
    <div class="overflow-clip absolute left-[50%] bottom-0 top-[-35%] max-w-auto w-[1700px] translate-x-[-50%] pointer-events-none">
      <img
        class="w-full"
        src="@/assets/images/shade-curve-footer.svg"
        alt=""
        loading="lazy"
      />
    </div>
    <div class="relative bg-black font-medium text-sm text-[#757575] rounded-3xl mx-auto max-w-[1450px] px-6 pt-14 pb-10 md:px-12">
      <div class="min-h-[187px] flex flex-col items-start justify-between gap-10 lg:flex-row">
        <div>
          <img class="h-[48px]" src="@/assets/images/critical-river-logo.png" alt="critical river" />
        </div>
        <div class="flex flex-wrap items-start gap-10 lg:max-w-[650px] xl:pr-10">
          <div class="flex flex-col gap-5 min-w-[100px]">
            <NuxtLink
              class="f-link"
              to="/"
            >Products</NuxtLink>
            <NuxtLink
              class="f-link"
              to="/about-us"
            >About</NuxtLink>
          </div>
          <div class="flex flex-col gap-5 min-w-[140px]">
            <NuxtLink
              class="f-link"
              to="/"
            >Blogs</NuxtLink>
            <NuxtLink
              class="f-link"
              to="/"
            >Documentation</NuxtLink>
            <NuxtLink
              class="f-link"
              to="/"
            >Support</NuxtLink>
          </div>
          <div class="max-w-[288px]">
            <img class="w-[33px]" src="@/assets/images/usa-flag.svg" alt="usa flag" />
            <p class="mt-2">
              4750 Willow Road, Suite 200, Pleasanton, CA 94588
            </p>
            <br/>
            <p>
              Tel: +1-844-228-5319
            </p>
            <p>
              contact@criticalriver.com
            </p>
          </div>
        </div>
      </div>
      <div class="text-right mt-10">
        © {{ year }} CriticalRiver, Inc. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = computed(() => new Date().getFullYear())
</script>

<style scoped>
.f-link:hover {
  @apply underline underline-offset-[2px];
}
.footer-bg {
  background-image: url('@/assets/images/shade-curve-footer-2.svg');
  background-repeat: no-repeat;
  background-position: bottom -100px center;
  background-size: 1700px;
}
</style>