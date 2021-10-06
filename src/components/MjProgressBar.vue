<template>
  <div
    class="w-full bg-gray-100 dark_bg-dark-200 rounded-full relative"
    :style="{ height }"
  >
    <div
      class="rounded-full w-full bg-stripe-light dark_bg-stripe-dark h-full"
      style="background-size: 1em 1em;"
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
    }
  }
};
</script>
