<template>
  <div>
    <NuxtLayout>
      <Header />
      <NuxtPage />
      <Footer />
      <!-- Schedule Consultation Modal -->
      <Modal
        :open="isOpen"
        @close="closeModal"
        :maskClosable="false"
      >
        <ScheduleForm />
      </Modal>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useModal } from "~/composables/useScheduleModal.js"
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import Modal from "~/components/Modal.vue";
import ScheduleForm from '~/components/ScheduleForm.vue';

const { isOpen, closeModal } = useModal()
</script>

<style scoped>
</style>