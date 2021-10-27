<template>
  <mj-dialog
    :id="id"
    dismissible
  >
    <template #default="slotProps">
      <slot v-bind="slotProps" />
    </template>
    <template #bottom>
      <div class="grid grid-cols-2 gap-2">
        <mj-button
          type="transparent"
          @click="$emit('cancel')"
        >
          Annuler
        </mj-button>
        <mj-button
          @click="$emit('confirm')"
        >
          Confirmer
        </mj-button>
      </div>
    </template>
  </mj-dialog>
</template>

<script>
import MjDialog from './MjDialog.vue';
import MjButton from './MjButton';

export default {
  name: 'MjConfirm',
  components: { MjButton, MjDialog },
  props: {
    id: {
      type: String,
      default: null
    }
  }
};
</script>
