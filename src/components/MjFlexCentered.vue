<template>
  <div
    class="rounded bg-gray-100 dark_bg-dark-100 flex items-center justify-center"
    :class="{ 'text-center': textCenter }"
    :style="{ height }"
  >
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MjFlexCentered',
  props: {
    height: {
      type: String,
      default: '60px'
    },
    textCenter: {
      type: Boolean,
      default: false
    }
  }
};
</script>
