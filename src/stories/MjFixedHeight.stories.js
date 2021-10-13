import MjFixedHeight from './../components/MjFixedHeight.vue';

export default {
  title: 'Containers/MjFixedHeight',
  component: MjFixedHeight,
  parameters: {
    docs: {
      description: {
        component: 'Simple container with custom scrollbar',
      },
    },
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjFixedHeight },
  template: `<mj-fixed-height class="w-16" v-bind="$props">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem optio reprehenderit nemo, dolor laudantium aspernatur temporibus quas ut! Exercitationem ipsum iste fugit dolore ut quis delectus harum reprehenderit beatae commodi.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem optio reprehenderit nemo, dolor laudantium aspernatur temporibus quas ut! Exercitationem ipsum iste fugit dolore ut quis delectus harum reprehenderit beatae commodi.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem optio reprehenderit nemo, dolor laudantium aspernatur temporibus quas ut! Exercitationem ipsum iste fugit dolore ut quis delectus harum reprehenderit beatae commodi.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem optio reprehenderit nemo, dolor laudantium aspernatur temporibus quas ut! Exercitationem ipsum iste fugit dolore ut quis delectus harum reprehenderit beatae commodi.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem optio reprehenderit nemo, dolor laudantium aspernatur temporibus quas ut! Exercitationem ipsum iste fugit dolore ut quis delectus harum reprehenderit beatae commodi.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem optio reprehenderit nemo, dolor laudantium aspernatur temporibus quas ut! Exercitationem ipsum iste fugit dolore ut quis delectus harum reprehenderit beatae commodi.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem optio reprehenderit nemo, dolor laudantium aspernatur temporibus quas ut! Exercitationem ipsum iste fugit dolore ut quis delectus harum reprehenderit beatae commodi.
    </mj-fixed-height>
  `,
});

export const Default = Template.bind({});
Default.args = {
  height: '200px'
};
