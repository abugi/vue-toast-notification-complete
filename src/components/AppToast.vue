<script setup>
import { onMounted, ref } from "vue";
import { useNotification } from "../stores/toast";

const toast = useNotification();
let imageFile;
let toastBgColor = ref("");
let borderColor = ref("");

if (toast.notification.type === "success") {
  imageFile = "success-toast-icon.svg";
  toastBgColor.value = "#75BA45";
  borderColor.value = toastBgColor.value;
} else if (toast.notification.type === "error") {
  imageFile = "failure-toast-icon.svg";
  toastBgColor.value = "#EA4B4B";
  borderColor.value = toastBgColor.value;
} else if (toast.notification.type === "info") {
  imageFile = "info-toast-icon.svg";
  toastBgColor.value = "#60A5FA";
  borderColor.value = toastBgColor.value;
}

const createImageUrl = () =>
  new URL(`../assets/images/${imageFile}`, import.meta.url).href;

// Hide notification toast after one second
onMounted(() => {
  setTimeout(() => {
    toast.notification.type = "";
    toast.notification.message = "";
  }, 1000);
});
</script>

<template>
  <main
    class="fixed top-20 right-14 p-2 w-80 min-h-14 rounded-md flex items-center justify-start z-50 bg-opacity-10 text-white"
    :style="{
      backgroundColor: toastBgColor,
      border: '1px solid' + borderColor,
    }"
  >
    <img
      :src="createImageUrl()"
      alt="notification"
      class="w-12 notification-icon"
    />
    <span class="pl-2 text-md">{{ toast.notification.message }}</span>
  </main>
</template>
