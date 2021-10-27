export default {
  props: {
    position: {
      type: String,
      default: null
    }
  },
  computed: {
    positionClasses() {
      if (!this.position) {
        return null;
      }
      const pos = this.position.split(' ');

      return {
        'top-0': pos.includes('top'),
        'left-0': pos.includes('left'),
        'right-0': pos.includes('right'),
        'bottom-0': pos.includes('bottom')
      };
    }
  }
};
