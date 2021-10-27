export default {
  props: {
    id: {
      type: String,
      default: null,
    },
    dismissible: {
      type: Boolean,
      default: true,
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
      type: this.$options.name,
      vNode: this,
      onShow: this.onShow,
      onHide: this.onHide,
      onUpdate: this.onUpdate,
      dismissible: this.dismissible
    });
    this.isInit = true;
  },
  beforeDestroy() {
    this.$insertManager.destroy(this.id);
  }
};
