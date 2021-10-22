import MjImageSlider from './../components/MjImageSlider.vue';

export default {
  title: 'Misc/MjImageSlider',
  component: MjImageSlider,
  argTypes: {
    value: {
      control: { type: 'number' }
    },
    aspectRatio: {
      control: { type: 'number' }
    },
    cover: {
      control: { type: 'boolean' }
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjImageSlider },
  template: '<mj-image-slider v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  value: 0,
  aspectRatio: 56.25,
  cover: true,
  images: [
    'https://www.automobile-magazine.fr/asset/cms/800x449/167149/config/115964/peugeot-208.jpg',
    'https://www.turbo.fr/sites/default/files/styles/slideshow_images/public/slideshow/slides/2020-03/5e7dc34562f44.jpg?itok=cE8-8n6B',
    'https://www.automobile-magazine.fr/asset/cms/800x449/167149/config/115964/peugeot-208.jpg',
    'https://www.turbo.fr/sites/default/files/styles/slideshow_images/public/slideshow/slides/2020-03/5e7dc34562f44.jpg?itok=cE8-8n6B',
    'https://www.automobile-magazine.fr/asset/cms/800x449/167149/config/115964/peugeot-208.jpg',
    'https://www.turbo.fr/sites/default/files/styles/slideshow_images/public/slideshow/slides/2020-03/5e7dc34562f44.jpg?itok=cE8-8n6B'
  ]
};

