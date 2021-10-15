<template>
  <component
    :is="tag"
    v-bind="$attrs"
    :class="{
      'text-primary dark_text-white': type === 'normal',
      'text-brand': type === 'brand',
      'text-secondary dark_text-gray-500': type === 'secondary',
      'text-gray-500 dark_text-dark-200': type === 'gray-500',
      'select-none': !selectable,
      'hover_text-gray-600 dark_hover_text-gray-200': type === 'gray-500' && hoverable,
      'text-success': type === 'success',
      'animation duration-150': hoverable,
      'group-hover_text-brand duration-150': groupHover === 'brand'
    }"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'MjText',
  props: {
    /**
     * Text type, accepted values are `['normal', 'secondary', 'gray-500', 'success', 'brand']`
     * @default 'normal'
     * @type {String}
    */
    type: {
      type: String,
      default: 'normal',
      validator: value => ['normal', 'secondary', 'gray-500', 'success', 'brand'].indexOf(value) >= 0
    },
    /**
     * If `true` users can select text.
     * @default false
     * @type {Boolean}
    */
    selectable: {
      type: Boolean,
      default: false
    },
    /**
     * Text tag type, accepted values are `['span', 'div', 'a', 'router-link']`
     * @default 'span'
     * @type {String}
    */
    tag: {
      type: String,
      default: 'span',
      validator: value => ['span', 'div', 'a', 'router-link'].indexOf(value) >= 0
    },
    /**
     * Set animation if text is hoverable
     * @default false
     * @type {Boolean}
    */
    hoverable: {
      type: Boolean,
      default: false
    },
    /**
     * Add group-hover classes, only avalaible from type `brand`
     * @default null
     * @type {String}
    */
    groupHover: {
      type: String,
      default: null,
      validator: value => ['brand'].indexOf(value) >= 0
    }
  }
};
</script>
