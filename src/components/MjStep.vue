
<template>
  <div>
    <div v-show="title === data.selectedStep">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MjStep',
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
