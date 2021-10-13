import MjTooltip from './../components/MjTooltip.vue';

export default {
  title: 'Misc/MjTooltip',
  component: MjTooltip,
  argTypes: {
    followCursor: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical', true, false, undefined],
    },
    inline: {
      control: { type: 'boolean' }
    },
    selectable: {
      control: { type: 'boolean' }
    },
    placement: {
      control: { type: 'select' },
      options: ['auto', 'auto-start', 'auto-end', 'top', 'bottom', 'right', 'left', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'right-start', 'right-end', 'left-start', 'left-end']
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjTooltip },
  template: '<mj-tooltip v-bind="$props"> <div slot="tooltip"> {{ tooltipContent }} </div> <span class="bg-gray-200 p-2"> {{ label }} </span> </mj-tooltip>',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Lorem ipsum dolor is consequit',
  tooltipContent: 'Here some tooltip content'
};
