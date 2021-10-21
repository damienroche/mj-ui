import MjAspectRatio from './../components/MjAspectRatio.vue';

export default {
  title: 'Misc/MjAspectRatio',
  component: MjAspectRatio,
  argTypes: {
    aspectRatio: {
      control: { type: 'number' }
    },
    image: {
      control: { type: 'text' }
    },
    cover: {
      control: { type: 'boolean' }
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjAspectRatio },
  template: '<mj-aspect-ratio v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  aspectRatio: 45,
  image: 'https://www.automobile-magazine.fr/asset/cms/800x449/167149/config/115964/peugeot-208.jpg',
  cover: false
};

