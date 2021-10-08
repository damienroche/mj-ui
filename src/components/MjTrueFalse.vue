<template>
  <component
    :is="tag"
    class="text-center rounded px-3 py-2 text-xxs font-bold min-w-[50px] select-none"
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
    value: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'div',
      validator: value => ['span', 'div', 'a', 'router-link'].indexOf(value) >= 0
    }
  }
};
</script>
