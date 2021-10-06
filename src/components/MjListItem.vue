<template>
  <div>
    <div class="hover_bg-brand-light animation duration-150 p-5 rounded group dark_hover_bg-dark-300">
      <slot />
    </div>
    <mj-horizontal-border v-if="showBorder" />
  </div>
</template>

<script>
export default {
  name: 'MjListItem',
  props: {
    showBorder: {
      type: Boolean,
      default: true
    }
  }
};
</script>
