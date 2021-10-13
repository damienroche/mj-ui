<template>
  <mj-head-tag :type="count > 0 ? 'normal' : 'gray-500'">
    {{ count }}
  </mj-head-tag>
</template>

<script>
import MjHeadTag from './MjHeadTag.vue';

export default {
  name: 'MjHeadTagCounter',
  components: {
    'mj-head-tag': MjHeadTag
  },
  props: {
    /**
     * count value, change background color if `value === 0` or `value > 0`
     * @default 0
     * @type {Number}
     */
    count: {
      type: Number,
      default: 0
    }
  }
};
</script>
