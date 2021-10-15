<template>
  <component
    :is="inputTag"
    v-bind="$attrs"
    class="text-xs h-[3.125rem] border border-secondary-light rounded bg-white dark_bg-dark-100 dark_border-dark-200 w-full px-2 text-primary dark_text-white font-semibold"
    :class="{ 'scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent dark_scrollbar-thumb-dark-300 scrollbar-thumb-rounded': tag === 'textarea' }"
  />
</template>

<script>
export default {
  name: 'MjInput',
  props: {
    /**
     * type of input tag, accepted values are `['input', 'textarea']`
     * @default 'input'
     * @type {String}
    */
    tag: {
      type: String,
      default: 'input',
      validator: value => ['input', 'textarea'].indexOf(value) >= 0
    }
  },
  computed: {
    inputTag() {
      return this.tag;
    }
  }
};
</script>
