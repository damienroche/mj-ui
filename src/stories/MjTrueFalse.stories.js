import MjTrueFalse from './../components/MjTrueFalse.vue';

export default {
  title: 'Buttons/MjTrueFalse',
  component: MjTrueFalse,
  argTypes: {
    value: {
      control: { type: 'boolean' }
    },
    tag: {
      control: { type: 'select' },
      options: ['span', 'div', 'a', 'router-link'],
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjTrueFalse },
  template: '<mj-true-false v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  value: true
};
