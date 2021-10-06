<template>
  <component
    :is="inputTag"
    v-bind="$attrs"
    class="text-xs h-[50px] border border-ternary-light rounded bg-white dark_bg-dark-100 dark_border-dark-200 w-full"
    :class="{ 'scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent dark_scrollbar-thumb-dark-300 scrollbar-thumb-rounded': tag === 'textarea' }"
  />
</template>

<script>
export default {
  name: 'MjInput',
  props: {
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
