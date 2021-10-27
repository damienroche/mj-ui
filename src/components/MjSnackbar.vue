<template>
  <portal to="MjSnackbar-target">
    <div
      v-if="isDisplayed"
      :key="id"
      class="mj-snackbar absolute shadow-xl transition duration-200 min-w-[260px] max-w-[600px] m-4 p-5 bg-white dark_bg-dark rounded pointer-events-auto"
      :class="[
        {
          dismissible: dismissible
        },
        positionClasses
      ]"
      :style="translation"
      @click.stop
    >
      <slot v-bind="slotProps" />
      <mj-close-button
        v-if="dismissible"
        class="absolute top-4 right-4"
        @click="$insertManager.hide(id)"
      />
    </div>
  </portal>
</template>

<script>
import InsertMixin from './../mixins/InsertMixin.js';
import SlideMixin from './../mixins/SlideMixin.js';
import PositionMixin from './../mixins/PositionMixin.js';
import TimeoutMixin from './../mixins/TimeoutMixin.js';
import AnimateMixin from './../mixins/AnimateMixin.js';
import MjCloseButton from './MjCloseButton.vue';

export default {
  name: 'MjSnackbar',
  components: { MjCloseButton },
  mixins: [InsertMixin, SlideMixin, PositionMixin, TimeoutMixin, AnimateMixin],
  props: {
    pauseOnHover: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      animationDuration: 75
    };
  },
  methods: {
    onShow() {
      this.start();
    },
    onUpdate() {
      this.animate();
    },
    timeoutCallback() {
      this.$insertManager.hide(this.id);
    },
    onMouseEnter() {
      if (!this.pauseOnHover) {
        return;
      }
      this.pause();
    },
    onMouseLeave() {
      if (!this.pauseOnHover) {
        return;
      }
      this.start();
    },
  }
};
</script>

<style scoped>
.mj-snackbar.dismissible > :first-child:not(.mj-close-button) {
  @apply pr-12;
}
</style>
