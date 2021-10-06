<template>
  <span
    v-bind="$attrs"
    :class="{
      'text-navy dark_text-white': type === 'normal',
      'text-ternary dark_text-gray-500': type === 'ternary',
      'text-gray-500 dark_text-dark-100': type === 'gray-500',
      'select-none': !select
    }"
  >
    <slot />
  </span>
</template>

<script>
export default {
  name: 'MjText',
  props: {
    type: {
      type: String,
      default: 'normal',
      validator: value => ['normal', 'secondary', 'brand', 'ternary'].indexOf(value) >= 0
    },
    select: {
      type: Boolean,
      default: false
    }
  }
};
</script>
