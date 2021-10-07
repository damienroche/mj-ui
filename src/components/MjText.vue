<template>
  <component
    :is="tag"
    v-bind="$attrs"
    :class="{
      'text-navy dark_text-white': type === 'normal',
      'text-ternary dark_text-gray-500': type === 'ternary',
      'text-gray-500 dark_text-dark-200': type === 'gray-500',
      'select-none': !select,
      'hover_text-gray-600 dark_hover_text-gray-200': type === 'gray-500' && hoverable,
      'animation duration-150': hoverable
    }"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'MjText',
  props: {
    type: {
      type: String,
      default: 'normal',
      validator: value => ['normal', 'secondary', 'brand', 'ternary', 'gray-500'].indexOf(value) >= 0
    },
    select: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'span',
      validator: value => ['span', 'div', 'a', 'router-link'].indexOf(value) >= 0
    },
    hoverable: {
      type: Boolean,
      default: false
    }
  }
};
</script>
