<template>
  <div
    class="bg-gray-100 dark_bg-dark-100 rounded-b"
    :class="{ 'p-4': !noPadding }"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MjCardFooter',
  props: {
    /**
     * Remove default padding
     * @default false
     * @type {Boolean}
     */
    noPadding: {
      type: Boolean,
      default: false
    }
  }
};
</script>
