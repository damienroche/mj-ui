<template>
  <input
    type="checkbox"
    class="border-2 border-gray-400 rounded h-5 w-5"
    :class="{
      'text-navy dark_bg-dark border-gray-400 dark_border-dark-100 focus_ring-gray-300': type === 'normal'
    }"
  />
</template>

<script>
export default {
  name: 'MjCheckbox',
  props: {
    type: {
      type: String,
      default: 'normal',
      validator: value => ['normal', 'success', 'danger', 'brand'].indexOf(value) >= 0
    }
  }
};
</script>
