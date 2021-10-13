<template>
  <div class="flex items-center gap-4 bg-gray-100 dark_bg-dark-100 py-2 pl-4 pr-2 rounded">
    <mj-text class="text-xs flex-1"> {{ title }} </mj-text>
    <mj-true-false :value="value" />
  </div>
</template>

<script>
import MjTrueFalse from './MjTrueFalse.vue';

export default {
  name: 'MjInlineTrueFalse',
  components: {
    MjTrueFalse
  },
  props: {
    value: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    }
  }
};
</script>
