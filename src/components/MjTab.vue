
<template>
  <div>
    <div v-show="title === data.selectedTab">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MjTab',
  inject: ['data'],
  props: {
    title: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
