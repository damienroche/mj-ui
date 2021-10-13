import MjSelect from './../components/MjSelect.vue';

export default {
  title: 'Forms/MjSelect',
  component: MjSelect,
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjSelect },
  template: '<mj-select v-bind="$props"> {{ label }} </mj-select>',
});

export const Simple = Template.bind({});
Simple.args = {
  options: ['list', 'of', 'Quo sunt omnis accusamus alias odit quam, ex a ut non debitis, iste distinctio excepturi voluptas iusto aperiam placeat quas, quibusdam velit'],
};
