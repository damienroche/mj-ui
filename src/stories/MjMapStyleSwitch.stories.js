import MjMapStyleSwitch from './../components/MjMapStyleSwitch.vue';

export default {
  title: 'Map/MjMapStyleSwitch',
  component: MjMapStyleSwitch,
  parameters: {
    docs: {
      description: {
        component: 'MjMapStyleSwitch should be used with `v-model` syntax',
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'select' },
      options: ['satellite', 'roadmap'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjMapStyleSwitch },
  template: '<mj-map-style-switch v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  value: 'roadmap'
};
