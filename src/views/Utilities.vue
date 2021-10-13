<template>
  <div>
    <mj-card class="my-4 p-4">
      <h2 class="text-navy dark_text-white font-semibold mb-4">Overflow avec scrollbar custom</h2>
      <mj-fixed-height>
        <mj-flex-centered
          v-for="i in 30"
          :key="i"
          class="p-2 my-px"
        >
          <mj-text>{{ i }}</mj-text>
        </mj-flex-centered>
      </mj-fixed-height>
    </mj-card>
  </div>
</template>

<script>
export default {
  name: 'Utilities'
};
</script>
