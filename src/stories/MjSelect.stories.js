import MjSelect from './../components/MjSelect.vue';

export default {
  title: 'Forms/MjSelect',
  component: MjSelect,
  argTypes: {
    // type: {
    //   control: { type: 'select' },
    //   options: ['primary', 'secondary', 'transparent', 'brand', 'success', 'danger'],
    // },
    // size: {
    //   control: { type: 'select' },
    //   options: ['normal', 'small'],
    // },
    // tag: {
    //   control: { type: 'select' },
    //   options: ['a', 'button', 'input', 'router-link'],
    // },
    // disabled: {
    //   control: { type: 'boolean' }
    // }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjSelect },
  template: '<mj-select v-bind="$props"> {{ label }} </mj-select>',
});

export const Simple = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Simple.args = {
  options: ['list', 'of', 'Quo sunt omnis accusamus alias odit quam, ex a ut non debitis, iste distinctio excepturi voluptas iusto aperiam placeat quas, quibusdam velit'],
};
