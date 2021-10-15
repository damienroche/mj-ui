import MjUserAvatar from './../components/MjUserAvatar.vue';

export default {
  title: 'Misc/MjUserAvatar',
  component: MjUserAvatar
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjUserAvatar },
  template: '<mj-user-avatar v-bind="$props" class="w-12 h-12" />',
});

export const Default = Template.bind({});
Default.args = {
  src: null
};

export const Image = Template.bind({});
Image.args = {
  src: 'https://gravatar.com/avatar/1f82b0492a0a938288c2d5b70534a1fb?s=400&d=robohash&r=x',
  initials: 'DR'
};

export const Initials = Template.bind({});
Initials.args = {
  initials: 'DR'
};
