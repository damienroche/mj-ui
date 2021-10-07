<template>
  <div>
    <component
      :is="tag"
      class="hover_bg-brand-light animation duration-150 p-5 rounded group dark_hover_bg-dark-300"
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
    }
  }
};
</script>
