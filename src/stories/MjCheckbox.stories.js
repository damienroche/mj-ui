import MjCheckbox from './../components/MjCheckbox.vue';

export default {
  title: 'Forms/MjCheckbox',
  component: MjCheckbox,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['normal', 'brand'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjCheckbox },
  template: '<mj-checkbox />',
});

export const Default = Template.bind({});

