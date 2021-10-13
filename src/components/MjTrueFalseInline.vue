<template>
  <div class="flex items-center gap-4 bg-gray-100 dark_bg-dark-100 py-2 pl-4 pr-2 rounded">
    <mj-text class="text-xs flex-1"> {{ title }} </mj-text>
    <mj-true-false :value="value" />
  </div>
</template>

<script>
import MjTrueFalse from './MjTrueFalse.vue';
import MjText from './MjText.vue';

export default {
  name: 'MjTrueFalseInline',
  components: {
    'mj-true-false': MjTrueFalse,
    'mj-text': MjText
  },
  props: {
    /**
     * button value
     * @default true
     * @type {Boolean}
    */
    value: {
      type: Boolean,
      default: true
    },
    /**
     * title
     * @default ''
     * @type {String}
    */
    title: {
      type: String,
      default: ''
    }
  }
};
</script>
