<template>
  <span
    v-bind="$attrs"
    class="h-[30px] rounded-full text-xs select-none px-3 inline-flex items-center justify-between gap-2 font-semibold animation duration-150"
    :class="{
      'text-navy dark_text-white border border-gray-400': type === 'hollow',
      'text-ternary dark_text-gray-500': type === 'ternary',
      'hover_bg-navy hover_text-white dark_hover_bg-white dark_hover_text-navy': interactive
    }"
  >
    <slot />
    <div v-if="deletable" class="w-5 h-5 cursor-pointer" @click="$emit('delete')">
      <svg width="100%" height="100%" viewBox="0 0 24 24"><path d="M13.414 12l2.829-2.828a1 1 0 1 0-1.415-1.415L12 10.586L9.172 7.757a1 1 0 0 0-1.415 1.415L10.586 12l-2.829 2.828a1 1 0 0 0 1.415 1.415L12 13.414l2.828 2.829a1 1 0 0 0 1.415-1.415L13.414 12zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10z" fill="currentColor"></path></svg>
    </div>
  </span>
</template>

<script>
export default {
  name: 'MjTag',
  props: {
    type: {
      type: String,
      default: 'hollow',
      validator: value => ['hollow', 'secondary', 'brand', 'ternary'].indexOf(value) >= 0
    },
    deletable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    interactive() {
      return this.deletable;
    }
  }
};
</script>
