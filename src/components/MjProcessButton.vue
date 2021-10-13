<template>
  <mj-button v-bind="$attrs" :size="size" :class="{ 'cursor-not-allowed': loading }" @click="$emit('click', $event)">
    <span class="flex items-center gap-2">
      <div class="relative" :class="{ 'h-5 w-5': size === 'normal', 'h-4 w-4': size === 'small' }">
        <span
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-2"
          :class="{ 'visible opacity-100': loading, 'invisible opacity-0': !loading }"
        >
          <mj-loading-icon :class="{ 'h-5 w-5': size === 'normal', 'h-4 w-4': size === 'small' }" />
        </span>
        <svg :class="{ 'opacity-0 invisible': loading, 'visible opacity-100': !loading }" width="100%" height="100%" viewBox="0 0 12 12"><g fill="none"><path d="M1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6zm7.354-.896a.5.5 0 1 0-.708-.708L5.5 6.543L4.354 5.396a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l2.5-2.5z" fill="currentColor"></path></g></svg>
      </div>
      <span>{{ title }}</span>
    </span>
  </mj-button>
</template>

<script>
import MjLoadingIcon from './icons/MjLoadingIcon.vue';
import MjButton from './MjButton.vue';

export default {
  name: 'MjProcessButton',
  components: {
    'mj-button': MjButton,
    'mj-loading-icon': MjLoadingIcon
  },
  props: {
    title: {
      /**
       * Button title
       * @default 'Enregistrer'
       * @type {String}
      */
      type: String,
      default: 'Enregistrer'
    },
    size: {
      /**
       * Button size, accepted values are `['normal', 'small']`
       * @default 'normal'
       * @type {String}
      */
      type: String,
      default: 'normal'
    },
    /**
     * If true, we show the loading icon
     * @default false
     * @type {Boolean}
    */
    loading: {
      type: Boolean,
      default: false,
      required: true
    }
  }
};
</script>
