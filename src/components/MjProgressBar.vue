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
        'bg-navy': type === 'navy',
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
    height: {
      type: String,
      default: '10px'
    },
    type: {
      type: String,
      default: 'brand'
    },
    value: {
      type: Number,
      default: 0,
      validator: value => value >= 0 && value <= 1
    },
    stripped: {
      type: Boolean,
      default: false
    },
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
