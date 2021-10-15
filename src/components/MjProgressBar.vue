<template>
  <div
    ref="bar"
    class="w-full rounded-full relative"
    :class="{
      'cursor-pointer': interactive,
      'bg-gray-100 dark_bg-dark-200': stripped
    }"
    :style="{ height }"
    @click.stop="onClick"
  >
    <div
      class="rounded-full w-full h-full"
      style="background-size: 1em 1em;"
      :class="{
        'bg-stripe-light dark_bg-stripe-dark': stripped,
        'bg-white bg-opacity-20': !stripped
      }"
    />
    <div
      class="absolute top-0 left-0 h-full rounded-full"
      :class="{
        'bg-brand': type === 'brand',
        'bg-primary': type === 'navy',
        'bg-success': type === 'success',
        'bg-danger': type === 'danger',
      }"
      :style="{
        width: `${value * 100}%`
      }"
    />
  </div>
</template>

<script>
export default {
  name: 'MjProgressBar',
  props: {
    /**
     * Progress bar height in pixels
     * @default '10px'
     * @type {String}
    */
    height: {
      type: String,
      default: '10px'
    },
    /**
     * Progress bar style, accepted values are `['brand', 'navy', 'success', 'danger']`
     * @default 'brand'
     * @type {String}
    */
    type: {
      type: String,
      default: 'brand',
      validator: value => ['brand', 'navy', 'success', 'danger'].indexOf(value) >= 0
    },
    /**
     * Progress value, float between 0 and 1
     * @default 0
     * @type {Float}
    */
    value: {
      type: Number,
      default: 0,
      validator: value => value >= 0 && value <= 1
    },
    /**
     * Add stripped background to progress bar
     * @default false
     * @type {Boolean}
    */
    stripped: {
      type: Boolean,
      default: false
    },
    /**
     * In interactive mode, click on progress bar emit an event with the percentage of progression
     * For example, we use it to navigate in a audio playback
     * @default false
     * @type {Boolean}
    */
    interactive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick(event) {
      if (!this.interactive) {
        return;
      }
      const { width, left } = event.target.getBoundingClientRect();
      const x = event.clientX - left;
      this.$emit('click', x / width);
    }
  }
};
</script>
