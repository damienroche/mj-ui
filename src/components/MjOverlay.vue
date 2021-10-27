<template>
  <div
    class="mj-overlay fixed inset-0 z-50"
    :class="{
      'pointer-events-none': responderOrder.length < 1
    }"
    @click="closeTopResponder"
  >
    <transition
      v-for="(type, key) in types"
      :key="key"
      name="fade"
    >
      <portal-target
        v-show="type.list.length > 0"
        :name="`${key}-target`"
        class="absolute inset-0 transition duration-200"
        :class="[
          {
            'clickable-bg bg-black bg-opacity-40': type.dismissible
          },
          type.classes
        ]"
        multiple
        :transition="slide"
      />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'MjOverlay',
  props: {
    manager: {
      type: Object,
      default: null
    },
    insertTypes: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      types: this.insertTypes,
      responderOrder: [],
      isCloseListenerSet: false
    };
  },
  computed: {
    stagedItems() {
      return this.manager.stagedItems;
    },
    slide() {
      return {
        functional: true,
        render(h, context) {
          return h('transition-group', { props: { name: 'slide' } }, context.children);
        }
      };
    }
  },
  watch: {
    stagedItems() {
      this.initLists();
      this.stagedItems.forEach(item => {
        this.types[this.manager.items[item].type].list.push(item);
        if (this.types[this.manager.items[item].type].dismissible && this.manager.items[item].dismissible) {
          this.responderOrder.push(item);
        }
      });
    },
    responderOrder() {
      if (this.responderOrder.length > 0 && !this.isCloseListenerSet) {
        document.addEventListener('keyup', this.closeTopResponder);
        this.isCloseListenerSet = true;
      } else if (this.responderOrder.length < 1 && this.isCloseListenerSet) {
        document.removeEventListener('keyup', this.closeTopResponder);
        this.isCloseListenerSet = false;
      }
    }
  },
  created() {
    this.initLists();
  },
  methods: {
    initLists() {
      Object.keys(this.types).forEach(type => {
        this.types[type].list = [];
      });
      this.responderOrder = [];
    },
    closeTopResponder(e) {
      if (this.responderOrder.length < 1 || (e.type === 'keyup' && e.key !== 'Escape')) {
        return;
      }
      const topResponder = this.responderOrder[this.responderOrder.length - 1];
      const stagedDismissible = this.stagedItems.filter(item => this.types[this.manager.items[item].type].dismissible);
      const lastDismissible = stagedDismissible[stagedDismissible.length - 1];
      if (topResponder !== lastDismissible) {
        return;
      }
      this.manager.hide(topResponder);
    }
  }
};
</script>

<style scoped>
.clickable-bg > :not(:last-child) {
  @apply pointer-events-none brightness-75;
}
</style>
