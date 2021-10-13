import MjHeadTagCounter from './../components/MjHeadTagCounter.vue';

export default {
  title: 'Misc/MjHeadTagCounter',
  component: MjHeadTagCounter
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjHeadTagCounter },
  template: '<mj-head-tag-counter v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  count: 20
};
