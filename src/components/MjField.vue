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
        <mj-text type="secondary">{{ label }}</mj-text>
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
import MjText from './MjText.vue';

export default {
  name: 'MjField',
  components: {
    'mj-text': MjText
  },
  props: {
    /**
     * Field label `required`
     * @default null
     * @type {String}
     */
    label: {
      type: String,
      required: true
    },
    /**
     * Display '*' at the end of label
     * @default false
     * @type {Boolean}
     */
    required: {
      type: Boolean,
      default: false
    },
    /**
     * Field orientation, availables values are `['vertical', 'horizontal']`
     * @default 'vertical'
     * @type {String}
    */
    orientation: {
      type: String,
      default: 'vertical',
      validator: value => ['vertical', 'horizontal'].indexOf(value) >= 0
    }
  }
};
</script>
