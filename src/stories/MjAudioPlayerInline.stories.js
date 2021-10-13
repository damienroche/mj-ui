import MjAudioPlayerInline from './../components/MjAudioPlayerInline.vue';

export default {
  title: 'Audio-Video/MjAudioPlayerInline',
  component: MjAudioPlayerInline,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MjAudioPlayerInline },
  template: '<mj-audio-player-inline v-bind="$props"> {{ label }} </mj-audio-player-inline>',
});

export const Default = Template.bind({});
Default.args = {
  src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  title: 'Commentaire audio :',
};
