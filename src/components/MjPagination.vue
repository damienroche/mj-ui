<template>
  <div
    class="mj-pagination flex gap-3"
    :class="{
      'flex-col justify-center items-center': layout === 'vertical',
      'flex-row-reverse justify-between items-center': layout === 'horizontal'
    }"
  >
    <div
      v-if="lastPageIndex > 1"
      class="flex"
    >
      <mj-button
        v-bind="arrow"
        :disabled="value === 0"
        class="relative"
        @click="$emit('input', value - 1)"
      >
        <div class="w-5 h-5">
          <mj-chevron-left />
        </div>
      </mj-button>
      <div
        class="number-list flex text-secondary"
        :class="{
          'left-active': lastPageIndex > 5 && value > 2,
          'right-active': lastPageIndex > 5 && value < lastPageIndex - 3
        }"
      >
        <mj-button
          v-for="(item, index) in buttons"
          :key="index"
          :type="item === value ? 'primary' : 'secondary'"
          size="x-small"
          class="mx-1"
          :class="{
            'order-1': item === 0,
            'order-3': item > 0 && item < lastPageIndex - 1,
            'order-5': item === lastPageIndex - 1,
          }"
          :disabled="item === value"
          @click="$emit('input', item)"
        >
          {{ item + 1 }}
        </mj-button>
      </div>
      <mj-button
        v-bind="arrow"
        :disabled="value === lastPageIndex - 1"
        @click="$emit('input', value + 1)"
      >
        <div class="w-5 h-5">
          <mj-chevron-right />
        </div>
      </mj-button>
    </div>
    <mj-text
      class="text-xxxxs text-center"
      type="secondary"
    >
      {{ text }}
    </mj-text>
  </div>
</template>

<script>
import MjButton from './MjButton';
import MjChevronLeft from './icons/MjChevronLeft';
import MjChevronRight from './icons/MjChevronRight';
import MjText from './MjText';

export default {
  name: 'MjPagination',
  components: { MjText, MjChevronRight, MjChevronLeft, MjButton },
  props: {
    /**
     * pagination index
     * @default 0
     * @type {Integer}
     */
    value: {
      type: Number,
      default: 0
    },
    /**
     * number of items in list
     * @default 0
     * @type {Integer}
     */
    length: {
      type: Number,
      default: 0
    },
    /**
     * number of items per page
     * @default 12
     * @type {Integer}
     */
    perPage: {
      type: Number,
      default: 12
    },
    /**
     * component layout
     * @default 'vertical'
     * @type {String}
     */
    layout: {
      type: String,
      default: 'vertical',
      validator: value => ['horizontal', 'vertical'].indexOf(value) >= 0
    },
    /**
     * name of iterated object
     * @default objet
     * @type {String}
     */
    itemName: {
      type: String,
      default: 'objet'
    },
    /**
     * plural name of iterated object
     * @default objets
     * @type {String}
     */
    itemNamePlural: {
      type: String,
      default: 'objets'
    }
  },
  data() {
    return {
      arrow: {
        type: 'transparent',
        size: 'x-small'
      }
    };
  },
  computed: {
    lastPageIndex() {
      return Math.ceil(this.length / this.perPage);
    },
    buttons() {
      if (this.length <= 0) {
        return [];
      }
      let start = this.value + 3 >= this.lastPageIndex
        ? this.lastPageIndex - 4
        : this.value - 1;
      if (start < 1) {
        start = 1;
      }
      const items = [0];
      if (this.lastPageIndex < 2) {
        return items;
      }
      items.push(this.lastPageIndex - 1);
      if (this.lastPageIndex < 3) {
        return items;
      }
      const nb = this.lastPageIndex < 4
        ? this.lastPageIndex - 2
        : 3;
      for (let i = 0; i < nb; i++) {
        if (!items.includes(start + i)) {
          items.splice(items.length - 1, 0, start + i);
        }
      }

      return items;
    },
    text() {
      const first = 1 + this.value * this.perPage;
      const last = (this.value + 1) * this.perPage;

      return this.length > 0
        ? `${first}-${last < this.length ? last : this.length} ${this.length > 1 ? this.itemNamePlural : this.itemName} sur ${this.length} au total`
        : `Aucun ${this.itemName} trouvé dans cette liste`;
    }
  }
};
</script>

<style scoped>
.number-list::before,
.number-list::after {
  content: '...';
  height: 1.625rem;
  width: 0;
  text-align: center;
  overflow: hidden;
  transition: all .2s;
}
.number-list::before {
  order: 2;
}
.number-list::after {
  order: 4;
}
.left-active::before,
.right-active::after {
  width: .75rem;
}
</style>
