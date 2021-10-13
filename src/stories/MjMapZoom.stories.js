import MjMapZoom from './../components/MjMapZoom.vue';

export default {
  title: 'Map/MjMapZoom',
  component: MjMapZoom,
  argTypes: {
    disabled: {
      control: { type: 'boolean' }
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjMapZoom },
  template: '<mj-map-zoom v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  disabled: false
};
