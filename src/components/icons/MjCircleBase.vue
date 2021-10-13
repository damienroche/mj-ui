<template>
  <div class="duration-150 flex items-center justify-center hover_bg-gray-100 dark_hover_bg-dark-100 rounded-full cursor-pointer" v-bind="$attrs" @click="$emit('click', $event)">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MjCircleBase'
};
</script>
