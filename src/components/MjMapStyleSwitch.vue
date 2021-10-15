<template>
  <div class="bg-gray-100 rounded-full inline-flex select-none dark_bg-dark-100 shadow-md">
    <a
      href="#!"
      class="text-xs font-bold rounded-full px-6 h-[1.875rem] inline-flex items-center justify-center cursor-pointer"
      :class="{ 'bg-primary text-white': value === 'satellite' }"
      @click.prevent="setStyle('satellite')"
    >
      Satellite
    </a>
    <a
      href="#!"
      class="text-xs font-bold rounded-full px-6 h-[1.875rem] inline-flex items-center justify-center cursor-pointer"
      :class="{ 'bg-primary text-white': value === 'roadmap' }"
      @click.prevent="setStyle('roadmap')"
    >
      Carte
    </a>
  </div>
</template>

<script>
export default {
  name: 'MjMapStyleSwitch',
  props: {
    /**
     * Map style selected, accepted values are `['roadmap', satellite']`
     * @default 'roadmap'
     * @type {String}
    */
    value: {
      type: String,
      default: 'roadmap',
      required: true,
      validator: value => ['roadmap', 'satellite'].indexOf(value) >= 0
    }
  },
  methods: {
    setStyle(type) {
      this.$emit('input', type);
    }
  }
};
</script>

