import MjRadio from './../components/MjRadio.vue';

export default {
  title: 'Forms/MjRadio',
  component: MjRadio,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['normal', 'brand'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjRadio },
  template: '<mj-radio />',
});

export const Default = Template.bind({});

