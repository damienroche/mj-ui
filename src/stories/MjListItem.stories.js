import MjListItem from './../components/MjListItem.vue';

export default {
  title: 'Containers/MjListItem',
  component: MjListItem,
  parameters: {
    docs: {
      description: {
        component: 'MjListItem can be use in a `v-for` loop. Use loop index to set `show-border: false` for the last item.',
      },
    },
  },
  argTypes: {
    tag: {
      control: { type: 'select' },
      options: ['div', 'a', 'li', 'router-link'],
    },
    hoverable: {
      control: { type: 'boolean' }
    },
    showBorder: {
      control: { type: 'boolean' }
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjListItem },
  template: '<mj-list-item v-bind="$props"> {{ text }} </mj-list-item>',
});

export const Default = Template.bind({});
Default.args = {
  text: 'Contenu de l\'élément.',
};
