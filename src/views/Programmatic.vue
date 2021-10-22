<template>
  <div>
    <mj-card class="my-4 p-4">
      <div class="flex flex-wrap gap-2">
        <mj-button @click="toast">Ouvrir toast permanent</mj-button>
        <mj-button v-if="indefiniteToast" @click="removeIndefiniteToast">Supprimer toast permanent</mj-button>
        <mj-button @click="$insertManager.show('p1')">Open "P1" side panel</mj-button>
        <mj-button @click="$insertManager.show('p1', testProps)">Open "P1" side panel with a twist</mj-button>
      </div>
    </mj-card>
    <mj-side-panel id="p0">
      <mj-text class="text-lg block">P0</mj-text>
    </mj-side-panel>
    <mj-side-panel id="p3">
      <mj-text class="text-lg block">Third panel title</mj-text>
      <mj-button @click="$insertManager.show('p0')">Open "P0" side panel</mj-button>
    </mj-side-panel>
    <mj-side-panel id="p1">
      <template #default="slotProps">
        <mj-text class="text-lg block">First panel title</mj-text>
        <mj-text v-if="slotProps.myProp">{{ slotProps.myProp }}</mj-text>
        <mj-button @click="$insertManager.show('p2')">Open "P2" side panel</mj-button>
      </template>
    </mj-side-panel>
    <mj-side-panel id="p2" side="left">
      <mj-text class="text-lg block">Second panel title</mj-text>
      <mj-button @click="$insertManager.show('p3')">Open "P3" side panel</mj-button>
    </mj-side-panel>
  </div>
</template>

<script>
import { Toast } from './../programmatic-components/MjToast';

export default {
  name: 'Programmatic',
  data() {
    return {
      indefiniteToast: null,
      testProps: {
        myProp: '3'
      }
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
