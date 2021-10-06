<template>
  <div
    class="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent dark_scrollbar-thumb-dark-300 scrollbar-thumb-rounded"
    :style="{ height }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MjFixedHeight',
  props: {
    height: {
      type: String,
      default: '350px'
    }
  }
};
</script>
