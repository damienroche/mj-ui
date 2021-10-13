import MjProcessButton from './../components/MjProcessButton.vue';

export default {
  title: 'Buttons/MjProcessButton',
  component: MjProcessButton,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'transparent', 'brand', 'success', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['normal', 'small'],
    },
    tag: {
      control: { type: 'select' },
      options: ['a', 'button', 'input', 'router-link'],
    },
    disabled: {
      control: { type: 'boolean' }
    },
    loading: {
      control: { type: 'boolean' }
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjProcessButton },
  template: '<mj-process-button v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Sauvegarder'
};
