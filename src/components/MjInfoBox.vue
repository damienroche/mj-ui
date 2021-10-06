<template>
  <div class="rounded p-3 flex items-center gap-3" :class="{
    'bg-brand-light text-brand dark_bg-brand-dark dark_text-white': color === 'brand',
    'bg-danger-light text-danger dark_bg-danger-dark dark_text-white': color === 'danger',
    'bg-success-light text-success dark_bg-success-dark dark_text-white': color === 'success'
  }"
  >
    <div
      v-if="icon === 'info'"
      class="w-5 h-5 flex-none"
    >
      <svg width="100%" height="100%" viewBox="0 0 24 24"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10zm0-12a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1zm0-1a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" fill="currentColor"></path></svg>
    </div>
    <div class="text-xs">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MjInfoBox',
  props: {
    color: {
      type: String,
      default: 'brand'
    },
    icon: {
      type: String,
      default: 'info'
    }
  }
};
</script>
