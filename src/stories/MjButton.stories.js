import MjButton from './../components/MjButton.vue';

export default {
  title: 'Buttons/MjButton',
  component: MjButton,
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
  components: { MjButton },
  template: '<mj-button v-bind="$props"> {{ label }} </mj-button>',
});

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Ajouter',
};
