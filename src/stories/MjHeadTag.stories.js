import MjHeadTag from './../components/MjHeadTag.vue';

export default {
  title: 'Misc/MjHeadTag',
  component: MjHeadTag,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['normal', 'gray-500'],
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjHeadTag },
  template: '<mj-head-tag v-bind="$props"> {{ title }} </mj-head-tag>',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Tag'
};
