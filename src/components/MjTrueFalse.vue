<template>
  <component
    :is="tag"
    class="text-center rounded px-3 py-2 text-xxs font-bold min-w-[3.125rem] select-none"
    :class="{ 'bg-brand text-white': value, 'bg-white dark_bg-dark text-text': !value }"
    v-bind="$attrs"
  >
    <span v-if="value">oui</span>
    <span v-else>non</span>
  </component>
</template>

<script>
export default {
  name: 'MjTrueFalse',
  props: {
    /**
     * button position
     * @default false
     * @type {Boolean}
    */
    value: {
      type: Boolean,
      default: false
    },
    /**
     * button tag type, accepted values are `'span', 'div', 'a', 'router-link'`
     * @default 'div'
     * @type {String}
    */
    tag: {
      type: String,
      default: 'div',
      validator: value => ['span', 'div', 'a', 'router-link'].indexOf(value) >= 0
    }
  }
};
</script>
