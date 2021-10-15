<template>
  <div class="bg-primary rounded overflow-hidden h-[3.75rem] flex flex-col">
    <div class="flex-1 p-3" @click="togglePlay">
      <div class="flex items-center justify-between gap-3">
        <div class="flex-1 flex items-center gap-3">
          <div
            class="duration-150 w-7 h-7 rounded-full flex items-center justify-center text-white cursor-pointer"
            :class="{
              'bg-dark-500 hover_bg-dark-300': !playing,
              'bg-brand hover_bg-brand-dark': playing
            }"
          >
            <svg v-if="!playing" width="40%" height="40%" viewBox="0 0 256 256"><path d="M239.969 128a15.9 15.9 0 0 1-7.656 13.656l-143.97 87.985A15.998 15.998 0 0 1 64 215.992V40.008a15.998 15.998 0 0 1 24.344-13.649l143.969 87.985A15.9 15.9 0 0 1 239.969 128z" fill="currentColor"></path></svg>
            <svg v-if="playing" width="40%" height="40%" viewBox="0 0 256 256"><path d="M216 48v160a16.018 16.018 0 0 1-16 16h-36a16.018 16.018 0 0 1-16-16V48a16.018 16.018 0 0 1 16-16h36a16.018 16.018 0 0 1 16 16zM92 32H56a16.018 16.018 0 0 0-16 16v160a16.018 16.018 0 0 0 16 16h36a16.018 16.018 0 0 0 16-16V48a16.018 16.018 0 0 0-16-16z" fill="currentColor"></path></svg>
          </div>
          <div class="text-xs text-white">{{ title }}</div>
        </div>
        <div class="text-[0.8125rem] text-white font-semibold"> {{ seekDisplay }} - {{ durationDisplay }} </div>
      </div>
    </div>
    <mj-progress-bar
      :value="progress"
      height="8px"
      :interactive="playing"
      @click="updateSeek"
    />
  </div>
</template>

<script>
import { Howl } from 'howler';
import { clamp } from './../utils/math';
import { secondToTime } from './../utils/time';
import MjProgressBar from './MjProgressBar.vue';

export default {
  name: 'MjAudioPlayerInline',
  components: {
    'mj-progress-bar': MjProgressBar
  },
  props: {
    /**
     * source of the audio file
     * @default null
     * @type {String}
     */
    src: {
      type: String,
      required: true
    },
    /**
     * title of the audio file
     * @default ''
     * @type {String}
     */
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      howl: null,
      playing: false,
      duration: 0,
      seek: 0,
      seekId: null,
    };
  },
  computed: {
    progress() {
      if (this.duration === 0) {
        return 0;
      }

      return this.seek / this.duration;
    },
    seekDisplay() {
      return secondToTime(this.seek.toFixed(0));
    },
    durationDisplay() {
      return secondToTime(this.duration.toFixed(0));
    }
  },
  watch: {
    playing(playing) {
      this.seek = this.howl.seek();
      if (playing) {
        this.seekId = setInterval(() => {
          this.seek = this.howl.seek();
        }, 1000 / 4);
      } else {
        clearInterval(this.seekId);
      }
    }
  },
  mounted() {
    this.howl = new Howl({
      src: [this.src]
    });
    this.howl.on('play', this.setPlaying);
    this.howl.on('pause', this.unsetPlaying);
    this.howl.on('stop', this.unsetPlaying);
    this.howl.on('end', this.unsetPlaying);
    this.howl.on('load', this.onHowlLoad);
    this.howl.on('seek', this.onHowlSeek);
  },
  beforeDestroy() {
    this.cleanup();
  },
  methods: {
    setPlaying() {
      this.playing = true;
    },
    unsetPlaying() {
      this.playing = false;
    },
    onHowlLoad() {
      this.duration = this.howl.duration();
    },
    onHowlSeek() {
      this.seek = this.howl.seek();
    },
    togglePlay() {
      if (!this.playing) {
        this.howl.play();
      } else {
        this.howl.pause();
      }
    },
    setSeek(seek) {
      if (typeof seek !== 'number') {
        return;
      }
      this.howl.seek(clamp(seek, 0, this.duration));
    },
    updateSeek(progress) {
      if (!this.playing) {
        return;
      }

      this.setSeek(progress * this.duration);
    },
    stop() {
      this.howl.stop();
    },
    pause() {
      if (this.playing) {
        this.howl.pause();
      }
    },
    cleanup() {
      clearInterval(this.seekId);
      if (this.howl) {
        this.stop();
      }
      this.howl.off('play', this.setPlaying);
      this.howl.off('pause', this.unsetPlaying);
      this.howl.off('stop', this.unsetPlaying);
      this.howl.off('end', this.unsetPlaying);
      this.howl.off('load', this.onHowlLoad);
      this.howl.off('seek', this.onHowlSeek);
      this.howl = null;
      this.seek = 0;
      this.duration = 0;
    }
  }
};
</script>
