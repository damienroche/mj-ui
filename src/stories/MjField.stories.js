import MjField from './../components/MjField.vue';
import MjInput from './../components/MjInput.vue';

export default {
  title: 'Forms/MjField',
  component: MjField,
  parameters: {
    docs: {
      description: {
        component: 'MjField has a `message` slot to display a message on bottom of it.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal'],
    },
    required: {
      control: { type: 'boolean' }
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjField, MjInput },
  template: '<mj-field v-bind="$props"><mj-input /> <template #message>Custom message</template></mj-field>',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Nom du champ',
};
