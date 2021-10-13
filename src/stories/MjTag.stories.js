import MjTag from './../components/MjTag.vue';

export default {
  title: 'Buttons/MjTag',
  component: MjTag,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['hollow', 'ternary'],
    },
    deletable: {
      control: { type: 'boolean' }
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjTag },
  template: '<mj-tag v-bind="$props"> {{ label }} </mj-tag>',
});

export const Default = Template.bind({});
Default.args = {
  type: 'hollow',
  label: 'damien@myjungly.com',
};
