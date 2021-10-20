import MjPagination from './../components/MjPagination.vue';

export default {
  title: 'Buttons/MjPagination',
  component: MjPagination,
  argTypes: {
    value: {
      control: { type: 'number' }
    },
    length: {
      control: { type: 'number' }
    },
    perPage: {
      control: { type: 'number' }
    },
    layout: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal']
    },
    itemName: {
      control: { type: 'text' }
    },
    itemNamePlural: {
      control: { type: 'text' }
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjPagination },
  template: '<mj-pagination v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  length: 57,
  perPage: 12,
  value: 2
};

