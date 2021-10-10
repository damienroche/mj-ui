
<template>
  <div class="w-full">
    <div
      class="w-full bg-gray-100 dark_bg-dark-100 flex items-center"
      :class="{ 'rounded-full': rounded, 'rounded': !rounded }"
    >
      <div
        v-for="title in tabTitles"
        :key="title"
        :class="{
          'h-8 text-xs font-bold': size === 'small',
          'bg-brand text-white': title === selectedTab && type === 'brand',
          'bg-navy text-white': title === selectedTab && type === 'navy',
          'text-gray-600 dark_text-gray-500': title !== selectedTab,
          'hover_bg-gray-200 hover_text-navy dark_hover_bg-dark-200 dark_hover_text-gray-500': title !== selectedTab && disabledTabs.indexOf(title) === -1,
          'rounded-full': rounded,
          'rounded': !rounded,
          'cursor-not-allowed': disabledTabs.indexOf(title) > -1
        }"
        class=" flex items-center justify-center flex-1 cursor-pointer duration-150 select-none"
        @click="onSelectTab(title)"
      >
        {{ title }}
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
import { get } from 'lodash';

export default {
  name: 'MjTabWrapper',
  provide() {
    const data = {};
    Object.defineProperty(data, 'selectedTab', {
      enumerable: true,
      get: () => this.selectedTab
    });

    return {
      data
    };
  },
  props: {
    size: {
      type: String,
      default: 'small'
    },
    rounded: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'brand',
      validator: value => ['navy', 'brand'].indexOf(value) >= 0
    }
  },
  data() {
    return {
      tabTitles: [],
      selectedTab: null,
      disabledTabs: []
    };
  },
  watch: {
    selectedTab: function(tab) { // eslint-disable-line
      this.$emit('input', tab);
    }
  },
  created() {
    this.tabTitles = this.$slots.default.map(tab => get(tab, 'componentOptions.propsData.title'));
    this.disabledTabs = this.$slots.default
      .filter(tab => get(tab, 'componentOptions.propsData.disabled') === '')
      .map(tab => get(tab, 'componentOptions.propsData.title'));
    this.selectedTab = this.tabTitles.filter(title => this.disabledTabs.indexOf(title) === -1)[0];
  },
  methods: {
    onSelectTab(title) {
      if (this.disabledTabs.indexOf(title) === -1) {
        this.selectedTab = title;
      }
    }
  }
};
</script>
