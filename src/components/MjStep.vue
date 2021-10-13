
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
    /**
     * step title
     * @default null
     * @type {String}
    */
    title: {
      type: String,
      required: true
    },
    /**
     * is step disabled
     * @default false
     * @type {Boolean}
    */
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
