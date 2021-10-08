<template>
  <div class="mj-stepper w-full">
    <slot name="header" :currentStep="selectedStep" :end="end" />
    <ul
      class="w-full flex items-center justify-between"
    >
      <li
        v-for="(title, index) in stepTitles"
        :key="title"
        :aria-label="title"
        :class="{
          'is-complete': index < currentStepIndex || end,
          'is-current': currentStepIndex === index
        }"
        class="step flex-1 flex justify-start pointer-events-none items-center relative h-4 w-4 rounded-full"
      >
        <div class="step-icon text-white">
          <svg v-if="index < currentStepIndex || end" width="100%" height="100%" viewBox="0 0 12 12"><g fill="none"><path d="M9.765 3.205a.75.75 0 0 1 .03 1.06l-4.25 4.5a.75.75 0 0 1-1.075.015L2.22 6.53a.75.75 0 0 1 1.06-1.06l1.705 1.704l3.72-3.939a.75.75 0 0 1 1.06-.03z" fill="currentColor"></path></g></svg>
        </div>
      </li>
    </ul>
    <slot />
    <slot name="footer" :currentStep="selectedStep" :goNext="goNext" :goPrevious="goPrevious" :currentIndex="currentStepIndex" :count="stepTitles ? stepTitles.length : 0" :end="end" />
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
      disabledSteps: [],
      end: false
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
      if (this.currentStepIndex === this.stepTitles.length - 1) {
        this.end = true;
        this.$emit('end', this.end);
      }
      this.selectedStep = this.currentStepIndex < this.stepTitles.length - 1 ? this.stepTitles[this.currentStepIndex + 1] : this.selectedStep;
    },
    goPrevious() {
      this.end = false;
      this.selectedStep = this.currentStepIndex > 0 ? this.stepTitles[this.currentStepIndex - 1] : this.selectedStep;
    }
  }
};
</script>
