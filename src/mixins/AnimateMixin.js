export default {
  data() {
    return {
      animating: null,
      animationDuration: 500
    };
  },
  methods: {
    animate() {
      if (this.animating) {
        clearTimeout(this.animating);
      }
      this.$nextTick(() => {
        this.animating = setTimeout(() => {
          this.animating = null;
        }, this.animationDuration);
      });
    }
  }
};
