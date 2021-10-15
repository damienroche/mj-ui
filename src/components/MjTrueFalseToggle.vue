<template>
  <label
    class="mj-true-false-toggle relative inline-flex rounded select-none duration-150 cursor-pointer bg-gray-200 text-secondary hover_bg-gray-400 dark_bg-dark-100 dark_hover_bg-dark-200 focus-within_ring-2"
    :class="{ 'is-checked': checked }"
  >
    <input
      v-model="checked"
      type="checkbox"
      class="opacity-0 h-0 w-0 border-none absolute"
      @change="$emit('input', checked)"
    />
    <span
      :class="[
        spanClasses,
        { 'text-white': !checked }
      ]"
    >non</span>
    <span
      :class="[
        spanClasses,
        { 'text-white': checked }
      ]"
    >oui</span>
  </label>
</template>

<script>
export default {
  name: 'MjTrueFalseToggle',
  props: {
    value: Boolean
  },
  data() {
    return {
      checked: this.value || false,
      spanClasses: 'text-xs text-center font-bold w-12 py-2 dark_text-white relative'
    };
  }
};
</script>

<style scoped>
.mj-true-false-toggle::before {
  content: '';
  @apply absolute w-1/2 h-full rounded duration-200 bg-brand left-0;
}
.is-checked::before {
  content: '';
  @apply bg-brand left-12;
}
</style>
