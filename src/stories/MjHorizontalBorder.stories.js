import MjHorizontalBorder from './../components/MjHorizontalBorder.vue';

export default {
  title: 'Misc/MjHorizontalBorder',
  component: MjHorizontalBorder
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjHorizontalBorder },
  template: '<mj-horizontal-border v-bind="$props" />',
});

export const Default = Template.bind({});
