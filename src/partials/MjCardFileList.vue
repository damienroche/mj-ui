<template>
  <mj-card class="my-4 w-[430px]">
    <div class="p-4">
      <div class="flex items-center gap-4">
        <mj-head-tag-counter :count="files.length" />
        <mj-text class="text-base font-bold">Documents réglementaires</mj-text>
      </div>
      <div class="mt-4">
        <!-- @TODO: Demander a Alexis des placeholders -->
        <div v-if="files && files.length === 0">
          <mj-text class="text-xs italic text-center block mt-8 mb-4">Aucun document (prévoir placeholder)</mj-text>
        </div>
        <mj-list-item
          v-for="(file, index) in files"
          :key="file.id"
          :show-border="index !== files.length - 1"
          hoverable
        >
          <div class="flex items-center justify-between gap-2">
            <mj-text type="gray-500" group-hover="brand">
              <mj-file-type-icon :type="file.category" class="h-7 w-6" />
            </mj-text>
            <div class="flex flex-col gap-1 leading-none flex-1">
              <mj-text class="font-semibold text-xs line-clamp-1" group-hover="brand"> {{ file.fileName || 'N.C.' }} </mj-text>
              <mj-text type="ternary" class="text-xxxxs"> {{ file.updatedAt }}</mj-text>
            </div>
            <mj-text tag="a" class="w-6 h-6 flex items-center justify-center" :href="file.fileUrl" target="_blank" group-hover="brand">
              <svg width="100%" height="100%" viewBox="0 0 512 512"><path d="M256 464c114.87 0 208-93.13 208-208S370.87 48 256 48S48 141.13 48 256s93.13 208 208 208zm-91.36-212.65a16 16 0 0 1 22.63-.09L240 303.58V170a16 16 0 0 1 32 0v133.58l52.73-52.32A16 16 0 1 1 347.27 274l-80 79.39a16 16 0 0 1-22.54 0l-80-79.39a16 16 0 0 1-.09-22.65z" fill="currentColor"></path></svg>
            </mj-text>
            <mj-circle-base class="h-6 w-6">
              <mj-text tag="a" type="gray-500" class="w-3 h-3" group-hover="brand">
                <mj-delete-icon />
              </mj-text>
            </mj-circle-base>
          </div>
        </mj-list-item>
      </div>
    </div>
    <mj-card-footer>
      <mj-add-button title="Ajouter un document réglementaire" class="w-full" @click="$emit('add')" />
    </mj-card-footer>
  </mj-card>
</template>

<script>
export default {
  name: 'MjCardFileList',
  props: {
    files: {
      type: Array,
      default: () => []
    },
    removable: {
      type: Boolean,
      default: true
    }
  }
};
</script>
