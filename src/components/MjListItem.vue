<template>
  <div>
    <component
      :is="tag"
      class="p-5 rounded group block"
      :class="{ 'dark_hover_bg-dark-300 hover_bg-brand-light duration-150': hoverable }"
    >
      <slot />
    </component>
    <mj-horizontal-border v-if="showBorder" />
  </div>
</template>

<script>
import MjHorizontalBorder from './MjHorizontalBorder.vue';

export default {
  name: 'MjListItem',
  components: {
    'mj-horizontal-border': MjHorizontalBorder
  },
  props: {
    /**
     * Show border bottom
     * @default true
     * @type {Boolean}
    */
    showBorder: {
      type: Boolean,
      default: true
    },
    /**
     * type of html tag, accepted values are `['div', 'a', 'router-link']`
     * @default 'div'
     * @type {String}
    */
    tag: {
      type: String,
      default: 'div',
      validator: value => ['div', 'a', 'li', 'router-link'].indexOf(value) >= 0
    },
    /**
     * Apply some background style if is hoverable
     * @default false
     * @type {Boolean}
    */
    hoverable: {
      type: Boolean,
      default: false
    }
  }
};
</script>
