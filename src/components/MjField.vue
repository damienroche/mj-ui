<template>
  <div>
    <label
      class="flex justify-between gap-2"
      :class="{
        'flex-col': orientation === 'vertical',
        'flex-row items-center': orientation === 'horizontal'
      }"
    >
      <div class="text-xxxs w-full">
        <mj-text type="ternary">{{ label }}</mj-text>
        <span
          v-if="required"
          class="text-danger"
        >
          &nbsp;*
        </span>
      </div>
      <slot />
    </label>
    <div v-if="!!$slots.message" class="mt-1 text-xxs">
      <slot name="message" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MjField',
  props: {
    label: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    orientation: {
      type: String,
      default: 'vertical',
      validator: value => ['vertical', 'horizontal'].indexOf(value) >= 0
    }
  }
};
</script>
