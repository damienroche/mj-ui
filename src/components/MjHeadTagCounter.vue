<template>
  <mj-head-tag :type="count > 0 ? 'normal' : 'gray-500'">
    {{ count }}
  </mj-head-tag>
</template>

<script>
export default {
  name: 'MjHeadTagCounter',
  props: {
    count: {
      type: Number,
      default: 0
    }
  }
};
</script>
