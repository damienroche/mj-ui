<template>
  <mj-head-tag>
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
