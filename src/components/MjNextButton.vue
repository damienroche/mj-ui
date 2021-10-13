<template>
  <mj-button v-bind="$attrs" :size="size">
    <span class="flex items-center gap-2">
      <div :class="{ 'h-5 w-5': size === 'normal', 'h-4 w-4': size === 'small' }">
        <svg width="100%" height="100%" viewBox="0 0 16 16"><g fill="currentColor"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path></g></svg>
      </div>
      <span>{{ title }}</span>
    </span>
  </mj-button>
</template>

<script>
import MjButton from './MjButton.vue';
export default {
  name: 'MjNextButton',
  components: {
    'mj-button': MjButton
  },
  props: {
    /**
     * Button title
     * @default 'Suivant'
     * @type {String}
    */
    title: {
      type: String,
      default: 'Suivant'
    },
    size: {
      /**
       * Button size, accepted values are `['normal', 'small']`
       * @default 'normal'
       * @type {String}
      */
      type: String,
      default: 'normal'
    },
  }
};
</script>
