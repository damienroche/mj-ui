import MjCard from './../components/MjCard.vue';

export default {
  title: 'Cards/MjCard',
  component: MjCard,
  parameters: {
    docs: {
      description: {
        component: 'The base of card',
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjCard },
  template: '<mj-card v-bind="$props"><div class="p-4">Content of card</div></mj-card>',
});

export const Base = Template.bind({});
