<template>
  <div class="bg-gray-100 dark_bg-dark-100 rounded-xl flex items-center justify-center overflow-hidden" v-bind="$attrs">
    <img v-if="src" class="h-full w-full object-cover" :src="src" />
    <mj-text v-if="!src" type="secondary" class="uppercase font-extrabold text-base leading-none p-2"> {{ initials }} </mj-text>
  </div>
</template>

<script>
import MjText from './MjText.vue';

export default {
  name: 'MjUserAvatar',
  components: {
    'mj-text': MjText
  },
  props: {
    /**
     * Avatar src
     * @default null
     * @type {String}
    */
    src: {
      type: String,
      default: null
    },
    /**
     * If avatar src is empty we can display user's initials
     * @default 'NC'
     * @type {String}
    */
    initials: {
      type: String,
      default: 'NC'
    }
  }
};
</script>
