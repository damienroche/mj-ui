<template>
  <div>
    <mj-card class="mt-4 p-4">
      <mj-text class="block text-xl mb-2">Toast</mj-text>
      <div class="flex flex-wrap gap-2">
        <mj-button @click="$insertManager.show('t1')">Show "T1" toast</mj-button>
        <mj-button @click="$insertManager.show('t2', { twist: 'an' })">Show indefinite toast</mj-button>
        <mj-button @click="$insertManager.show('t2', { twist: 'a twisted' })">Show twisted indefinite toast</mj-button>
        <mj-button
          v-if="$insertManager.stages('t2')"
          @click="$insertManager.hide('t2')"
        >
          Hide indefinite toast
        </mj-button>
        <mj-button @click="insertToast">New toast</mj-button>
        <mj-toast
          id="t1"
          :duration="1000"
          pause-on-hover
        >
          <mj-text>Tis a toast</mj-text>
        </mj-toast>
        <mj-toast
          id="t2"
          indefinite
        >
          <template #default="props">
            <mj-text>{{ `Tis ${props.twist} indefinite toast` }}</mj-text>
          </template>
        </mj-toast>
      </div>
    </mj-card>
    <mj-card class="mt-4 p-4">
      <mj-text class="block text-xl mb-2">Side panel</mj-text>
      <div class="flex flex-wrap gap-2">
        <mj-button @click="$insertManager.show('p1')">Open "P1" side panel</mj-button>
        <mj-button @click="$insertManager.show('p1', testProps)">Open "P1" side panel with a twist</mj-button>
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
            <mj-button @click="$insertManager.show('d1', d1)">Open "D1" dialog</mj-button>
          </template>
        </mj-side-panel>
        <mj-side-panel id="p2" side="left">
          <mj-text class="text-lg block">Second panel title</mj-text>
          <mj-button @click="$insertManager.show('p3')">Open "P3" side panel</mj-button>
        </mj-side-panel>
      </div>
    </mj-card>
    <mj-card class="mt-4 p-4">
      <mj-text class="block text-xl mb-2">Dialog</mj-text>
      <div class="flex flex-wrap gap-2">
        <mj-button @click="$insertManager.show('d1', d1)">Open "D1" dialog</mj-button>
        <mj-dialog id="d1">
          <template>
            <mj-text>title D1</mj-text>
          </template>
          <template #bottom>
            <mj-button @click="$insertManager.show('d2')">Open D2</mj-button>
            <mj-button type="transparent" @click="$insertManager.hide('d1')">Close D1</mj-button>
          </template>
        </mj-dialog>
        <mj-dialog
          id="d2"
          position="bottom right"
          side="bottom"
        >
          <template>
            <mj-text>title D2</mj-text>
          </template>
          <template #bottom>
            <mj-button type="transparent" @click="$insertManager.hide('d2')">Close</mj-button>
          </template>
        </mj-dialog>
      </div>
    </mj-card>
    <mj-card class="mt-4 p-4">
      <mj-text class="block text-xl mb-2">Confirm</mj-text>
      <div class="flex flex-wrap gap-2">
        <mj-button @click="$insertManager.show('c1', { msg: 'Do you confirm ?' })">Open confirmation dialog</mj-button>
        <mj-confirm
          id="c1"
          @cancel="$insertManager.hide('c1')"
          @confirm="$insertManager.show('d2')"
        >
          <template #default="props">
            <mj-text>{{ props.msg }}</mj-text>
          </template>
        </mj-confirm>
      </div>
    </mj-card>
    <mj-card class="mt-4 p-4">
      <mj-text class="block text-xl mb-2">Snackbar</mj-text>
      <div class="flex flex-wrap gap-2">
        <mj-button @click="$insertManager.show('s1')">Open snackbar top left</mj-button>
        <mj-button @click="$insertManager.show('s2')">Open snackbar bottom right</mj-button>
        <mj-snackbar
          id="s1"
          indefinite
          position="top left"
          side="left"
        >
          <mj-text>Tis a snack</mj-text>
        </mj-snackbar>
        <mj-snackbar
          id="s2"
          indefinite
          position="bottom right"
          side="bottom"
          :dismissible="false"
        >
          <div class="flex justify-between items-center">
            <mj-text class="mr-2">Tis a snack</mj-text>
            <mj-button @click="$insertManager.hide('s2')">Action</mj-button>
          </div>
        </mj-snackbar>
      </div>
    </mj-card>
  </div>
</template>

<script>
export default {
  name: 'Programmatic',
  data() {
    return {
      testProps: {
        myProp: '3'
      },
      d1: {
        title: 'Dialog 1 title',
        btn: 'Bottom button'
      }
    };
  },
  methods: {
    insertToast() {
      this.$insertManager.deploy({
        type: 'MjToast',
        props: {
          type: 'success'
        },
        slots: {
          default: 'What a successful toast'
        }
      });
    }
  }
};
</script>
