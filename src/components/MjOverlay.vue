<template>
  <div
    class="mj-overlay fixed inset-0 z-50"
    :class="{
      'pointer-events-none': responderOrder.length < 1
    }"
    @click="closeTopResponder"
  >
    <transition name="fade">
      <portal-target
        v-show="responderOrder.length > 0"
        name="side-panel-target"
        class="bg-black bg-opacity-40 absolute inset-0 transition duration-500"
        multiple
        :transition="slide"
      />
    </transition>
    <portal-target
      name="top-toasts"
      multiple
    />
  </div>
</template>

<script>
export default {
  name: 'MjOverlay',
  props: {
    manager: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      types: ['MjSidePanel', 'MjToast'],
      backgroundDismiss: ['MjSidePanel'],
      lists: {},
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
        this.lists[this.manager.items[item].type].push(item);
        if (this.backgroundDismiss.includes(this.manager.items[item].type)) {
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
  methods: {
    initLists() {
      this.types.forEach(type => {
        this.lists[type] = [];
      });
      this.responderOrder = [];
    },
    closeTopResponder(e) {
      if (this.responderOrder.length < 1 || (e.type === 'keyup' && e.key !== 'Escape')) {
        return;
      }
      this.manager.hide(this.responderOrder[this.responderOrder.length - 1]);
    }
  }
};
</script>
