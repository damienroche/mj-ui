<template>
  <div
    class="select-none inline-flex items-center justify-center h-[22px] min-w-[40px] rounded-full font-extrabold text-xxs"
    :class="{
      'bg-navy text-white': type === 'normal',
      'bg-gray-500 dark_bg-dark-100 text-white': type === 'gray-500'
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MjHeadTag',
  props: {
    /**
     * head tag type, availables values are `['normal', 'gray-500']`
     * @default 'normal'
     * @type {String}
     */
    type: {
      type: String,
      default: 'normal',
      validator: value => ['normal', 'gray-500'].indexOf(value) >= 0
    }
  }
};
</script>
