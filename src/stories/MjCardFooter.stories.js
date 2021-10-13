import MjCard from './../components/MjCard.vue';
import MjCardFooter from './../components/MjCardFooter.vue';

export default {
  title: 'Cards/MjCardFooter',
  component: MjCardFooter,
  parameters: {
    docs: {
      description: {
        component: 'Common footer of a card',
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjCard, MjCardFooter },
  template: '<mj-card><div class="p-4">Content of card</div><mj-card-footer>Bottom of card</mj-card-footer></mj-card>',
});

export const Base = Template.bind({});
