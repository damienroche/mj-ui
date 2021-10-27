<template>
  <portal to="MjDialog-target">
    <div
      v-if="isDisplayed"
      :key="id"
      class="mj-dialog absolute shadow-2xl transition duration-200 min-w-[320px] max-w-[860px] m-4"
      :class="[
        positionClasses,
        {
          dismissible: dismissible
        }
      ]"
      :style="translation"
      @click.stop
    >
      <div
        class="bg-white dark_bg-dark p-5"
        :class="[
          isScopeDefined.bottom ? 'rounded-t' : 'rounded'
        ]"
      >
        <slot
          v-bind="slotProps"
        />
      </div>
      <div
        v-if="isScopeDefined.bottom"
        class="bg-gray-100 dark_bg-dark-100 p-5 rounded-b"
      >
        <slot
          name="bottom"
          v-bind="slotProps"
        />
      </div>
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
import MjCloseButton from './MjCloseButton.vue';

export default {
  name: 'MjDialog',
  components: { MjCloseButton  },
  mixins: [InsertMixin, SlideMixin, PositionMixin],
  props: {
    dismissible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isScopeDefined() {
      return {
        default: this.$slots.default || this.$scopedSlots.default,
        bottom: this.$slots.bottom || this.$scopedSlots.bottom
      };
    }
  }
};
</script>

<style>
.mj-dialog.dismissible > :first-child:not(.mj-close-button) {
  @apply pr-12;
}
</style>
