export default {
  props: {
    id: {
      type: String,
      default: null
    },
  },
  data() {
    return {
      isInit: false,
      slotProps: {}
    };
  },
  computed: {
    isDisplayed() {
      return this.id && (this.$insertManager.stagedItems.includes(this.id) || !this.isInit);
    }
  },
  created() {
    this.$insertManager.register({
      id: this.id,
      type: 'MjSidePanel',
      vNode: this
    });
    this.isInit = true;
  },
  beforeDestroy() {
    this.$insertManager.destroy(this.id);
  }
};
