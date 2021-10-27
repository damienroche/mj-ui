<template>
  <portal to="MjSidePanel-target">
    <div
      v-if="isDisplayed"
      :key="id"
      class="mj-side-panel bg-white dark_bg-dark h-full absolute top-0 p-5 shadow-2xl transition duration-200 min-w-[320px] max-w-[1200px]"
      :class="[
        `${defaultSide}-0`
      ]"
      :style="translation"
      @click.stop
    >
      <slot v-bind="slotProps" />
      <mj-close-button
        class="absolute top-4 right-4"
        @click="$insertManager.hide(id)"
      />
    </div>
  </portal>
</template>

<script>
import InsertMixin from './../mixins/InsertMixin.js';
import SlideMixin from './../mixins/SlideMixin.js';
import MjCloseButton from './MjCloseButton.vue';

export default {
  name: 'MjSidePanel',
  components: { MjCloseButton },
  mixins: [InsertMixin, SlideMixin],
  data() {
    return {
      defaultSide: this.side || 'right',
    };
  },
};
</script>

<style>
.mj-side-panel > :first-child:not(.close-panel) {
  @apply pr-12;
}
</style>
