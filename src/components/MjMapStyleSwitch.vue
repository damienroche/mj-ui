<template>
  <div class="bg-gray-100 rounded-full inline-flex select-none dark_bg-dark-100 shadow-md">
    <a
      href="#!"
      class="text-xs font-bold rounded-full px-6 h-[30px] inline-flex items-center justify-center cursor-pointer"
      :class="{ 'bg-navy text-white': value === 'satellite' }"
      @click.prevent="setStyle('satellite')"
    >
      Satellite
    </a>
    <a
      href="#!"
      class="text-xs font-bold rounded-full px-6 h-[30px] inline-flex items-center justify-center cursor-pointer"
      :class="{ 'bg-navy text-white': value === 'roadmap' }"
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
    value: {
      type: String,
      default: 'roadmap',
      required: true
    }
  },
  methods: {
    setStyle(type) {
      this.$emit('input', type);
    }
  }
};
</script>

