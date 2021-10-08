<template>
  <div class="w-full">
    <slot name="header" :currentStep="selectedStep" />
    <ul
      class="w-full bg-gray-100 dark_bg-dark-100 flex items-center"
    >
      <li
        v-for="title in stepTitles"
        :key="title"
        :aria-label="title"
        :class="{
        }"
        class="step flex-1 flex justify-start pointer-events-none items-center relative h-4 w-4 bg-black rounded-full"
      >
      </li>
    </ul>
    <slot />
    <slot name="footer" :currentStep="selectedStep" :goNext="goNext" :goPrevious="goPrevious" :currentIndex="currentStepIndex" :count="stepTitles ? stepTitles.length : 0" />
  </div>
</template>

<script>
import { get } from 'lodash';

export default {
  name: 'MjStepper',
  provide() {
    const data = {};
    Object.defineProperty(data, 'selectedStep', {
      enumerable: true,
      get: () => this.selectedStep
    });

    return {
      data
    };
  },
  data() {
    return {
      stepTitles: [],
      selectedStep: null,
      disabledSteps: []
    };
  },
  computed: {
    currentStepIndex() {
      return this.stepTitles.indexOf(this.selectedStep);
    }
  },
  watch: {
    currentStepIndex: function(index) { // eslint-disable-line
      this.$emit('change', index);
    },
  },
  created() {
    this.stepTitles = this.$slots.default.map(step => get(step, 'componentOptions.propsData.title'));
    this.disabledSteps = this.$slots.default
      .filter(step => get(step, 'componentOptions.propsData.disabled') === '')
      .map(step => get(step, 'componentOptions.propsData.title'));
    this.selectedStep = this.stepTitles.filter(title => this.disabledSteps.indexOf(title) === -1)[0];
  },
  methods: {
    onSelectStep(title) {
      if (this.disabledSteps.indexOf(title) === -1) {
        this.selectedStep = title;
      }
    },
    goNext() {
      this.selectedStep = this.currentStepIndex < this.stepTitles.length - 1 ? this.stepTitles[this.currentStepIndex + 1] : this.selectedStep;
    },
    goPrevious() {
      this.selectedStep = this.currentStepIndex > 0 ? this.stepTitles[this.currentStepIndex - 1] : this.selectedStep;
    }
  }
};
</script>
