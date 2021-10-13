import MjProgressBar from './../components/MjProgressBar.vue';

export default {
  title: 'Misc/MjProgressBar',
  component: MjProgressBar,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['brand', 'navy', 'success', 'danger'],
    },
    value: {
      control: { type: 'number' },
    },
    stripped: {
      control: { type: 'boolean' }
    },
    interactive: {
      control: { type: 'boolean' }
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjProgressBar },
  template: '<mj-progress-bar v-bind="$props" />',
});

export const Stripped = Template.bind({});
Stripped.args = {
  height: '10px',
  value: 0.4,
  stripped: true
};
