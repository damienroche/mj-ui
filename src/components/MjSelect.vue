<template>
  <div
    :tabindex="searchable ? -1 : tabindex"
    :class="{ 'z-50': isOpen, 'pointer-events-none': disabled }"
    class="mj-select text-left bg-white dark_bg-dark block box-content relative w-full min-h-[50px]"
    role="combobox"
    :aria-owns="'listbox-'+id"
    @focus="activate()"
    @blur="searchable ? false : deactivate()"
    @keydown.self.down.prevent="pointerForward()"
    @keydown.self.up.prevent="pointerBackward()"
    @keypress.enter.tab.stop.self="addPointerElement($event)"
    @keyup.esc="deactivate()"
  >
    <slot name="caret" :toggle="toggle">
      <div
        v-show="!loading"
        class="flex items-center justify-center absolute box-border w-[40px] h-[48px] right-px top-px px-2 py-1 cursor-pointer z-10"
        :class="{ 'opacity-25': disabled }"
        @mousedown.prevent.stop="toggle()"
      >
        <svg v-if="isOpen" class="flex-none" width="100%" height="100%" viewBox="0 0 20 20"><path d="M15.484 12.452c-.436.446-1.043.481-1.576 0L10 8.705l-3.908 3.747c-.533.481-1.141.446-1.574 0c-.436-.445-.408-1.197 0-1.615c.406-.418 4.695-4.502 4.695-4.502a1.095 1.095 0 0 1 1.576 0s4.287 4.084 4.695 4.502c.409.418.436 1.17 0 1.615z" fill="currentColor"></path></svg>
        <svg v-if="!isOpen" class="flex-none" width="100%" height="100%" viewBox="0 0 20 20"><path d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0c.436.445.408 1.197 0 1.615c-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z" fill="currentColor"></path></svg>
      </div>
    </slot>
    <slot name="clear" :search="search"></slot>
    <div
      ref="tags"
      class="px-2 flex-1 w-full bg-white dark_bg-dark-100 min-h-[50px] text-xs flex items-center flex-wrap border border-ternary-light dark_border-dark-200"
      :class="{
        'rounded-t': isOpen && !isAbove,
        'rounded-b': isOpen && isAbove,
        'rounded': !isOpen
      }"
    >
      <slot
        name="selection"
        :search="search"
        :remove="removeElement"
        :values="visibleValues"
        :is-open="isOpen"
      >
        <div
          v-show="visibleValues.length > 0"
          class="inline-flex gap-[4px] my-2"
        >
          <template v-for="(option, index) of visibleValues" @mousedown.prevent>
            <slot name="tag" :option="option" :search="search" :remove="removeElement">
              <span
                :key="index"
                class="relative inline-block bg-navy dark_bg-dark py-2 pl-3 pr-8 text-xs font-semibold rounded text-white overflow-hidden max-w-full overflow-ellipsis select-none max-w-[200px] whitespace-nowrap"
                :class="{ 'opacity-25': disabled }"
              >
                <span v-text="getOptionLabel(option)"></span>
                <i
                  tabindex="1"
                  class="bg-navy-dark dark_bg-dark-200 hover_bg-dark dark_hover_bg-dark inline-flex items-center justify-center cursor-pointer absolute top-0 bottom-0 right-0 font-bold duration-150 px-2"
                  @keypress.enter.prevent="removeElement(option)"
                  @mousedown.prevent="removeElement(option)"
                >
                  <div class="w-2 h-2">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M15.1 3.1L12.9.9L8 5.9L3.1.9L.9 3.1l5 4.9l-5 4.9l2.2 2.2l4.9-5l4.9 5l2.2-2.2l-5-4.9z"></path></svg>
                  </div>
                </i>
              </span>
            </slot>
          </template>
        </div>
        <template v-if="internalValue && internalValue.length > limit">
          <slot name="limit">
            <strong class="multiselect__strong" v-text="limitText(internalValue.length - limit)" />
          </slot>
        </template>
      </slot>
      <slot name="loading">
        <mj-loading-icon v-show="loading" class="h-5 w-5 absolute right-[12px]" />
      </slot>
      <input
        v-if="searchable"
        :id="id"
        ref="search"
        :name="name"
        type="text"
        autocomplete="off"
        spellcheck="false"
        :placeholder="placeholder"
        :style="inputStyle"
        :value="search"
        :disabled="disabled"
        :tabindex="tabindex"
        class="pl-2 pr-10 focus_outline-none focus_ring-0 relative inline-block border-0 w-full !text-xs px-2 min-h-[50px] box-border !bg-transparent"
        :class="{
          'rounded-t': isOpen && !isAbove,
          'rounded-b': isOpen && isAbove,
          'rounded': !isOpen,
        }"
        :aria-controls="'listbox-'+id"
        @input="updateSearch($event.target.value)"
        @focus.prevent="activate()"
        @blur.prevent="deactivate()"
        @keyup.esc="deactivate()"
        @keydown.down.prevent="pointerForward()"
        @keydown.up.prevent="pointerBackward()"
        @keypress.enter.prevent.stop.self="addPointerElement($event)"
        @keydown.delete.stop="removeLastElement()"
      />
      <span
        v-if="isSingleLabelVisible"
        class="min-h-[50px] inline-flex items-center text-xs w-full px-2 font-semibold"
        :class="{ 'opacity-25': disabled }"
        @mousedown.prevent="toggle"
      >
        <slot name="singleLabel" :option="singleValue">
          <template>{{ currentOptionLabel }}</template>
        </slot>
      </span>
      <span
        v-if="isPlaceholderVisible"
        class="text-gray-700 min-h-[50px] inline-flex items-center text-xs px-2 rounded"
        :class="{ 'opacity-25': disabled }"
        @mousedown.prevent="toggle"
      >
        <slot name="placeholder">
          {{ placeholder }}
        </slot>
      </span>
    </div>
    <transition name="multiselect">
      <div
        v-show="isOpen"
        ref="list"
        class="absolute block bg-white dark_bg-dark max-h-[240px] overflow-auto z-10 border border-ternary-light dark_border-dark-200 min-w-full"
        :class="{
          'rounded-b border-t-0': !isAbove,
          'rounded-t bottom-full': isAbove
        }"
        tabindex="-1"
        :style="{ maxHeight: optimizedHeight + 'px' }"
        style="-webkit-overflow-scrolling: touch;"
        @mousedown.prevent
        @focus="activate"
      >
        <ul
          :id="'listbox-'+id"
          class="min-w-full p-2"
          :style="contentStyle"
          role="listbox"
        >
          <slot name="beforeList"></slot>
          <li v-if="multiple && max === internalValue.length">
            <span class="flex min-h-[50px] leading-none items-center px-4">
              <slot name="maxElements">Un maximum de {{ max }} élements sont autorisés. Veuillez supprimer un élement pour un sélectionner un autre.</slot>
            </span>
          </li>
          <template v-if="!max || internalValue.length < max">
            <li
              v-for="(option, index) of filteredOptions"
              :id="id + '-' + index"
              :key="index"
              :role="!(option && (option.$isLabel || option.$isDisabled)) ? 'option' : null"
              :class="{
                'bg-white dark_bg-dark': index % 2 === 0,
                'bg-gray-100 dark_bg-dark-100': index % 2 !== 0
              }"
              class="cursor-pointer rounded my-1 overflow-hidden text-xs"
            >
              <span
                v-if="!(option && (option.$isLabel || option.$isDisabled))"
                class="flex min-h-[50px] leading-none items-center px-4"
                :class="{ 'bg-navy text-white' : isOptionHighlighted(index) }"
                :data-select="option && option.isTag ? tagPlaceholder : selectLabelText"
                :data-selected="selectedLabelText"
                :data-deselect="deselectLabelText"
                @click.stop="select(option)"
                @mouseenter.self="pointerSet(index)"
              >
                <slot name="option" :option="option" :search="search" :index="index">
                  <div class="flex items-center justify-between w-full">
                    <span class="flex-1">{{ getOptionLabel(option) }}</span>
                    <span v-if="isSelected(option)" class="w-6 h-6">
                      <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39a1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08l3.78-5a1 1 0 1 1 1.6 1.22z"></path></svg>
                    </span>
                  </div>
                </slot>
              </span>
              <span
                v-if="option && (option.$isLabel || option.$isDisabled)"
                class="flex min-h-[50px] leading-none items-center px-4"
                :data-select="groupSelect && selectGroupLabelText"
                :data-deselect="groupSelect && deselectGroupLabelText"
                :class="groupHighlight(index, option)"
                @mouseenter.self="groupSelect && pointerSet(index)"
                @mousedown.prevent="selectGroup(option)"
              >
                <slot name="option" :option="option" :search="search" :index="index">
                  <span>{{ getOptionLabel(option) }}</span>
                </slot>
              </span>
            </li>
          </template>
          <li v-show="showNoResults && (filteredOptions.length === 0 && search && !loading)">
            <span class="flex min-h-[50px] leading-none items-center px-4 text-xs font-semibold">
              <slot name="noResult" :search="search">Aucun résultat.</slot>
            </span>
          </li>
          <li v-show="showNoOptions && (options.length === 0 && !search && !loading)">
            <span class="flex min-h-[50px] leading-none items-center px-4">
              <slot name="noOptions">List is empty.</slot>
            </span>
          </li>
          <slot name="afterList"></slot>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import SelectMixin from './../mixins/SelectMixin';
import PointerMixin from './../mixins/PointerMixin';
import MjLoadingIcon from './icons/MjLoadingIcon.vue';

export default {
  name: 'MjSelect',
  components: {
    'mj-loading-icon': MjLoadingIcon
  },
  mixins: [SelectMixin, PointerMixin],
  props: {
    /**
     * name attribute to match optional label element
     * @default ''
     * @type {String}
     */
    name: {
      type: String,
      default: ''
    },
    /**
     * String to show when pointing to an option
     * @default '"Entrée" pour valider'
     * @type {String}
     */
    selectLabel: {
      type: String,
      default: '"Entrée" pour valider'
    },
    /**
     * String to show when pointing to an option
     * @default 'Press enter to select'
     * @type {String}
     */
    selectGroupLabel: {
      type: String,
      default: '"Entrée" pour valider le groupe'
    },
    /**
     * String to show next to selected option
     * @default 'Selected'
     * @type {String}
     */
    selectedLabel: {
      type: String,
      default: 'Selectionné'
    },
    /**
     * String to show when pointing to an already selected option
     * @default 'Press enter to remove'
     * @type {String}
     */
    deselectLabel: {
      type: String,
      default: '"Entrée" pour supprimer'
    },
    /**
     * String to show when pointing to an already selected option
     * @default 'Press enter to remove'
     * @type {String}
     */
    deselectGroupLabel: {
      type: String,
      default: '"Entrée" pour supprimer le groupe'
    },
    /**
     * Decide whether to show pointer labels
     * @default true
     * @type {Boolean}
     */
    showLabels: {
      type: Boolean,
      default: true
    },
    /**
     * Limit the display of selected options. The rest will be hidden within the limitText string.
     * @default 99999
     * @type {Integer}
     */
    limit: {
      type: Number,
      default: 99999
    },
    /**
     * Sets maxHeight style value of the dropdown
     * @default 300
     * @type {Integer}
     */
    maxHeight: {
      type: Number,
      default: 300
    },
    /**
     * Function that process the message shown when selected
     * elements pass the defined limit.
     * @default 'and * more'
     * @param {Int} count Number of elements more than limit
     * @type {Function}
     */
    limitText: {
      type: Function,
      default: count => `et ${count} de plus`
    },
    /**
     * Set true to trigger the loading spinner.
     * @default False
     * @type {Boolean}
     */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * Disables the multiselect if true.
     * @default false
     * @type {Boolean}
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Fixed opening direction
     * @default ''
     * @type {String}
     */
    openDirection: {
      type: String,
      default: ''
    },
    /**
     * Shows slot with message about empty options
     * @default true
     * @type {Boolean}
     */
    showNoOptions: {
      type: Boolean,
      default: true
    },
    showNoResults: {
      type: Boolean,
      default: true
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    isSingleLabelVisible() {
      return (
        (this.singleValue || this.singleValue === 0) &&
        (!this.isOpen || !this.searchable) &&
        !this.visibleValues.length
      );
    },
    isPlaceholderVisible() {
      return !this.internalValue.length && (!this.searchable || !this.isOpen);
    },
    visibleValues() {
      return this.multiple ? this.internalValue.slice(0, this.limit) : [];
    },
    singleValue() {
      return this.internalValue[0];
    },
    deselectLabelText() {
      return this.showLabels ? this.deselectLabel : '';
    },
    deselectGroupLabelText() {
      return this.showLabels ? this.deselectGroupLabel : '';
    },
    selectLabelText() {
      return this.showLabels ? this.selectLabel : '';
    },
    selectGroupLabelText() {
      return this.showLabels ? this.selectGroupLabel : '';
    },
    selectedLabelText() {
      return this.showLabels ? this.selectedLabel : '';
    },
    inputStyle() {
      if (
        this.searchable ||
        (this.multiple && this.value && this.value.length)
      ) {
        // Hide input by setting the width to 0 allowing it to receive focus
        return this.isOpen
          ? { width: '100%' }
          : { width: '0', position: 'absolute', padding: '0' };
      }

      return '';
    },
    contentStyle() {
      return this.options.length
        ? { display: 'inline-block' }
        : { display: 'block' };
    },
    isAbove() {
      if (this.openDirection === 'above' || this.openDirection === 'top') {
        return true;
      } else if (
        this.openDirection === 'below' ||
        this.openDirection === 'bottom'
      ) {
        return false;
      }

      return this.preferredOpenDirection === 'above';
    },
    showSearchInput() {
      return (
        this.searchable &&
        (this.hasSingleSelectedSlot &&
        (this.visibleSingleValue || this.visibleSingleValue === 0)
          ? this.isOpen
          : true)
      );
    }
  }
};
</script>

<style>
fieldset[disabled] .mj-select {
  pointer-events: none;
}
</style>
