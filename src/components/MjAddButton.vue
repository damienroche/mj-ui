<template>
  <mj-button v-bind="$attrs" :size="size" @click="$emit('click', $event)">
    <span class="flex items-center gap-2">
      <div :class="{ 'h-5 w-5': size === 'normal', 'h-4 w-4': size === 'small' }">
        <svg width="100%" height="100%" viewBox="0 0 20 20"><path fill="currentColor" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0zm0 5.475a.682.682 0 0 0-.682.681V9.28H6.195a.682.682 0 0 0-.674.582l-.008.1c0 .377.305.682.682.682h3.123v3.123c0 .343.252.626.581.675l.101.007a.682.682 0 0 0 .682-.682l-.001-3.123h3.124a.682.682 0 0 0 .674-.58l.008-.102a.682.682 0 0 0-.682-.681l-3.124-.001V6.156a.682.682 0 0 0-.58-.674z"></path></svg>
      </div>
      <span>{{ title }}</span>
    </span>
  </mj-button>
</template>

<script>
import MjButton from './MjButton.vue';

export default {
  name: 'MjAddButton',
  components: {
    'mj-button': MjButton
  },
  props: {
    /**
     * Button's title
     * @default 'Ajouter'
     * @type {String}
    */
    title: {
      type: String,
      default: 'Ajouter'
    },
    size: {
      /**
       * Button size, accepted values are `['normal', 'small']`
       * @default 'normal'
       * @type {String}
      */
      type: String,
      default: 'normal'
    }
  }
};
</script>
