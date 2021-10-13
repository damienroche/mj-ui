<template>
  <input
    type="radio"
    class="border-2 border-gray-400 rounded-full h-5 w-5"
    :class="{
      'text-navy bg-white dark_bg-dark border-gray-400 dark_border-dark-100 focus_ring-gray-300': type === 'normal',
      'text-brand bg-white dark_bg-transparent dark_checked_bg-brand border-gray-400 dark_border-dark-100 focus_ring-gray-300': type === 'brand'
    }"
  />
</template>

<script>
// @TODO WIP
export default {
  name: 'MjRadio',
  props: {
    /**
     * radio appareance, accepted values are `['normal', 'brand']`
     * @default 'normal'
     * @type {String}
    */
    type: {
      type: String,
      default: 'normal',
      validator: value => ['normal', 'brand'].indexOf(value) >= 0
    }
  }
};
</script>
