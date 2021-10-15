<template>
  <div class="flex items-center gap-4 bg-gray-100 dark_bg-dark-100 py-2 pl-4 pr-2 rounded">
    <mj-text class="text-xs flex-1"> {{ title }} </mj-text>
    <div class="min-w-[100px] flex justify-end">
      <mj-true-false v-if="!editing" :value="checked" />
      <mj-true-false-toggle v-if="editing" v-model="checked" />
    </div>
  </div>
</template>

<script>
import MjTrueFalse from './MjTrueFalse.vue';
import MjTrueFalseToggle from './MjTrueFalseToggle.vue';
import MjText from './MjText.vue';

export default {
  name: 'MjTrueFalseInline',
  components: {
    'mj-true-false': MjTrueFalse,
    'mj-true-false-toggle': MjTrueFalseToggle,
    'mj-text': MjText
  },
  props: {
    /**
     * button value
     * @default true
     * @type {Boolean}
    */
    value: {
      type: Boolean,
      default: true
    },
    /**
     * title
     * @default ''
     * @type {String}
    */
    title: {
      type: String,
      default: ''
    },
    /**
     * editing mode
     * @default ''
     * @type {String}
    */
    editing: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      checked: this.value || false
    };
  },
  watch: {
    checked(value) {
      this.$emit('input', value);
    }
  }
};
</script>
