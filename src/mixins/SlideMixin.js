export default {
  props: {
    side: {
      type: String,
      default: null,
      validator: value => [null, 'left', 'right', 'top', 'bottom'].indexOf(value) >= 0
    },
    distance: {
      type: String,
      default: '100px'
    }
  },
  data() {
    return {
      defaultSide: this.side || 'top'
    };
  },
  computed: {
    translation() {
      const axis = ['left', 'right'].includes(this.defaultSide)
        ? 'X'
        : 'Y';
      const modifier = ['top', 'left'].includes(this.defaultSide)
        ? -1
        : 1;

      return {
        '--mj-slide': `translate${axis}(calc(${this.distance} * ${modifier}))`
      };
    }
  }
};
