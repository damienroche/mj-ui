<template>
  <input
    type="checkbox"
    class="border-2 border-gray-400 rounded h-5 w-5"
    :class="{
      'text-primary dark_bg-dark border-gray-400 dark_border-dark-100 focus_ring-gray-300': type === 'normal',
      'text-brand': type === 'brand'
    }"
  />
</template>

<script>
export default {
  name: 'MjCheckbox',
  props: {
    /**
     * checkbox appareance, accepted values are `['normal', 'brand']`
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
