<template>
  <div class="mj-image-slider relative">
    <div class="w-full relative overflow-hidden rounded">
      <template v-if="images.length > 0">
        <mj-aspect-ratio
          v-for="(image, index) in images"
          :key="index"
          :image="image"
          :aspect-ratio="aspectRatio"
          :cover="cover"
          class="w-full top-0 left-0 absolute transition-transform duration-300"
          :class="{
            'absolute': value !== index,
            'translate-x-0 relative': value === index,
            'translate-x-full': value < index,
            '-translate-x-full': value > index,
          }"
        />
      </template>
      <mj-flex-centered
        v-else
        class="bg-secondary"
      >
        <mj-text class="text-sm">Aucune image dans ce slider</mj-text>
      </mj-flex-centered>
    </div>
    <template v-if="images.length > 1">
      <div
        class="left-0"
        :class="[
          arrowClasses,
          value > 0 ? 'cursor-pointer hover_text-primary' : 'opacity-50'
        ]"
        @click="$emit('input', value - 1 >= 0 ? value - 1 : 0)"
      >
        <mj-chevron-left />
      </div>
      <div
        class="right-0"
        :class="[
          arrowClasses,
          value < images.length - 1 ? 'cursor-pointer hover_text-primary' : 'opacity-50'
        ]"
        @click="$emit('input', value + 1 < images.length ? value + 1 : images.length - 1)"
      >
        <mj-chevron-right />
      </div>
      <div class="flex justify-center items-center absolute w-full bottom-4 drop-shadow">
        <div
          v-for="index in images.length"
          :key="index"
          class="dot p-1 transition"
          :class="{
            'cursor-pointer opacity-50 hover_opacity-100 inactive': value !== index - 1
          }"
          @click="$emit('input', index - 1)"
        ></div>
      </div>
    </template>
  </div>
</template>

<script>
import MjAspectRatio from './MjAspectRatio.vue';
import MjChevronLeft from './icons/MjChevronLeft.vue';
import MjChevronRight from './icons/MjChevronRight.vue';
import MjText from '@/components/MjText.vue';
import MjFlexCentered from '@/components/MjFlexCentered.vue';

export default {
  name: 'MjImageSlider',
  components: { MjFlexCentered, MjText, MjChevronRight, MjChevronLeft, MjAspectRatio },
  props: {
    /**
     * current slide index
     * @default 0
     * @type {Integer}
     */
    value: {
      type: Number,
      default: 0
    },
    /**
     * array of images
     * @default []
     * @type {Array}
     */
    images: {
      type: Array,
      default: () => []
    },
    /**
     * image height in width %
     * @default 56.25
     * @type {Number}
     */
    aspectRatio: {
      type: Number,
      default: 56.25
    },
    /**
     * should background be contained or cover given space
     * @default false
     * @type {Boolean}
     */
    cover: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      arrowClasses: 'absolute w-20 h-20 top-1/2 -mt-10 transition drop-shadow text-white'
    };
  }
};
</script>

<style scoped>
.dot::before {
  content: '';
  @apply block bg-white w-2 h-2 rounded transition;
}
.dot.inactive:hover::before {
  @apply bg-primary;
}
</style>
