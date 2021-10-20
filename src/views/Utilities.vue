<template>
  <div>
    <mj-card class="mt-4 p-4">
      <h2 class="text-primary dark_text-white font-semibold mb-4">Overflow avec scrollbar custom</h2>
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
    <mj-card class="mt-4 p-4">
      <h2 class="text-primary dark_text-white font-semibold mb-4">Pagination test</h2>
      <div class="grid grid-cols-4 gap-4">
        <mj-flex-centered
          v-for="i in perPage"
          :key="i"
          class="p-2 my-px"
        >
          <mj-text>{{ i + pageIndex * perPage }}</mj-text>
        </mj-flex-centered>
      </div>
      <div class="flex justify-center pt-4">
        <mj-pagination
          v-model="pageIndex"
          :length="nbItems"
          :per-page="perPage"
        />
      </div>
    </mj-card>
  </div>
</template>

<script>
export default {
  name: 'Utilities',
  data() {
    return {
      pageIndex: 0,
      nbItems: 36,
      perPage: 12
    };
  }
};
</script>
