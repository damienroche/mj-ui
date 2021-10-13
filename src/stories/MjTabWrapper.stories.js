import MjTabWrapper from './../components/MjTabWrapper.vue';
import MjTab from './../components/MjTab.vue';
import MjText from './../components/MjText.vue';

export default {
  component: MjTabWrapper,
  title: 'Containers/MjTabWrapper',
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['navy', 'brand'],
    },
    size: {
      control: { type: 'select' },
      options: ['small'],
    },
  },
};

export const Tabs = (args, { argTypes }) => ({
  components: { MjTabWrapper, MjTab, MjText },
  props: Object.keys(argTypes),
  template: `
    <mj-tab-wrapper v-bind="$props">
      <mj-tab title="Tab 1">
        <mj-text class="my-3 block text-xs">Contenu tab 1</mj-text>
      </mj-tab>
      <mj-tab title="Tab 2">
        <mj-text class="my-3 block text-xs">Contenu tab 2</mj-text>
      </mj-tab>
      <mj-tab title="Tab 3">
        <mj-text class="my-3 block text-xs">Contenu tab 3</mj-text>
      </mj-tab>
      <mj-tab title="Tab 4 (disabled)" disabled>
        <mj-text class="my-3 block text-xs">Contenu tab 4</mj-text>
      </mj-tab>
    </mj-tab-wrapper>
    `,
});
