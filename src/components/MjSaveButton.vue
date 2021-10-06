<template>
  <mj-button v-bind="$attrs" :class="{ 'cursor-not-allowed': loading }" @click="$emit('click', $event)">
    <span class="flex items-center gap-2">
      <div class="h-5 w-5 relative">
        <span
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-2"
          :class="{ 'visible opacity-100': loading, 'invisible opacity-0': !loading }"
        >
          <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </span>
        <svg :class="{ 'opacity-0 invisible': loading, 'visible opacity-100': !loading }" width="100%" height="100%" viewBox="0 0 12 12"><g fill="none"><path d="M1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6zm7.354-.896a.5.5 0 1 0-.708-.708L5.5 6.543L4.354 5.396a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l2.5-2.5z" fill="currentColor"></path></g></svg>
      </div>
      <span>{{ title }}</span>
    </span>
  </mj-button>
</template>

<script>
export default {
  name: 'MjSaveButton',
  props: {
    title: {
      type: String,
      default: 'Enregistrer'
    },
    loading: {
      type: Boolean,
      default: false,
      required: true
    }
  }
};
</script>
