<template>
  <div
    class="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent dark_scrollbar-thumb-dark-300 scrollbar-thumb-rounded"
    :style="{ height }"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MjFixedHeight',
  props: {
    /**
     * Fixed Height in pixel
     * @default '350px'
     * @type {String}
     */
    height: {
      type: String,
      default: '350px'
    }
  }
};
</script>
