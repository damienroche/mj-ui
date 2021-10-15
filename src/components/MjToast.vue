<template>
  <transition
    :enter-active-class="transition.enter"
    :leave-active-class="transition.leave"
  >
    <div
      v-show="isActive"
      class="toast"
      :class="[
        {
          'bg-white dark_bg-dark-200': type === 'normal',
          'bg-success dark_bg-success': type === 'success',
          'bg-danger dark_bg-danger': type === 'danger',
          'bg-brand dark_bg-brand': type === 'brand'
        },
        position
      ]"
      :aria-hidden="!isActive"
      role="alert"
      @mouseenter="pause"
      @mouseleave="removePause"
    >
      <template v-if="$slots.default">
        <slot />
      </template>
      <template v-else>
        <div
          :class="{
            'text-primary dark_text-white': type === 'normal',
            'text-white': type !== 'normal'
          }"
          v-html="message"
        />
      </template>
    </div>
  </transition>
</template>

<script>
import config from './../utils/config';
import NoticeMixin from './../mixins/NoticeMixin.js';
export default {
  name: 'MjToast',
  mixins: [NoticeMixin],
  data() {
    return {
      newDuration: this.duration || config.defaultToastDuration
    };
  }
};
</script>
