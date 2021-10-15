import MjTrueFalseToggle from './../components/MjTrueFalseToggle.vue';

export default {
  title: 'Forms/MjTrueFalseToggle',
  component: MjTrueFalseToggle
};

const Template = () => ({
  components: { MjTrueFalseToggle },
  template: '<mj-true-false-toggle />',
});

export const Default = Template.bind({});

