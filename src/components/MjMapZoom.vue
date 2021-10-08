<template>
  <div class="inline-flex flex-col select-none shadow-md rounded-lg">
    <div
      class="rounded-t-lg flex items-center justify-center dark_bg-navy dark_text-white dark_hover_bg-navy-dark duration-150 cursor-pointer bg-white text-navy w-[33px] h-[33px] hover_bg-gray-200"
      :class="{ 'cursor-not-allowed': disabled.indexOf('in') >= 0 }"
      @click="$emit('change', 1)"
    >
      <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M417.4 224H288V94.6c0-16.9-14.3-30.6-32-30.6s-32 13.7-32 30.6V224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32H224v129.4c0 16.9 14.3 30.6 32 30.6s32-13.7 32-30.6V288h129.4c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z" fill="currentColor"></path></svg>
    </div>
    <div
      class="rounded-b-lg flex items-center justify-center dark_bg-navy dark_text-white dark_hover_bg-navy-dark duration-150 cursor-pointer bg-white text-navy w-[33px] h-[33px] hover_bg-gray-200"
      :class="{ 'cursor-not-allowed': disabled.indexOf('out') >= 0 }"
      @click="$emit('change', -1)"
    >
      <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M417.4 224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z" fill="currentColor"></path></svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MjMapZoom',
  props: {
    disabled: {
      type: Array,
      default: () => [],
    }
  }
};
</script>
