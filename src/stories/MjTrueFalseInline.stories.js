import MjTrueFalseInline from './../components/MjTrueFalseInline.vue';

export default {
  title: 'Containers/MjTrueFalseInline',
  component: MjTrueFalseInline,
  argTypes: {
    value: {
      control: { type: 'boolean' }
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjTrueFalseInline },
  template: '<mj-true-false-inline v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'Informer le client de la planification du contrat'
};
