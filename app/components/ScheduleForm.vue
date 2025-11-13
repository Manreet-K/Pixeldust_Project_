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
      name="contactForm"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      class="flex flex-col items-stretch w-full gap-4"
      @submit.prevent="handleSubmit"
      novalidate
    >
      <!-- required by Netlify when using AJAX -->
      <input type="hidden" name="form-name" value="contactForm" />

      <!-- Honeypot -->
      <p class="hidden">
        <label>
          Don't fill this out if you're human:
          <input name="bot-field" v-model="form.botField" autocomplete="off" />
        </label>
      </p>

      <div>
        <input
          class="f-input"
          type="text"
          name="name"
          placeholder="Your Name"
          v-model.trim="form.name"
          :aria-invalid="!!errors.name"
          :aria-describedby="errors.name ? 'err-name' : undefined"
          required
        />
        <div class="f-error" v-if="errors.name" id="err-name">{{ errors.name }}</div>
      </div>

      <div>
        <input
          class="f-input"
          type="email"
          name="email"
          placeholder="Email ID"
          v-model.trim="form.email"
          :aria-invalid="!!errors.email"
          :aria-describedby="errors.email ? 'err-email' : undefined"
          required
        />
        <div class="f-error" v-if="errors.email" id="err-email">{{ errors.email }}</div>
      </div>

      <div class="-mb-1">
        <textarea
          class="f-input"
          name="message"
          placeholder="Your Message"
          rows="3"
          v-model.trim="form.message"
          :aria-invalid="!!errors.message"
          :aria-describedby="errors.message ? 'err-message' : undefined"
          required
        />
        <div class="f-error" v-if="errors.message" id="err-message">{{ errors.message }}</div>
      </div>

      <button
        type="submit"
        class="main-btn min-w-[180px] mt-1 mr-auto disabled:opacity-60 disabled:cursor-not-allowed"
        :disabled="submitting"
      >
        <span v-if="submitting">Submitting…</span>
        <span v-else>Submit</span>
      </button>

      <div class="f-error" v-if="submitError">{{ submitError }}</div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: '',
  botField: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const formSubmitted = ref(false)
const submitting = ref(false)
const submitError = ref('')

function validate () {
  errors.name = ''
  errors.email = ''
  errors.message = ''

  if (!form.name) {
    errors.name = 'Name is required.'
  } else if (form.name.length < 2) {
    errors.name = 'Please enter at least 2 characters.'
  }

  if (!form.email) {
    errors.email = 'Email is required.'
  } else {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    if (!emailOk) errors.email = 'Please enter a valid email address.'
  }

  if (!form.message) {
    errors.message = 'Message is required.'
  } else if (form.message.length < 10) {
    errors.message = 'Please provide a bit more detail (min 10 characters).'
  }

  return !(errors.name || errors.email || errors.message)
}

function toUrlEncoded (data) {
  return new URLSearchParams(data).toString()
}

async function handleSubmit () {
  submitError.value = ''
  if (!validate()) return

  // Honeypot – if filled, silently succeed
  if (form.botField) {
    formSubmitted.value = true
    return
  }

  submitting.value = true
  try {
    const payload = {
      'form-name': 'contactForm',
      name: form.name,
      email: form.email,
      message: form.message,
      'bot-field': form.botField
    }

    const res = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: toUrlEncoded(payload)
    })

    if (!res.ok) {
      throw new Error('Submission failed. Please try again.')
    }

    formSubmitted.value = true
  } catch (e) {
    submitError.value = e?.message || 'Something went wrong. Please try again.'
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
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
</style>
