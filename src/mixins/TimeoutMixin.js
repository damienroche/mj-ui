export default {
  props: {
    duration: {
      type: Number,
      default: 3000
    },
    indefinite: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      timer: null,
      origin: null,
      elapsed: 0
    };
  },
  methods: {
    start() {
      if (this.indefinite) {
        return;
      }
      this.origin = Date.now();
      this.timer = setTimeout(() => {
        if (this.timeoutCallback) {
          this.timeoutCallback();
        }
        this.reset();
      }, this.duration - this.elapsed);
    },
    pause() {
      this.elapsed = Date.now() - this.origin;
      clearTimeout(this.timer);
    },
    reset() {
      this.timer = null;
      this.origin = null;
      this.elapsed = 0;
    }
  }
};
