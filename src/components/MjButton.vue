<template>
  <component
    :is="buttonTag"
    :style="styles"
    v-bind="$attrs"
    :class="{
      'bg-primary text-white hover_bg-primary-dark focus_bg-primary': type === 'primary',
      'bg-gray-200 text-secondary hover_bg-gray-400 border border-gray-400 dark_bg-dark-200 dark_text-white dark_border-transparent dark_hover_bg-dark-300': type === 'secondary',
      'bg-brand text-white hover_bg-brand-dark': type === 'brand',
      'bg-success text-white hover_bg-success-dark': type === 'success',
      'bg-danger text-white hover_bg-danger-dark': type === 'danger',
      'bg-transparent text-secondary hover_text-secondary-dark': type === 'transparent',
      'h-[2.5rem] text-xs px-4': size === 'normal',
      'h-[1.875rem] text-xxs px-3': size === 'small'
    }"
    class="select-none relative inline-flex items-center justify-center rounded font-bold duration-150 disabled_cursor-not-allowed disabled_opacity-75 leading-none"
    @click="$emit('click')"
  >
    <div class="flex-none whitespace-nowrap">
      <slot />
    </div>
  </component>
</template>

<script>
export default {
  name: 'MjButton',
  props: {
    tag: {
      /**
       * type of html tag, accepted values are `'button', 'a', 'input', 'router-link'`
       * @default 'button'
       * @type {String}
      */
      type: String,
      default: 'button',
      validator: value => ['button', 'a', 'input', 'router-link'].indexOf(value) >= 0
    },
    /**
     * button appareance, accepted values are `'primary', 'secondary', 'transparent', 'brand', 'success', 'danger'`
     * @default 'primary'
     * @type {String}
    */
    type: {
      type: String,
      default: 'primary',
      validator: value => ['primary', 'secondary', 'transparent', 'brand', 'success', 'danger'].indexOf(value) >= 0
    },
    /**
     * button size, accepted values are `'normal', 'small'`
     * @default 'primary'
     * @type {String}
    */
    size: {
      type: String,
      default: 'normal',
      validator: value => ['normal', 'small'].indexOf(value) >= 0
    }
  },
  computed: {
    styles() {
      return {
        width: this.fullWidth ? '100%' : this.width
      };
    },
    buttonTag() {
      if (this.$attrs.disabled !== undefined && this.$attrs.disabled !== false) {
        return 'button';
      }

      return this.tag;
    }
  }
};
</script>
