import MjFlexCentered from './../components/MjFlexCentered.vue';

export default {
  title: 'Containers/MjFlexCentered',
  component: MjFlexCentered
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjFlexCentered },
  template: '<mj-flex-centered v-bind="$props"> {{ title }} </mj-flex-centered>',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Tag',
  height: '120px'
};
