<template>
  <div>
    <component
      :is="tag"
      class="p-5 rounded group"
      :class="{ 'dark_hover_bg-dark-300 hover_bg-brand-light duration-150': hoverable }"
    >
      <slot />
    </component>
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
    },
    tag: {
      type: String,
      default: 'div',
      validator: value => ['div', 'a', 'li', 'router-link'].indexOf(value) >= 0
    },
    hoverable: {
      type: Boolean,
      default: false
    }
  }
};
</script>
