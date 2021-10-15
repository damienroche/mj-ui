<template>
  <div>
    <div ref="content" class="bg-primary p-2 rounded text-white">
      <slot name="tooltip" />
    </div>
    <div ref="trigger" class="w-full" :class="{ 'flex': !inline, 'inline-flex': inline }">
      <slot />
    </div>
  </div>
</template>

<script>
import tippy, { followCursor } from 'tippy.js';
export default {
  name: 'MjTooltip',
  props: {
    followCursor: {
      type: [Boolean, String],
      default: true,
      validator: value => ['horizontal', 'vertical', true, false, undefined].indexOf(value) >= 0
    },
    maxWidth: {
      type: [String, Number, undefined],
      default: undefined
    },
    inline: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'left',
      validator: value => ['auto', 'auto-start', 'auto-end', 'top', 'bottom', 'right', 'left', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'right-start', 'right-end', 'left-start', 'left-end'].indexOf(value) >= 0
    },
    zIndex: {
      type: Number,
      default: 9999
    },
    popperOptions: {
      type: Object,
      default: null
    },
    offset: {
      type: Array,
      default: () => [5, 5]
    }
  },
  data() {
    return {
      instance: null
    };
  },
  computed: {
    internalPopperOptions() {
      return {
        strategy: 'fixed'
      };
    }
  },
  mounted() {
    tippy.setDefaultProps({ maxWidth: '' });
    this.instance = tippy(this.$refs.trigger, {
      followCursor: this.followCursor,
      placement: this.placement,
      content: this.$refs.content,
      plugins: [followCursor],
      zIndex: this.zIndex,
      delay: this.delay,
      offset: this.offset,
      maxWidth: this.maxWidth,
      popperOptions: this.popperOptions || this.internalPopperOptions,
      onShow: (instance) => {
        this.$emit('onShow', instance);
      }
    });
  },
  beforeDestroy() {
    this.instance = null
  }
};
</script>
