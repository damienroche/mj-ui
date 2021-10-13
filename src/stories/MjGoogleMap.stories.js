import MjGoogleMap from './../components/MjGoogleMap.vue';

export default {
  title: 'Map/MjGoogleMap',
  component: MjGoogleMap,
  argTypes: {
    showControls: {
      control: { type: 'boolean' }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjGoogleMap },
  template: '<mj-google-map v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  height: '350px'
};
