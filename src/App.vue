<script setup>
import { useNotification } from "./stores/toast";
import NotificationToastVue from "./components/AppToast.vue";
import AppButton from "./components/AppButton.vue";

const toast = useNotification();

const activateToast = (type, message) => {
  toast.notification = { type, message };
};
</script>

<template>
  <NotificationToastVue v-if="toast.notification.type.length" />
  <section class="w-screen h-screen flex flex-col items-center justify-center">
    <app-button
      class="text-[#75BA45] bg-[#75BA45] bg-opacity-30"
      @click-event="activateToast('success', 'This is success toast')"
    >
      <template v-slot:btn-text>Success</template>
    </app-button>
    <app-button
      class="text-[#60A5FA] bg-[#60A5FA] bg-opacity-30"
      @click-event="activateToast('info', 'This is info toast')"
    >
      <template v-slot:btn-text>Info</template>
    </app-button>
    <app-button
      class="text-[#EA4B4B] bg-[#EA4B4B] bg-opacity-30"
      @click-event="activateToast('error', 'This is error toast')"
    >
      <template v-slot:btn-text>Error</template>
    </app-button>
  </section>
</template>
