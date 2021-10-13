import MjButton from './../components/MjButton.vue';

export default {
  title: 'Buttons/MjButton',
  component: MjButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
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

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjButton },
  template: '<mj-button v-bind="$props"> {{ label }} </mj-button>',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  type: 'primary',
  label: 'Ajouter',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button'
// };
