<template>
  <div>
    <mj-card class="my-4 p-4">
      <div class="flex flex-wrap gap-2">
        <mj-button @click="toast">Ouvrir toast permanent</mj-button>
        <mj-button v-if="indefiniteToast" @click="removeIndefiniteToast">Supprimer toast permanent</mj-button>
      </div>
    </mj-card>
  </div>
</template>

<script>
import { Toast } from './../programmatic-components/MjToast';

export default {
  name: 'Programmatic',
  data() {
    return {
      indefiniteToast: null,
    };
  },
  methods: {
    toast() {
      this.indefiniteToast = Toast.open({
        message: 'coucou',
        indefinite: true,
        type: 'brand'
      });
    },
    removeIndefiniteToast() {
      if (this.indefiniteToast) {
        this.indefiniteToast.close();
        this.indefiniteToast = null;
      }
    }
  }
};
</script>
