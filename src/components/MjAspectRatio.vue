<template>
  <div class="mj-aspect-ratio">
    <div
      class="w-full bg-center bg-no-repeat"
      :style="{
        backgroundImage: `url(${image})`,
        backgroundSize: cover ? 'cover' : 'contain',
        paddingBottom: `${aspectRatio}%`
      }"
      @click="$emit('click')"
    />
  </div>
</template>

<script>
export default {
  name: 'MjAspectRatio',
  props: {
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
     * image url
     * @default null
     * @type {String}
     */
    image: {
      type: String,
      default: null
    },
    /**
     * should background be contained or cover given space
     * @default false
     * @type {Boolean}
     */
    cover: {
      type: Boolean,
      default: false
    }
  }
};
</script>
