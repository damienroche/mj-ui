import MjText from './../components/MjText.vue';

export default {
  title: 'Misc/MjText',
  component: MjText,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['normal', 'secondary', 'gray-500', 'success', 'brand'],
    },
    hoverable: {
      control: { type: 'boolean' }
    },
    selectable: {
      control: { type: 'boolean' }
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjText },
  template: '<mj-text v-bind="$props"> {{ label }} </mj-text>',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Lorem ipsum dolor is consequit',
};
