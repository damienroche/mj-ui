import MjInput from './../components/MjInput.vue';

export default {
  title: 'Forms/MjInput',
  component: MjInput,
  parameters: {
    docs: {
      description: {
        component: 'MjInput can be use for an input or textarea element',
      },
    },
  },
  argTypes: {
    tag: {
      control: { type: 'select' },
      options: ['input', 'textarea'],
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjInput },
  template: '<mj-input v-bind="$props" />',
});

export const Default = Template.bind({});
