import MjInfoBox from './../components/MjInfoBox.vue';

export default {
  title: 'Messages/MjInfoBox',
  component: MjInfoBox,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['brand', 'danger', 'success'],
    },
    icon: {
      control: { type: 'select' },
      options: ['info'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjInfoBox },
  template: '<mj-info-box v-bind="$props"> {{ text }} </mj-info-box>',
});

export const Default = Template.bind({});
Default.args = {
  type: 'primary',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi aliquid delectus ullam culpa laudantium sequi molestias rerum?',
};
