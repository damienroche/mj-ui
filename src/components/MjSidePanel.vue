<template>
  <portal to="side-panel-target">
    <div
      v-if="isDisplayed"
      :key="id"
      class="mj-side-panel bg-white dark_bg-dark h-full absolute top-0 p-5 shadow-2xl transition duration-300 min-w-[320px] max-w-[1200px]"
      :class="[
        `${side}-0`
      ]"
      :style="translation"
      @click.stop
    >
      <slot v-bind="slotProps" />
      <mj-circle-base
        class="close-panel h-8 w-8 text-secondary hover_text-brand absolute top-4 right-4"
        @click="$insertManager.hide(id)"
      >
        <mj-delete-icon class="block w-4 h-4" />
      </mj-circle-base>
    </div>
  </portal>
</template>

<script>
import InsertMixin from './../mixins/InsertMixin';
import MjDeleteIcon from './icons/MjDeleteIcon';
import MjCircleBase from '@/components/icons/MjCircleBase';

export default {
  name: 'MjSidePanel',
  components: { MjCircleBase, MjDeleteIcon },
  mixins: [InsertMixin],
  props: {
    side: {
      type: String,
      default: 'right',
      validator: value => ['left', 'right'].indexOf(value) >= 0
    },
    distance: {
      type: String,
      default: '200px'
    }
  },
  computed: {
    translation() {
      return {
        '--mj-slide': `translateX(calc(${this.distance} * ${this.side === 'right' ? 1 : -1}))`
      };
    }
  }
};
</script>

<style>
.mj-side-panel > :first-child:not(.close-panel) {
  @apply pr-12;
}
</style>
