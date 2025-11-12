<template>
  <div class="mb-5">
    <h4 class="leading-tight tracking-tight text-[18px] font-semibold mb-6 md:text-[24px]">
      Request Sandbox Access
    </h4>
    <!-- Success state -->
    <div
      v-if="formSubmitted"
      class="rounded-md border border-[#4c4c4c] text-center p-4 min-h-[300px] gap-3 flex flex-col items-center justify-center"
    >
      <img class="w-16" src="@/assets/images/check.png" alt="" />
      <div class="font-medium text-xl">Thank you for contacting us.</div>
      <div class="mb-3">
        We've received your message and our team will get back to you shortly.
      </div>
    </div>

    <!-- Netlify form -->
    <form
      v-else
      data-netlify="true"
      action="./success.html"
      name="RequestAccessForm"
      class="flex flex-col items-stretch w-full gap-4"
    >
      <!-- Required for Netlify to identify the form -->
      <input type="hidden" name="form-name" value="RequestAccessForm" />


      <!-- Honeypot (hidden) -->
      <p class="hidden">
        <label>Don't fill this out if you're human:
          <input name="bot-field" />
        </label>
      </p>

      <div>
        <input
          class="f-input"
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <div class="f-error" v-if="errors?.name">{{ errors?.name }}</div>
      </div>

      <div>
        <input
          class="f-input"
          type="email"
          name="email"
          placeholder="Email ID"
          required
        />
        <div class="f-error" v-if="errors?.email">{{ errors?.email }}</div>
      </div>

      <div class="-mb-1">
        <textarea
          class="f-input"
          name="message"
          placeholder="Your Message"
          rows="3"
          required
        />
        <div class="f-error" v-if="errors?.message">{{ errors?.message }}</div>
      </div>

      <button
        type="submit"
        class="main-btn min-w-[180px] mt-1 mr-auto"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Form css START  */
.f-error {
  @apply text-[12px] text-[#ff0000] mt-[4px];
}
.f-input {
  @apply w-full rounded-[6px] text-[18px] px-[16px] py-[12px] bg-[#000000] border border-[#4c4c4c] outline-none;
  @apply hover:border-[#999999] focus:border-[#4583ff];
}
textarea.f-input {
  resize: none;
}
/* Form css END  */
</style>
