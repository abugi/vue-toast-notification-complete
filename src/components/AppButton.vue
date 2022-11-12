<template>
  <button
    class="w-40 border border-primary-color rounded-[6px] py-2 my-3"
    @click="$emit('click-event')"
  >
    <slot name="btn-text" />
  </button>
</template>
