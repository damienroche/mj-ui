<template>
  <mj-circle-base
    class="mj-close-button h-8 w-8 text-secondary hover_text-brand"
    @click="$emit('click')"
  >
    <mj-delete-icon class="block w-4 h-4" />
  </mj-circle-base>
</template>

<script>
import MjDeleteIcon from './icons/MjDeleteIcon';
import MjCircleBase from './icons/MjCircleBase';

export default {
  name: 'MjCloseButton',
  components: { MjCircleBase, MjDeleteIcon },
};
</script>
