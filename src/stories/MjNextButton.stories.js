import MjNextButton from './../components/MjNextButton.vue';

export default {
  title: 'Buttons/MjNextButton',
  component: MjNextButton,
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
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjNextButton },
  template: '<mj-next-button v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Suivant'
};
