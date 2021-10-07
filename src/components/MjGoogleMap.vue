<template>
  <div
    class="w-full relative"
    :style="{ height }"
  >
    <div
      :id="`map-${id}`"
      class="h-full w-full"
    />
    <div v-if="showControls" class="absolute bottom-0 right-0 p-4 z-5">
      <mj-map-zoom @change="zoomLevel += $event" />
    </div>
    <div v-if="showControls" class="absolute bottom-0 p-4 z-5 -translate-x-1/2 left-1/2">
      <mj-map-style-switch v-model="mapTypeId" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { merge, omitBy, isNil } from 'lodash';
import { Loader } from '@googlemaps/js-api-loader';

const uuid = Vue.observable({ value: uuidv4() });
const DEFAULT_MAP_OPTIONS = {
  container: `map-${uuid.value}`,
  center: { lat: 43.296482, lng: 5.36978 },
  zoom: 14,
  disableDefaultUI: true,
  mapTypeId: 'roadmap'
};

const map = Vue.observable({ value: null });
const google = Vue.observable({ value: null });
const mapIsReady = Vue.observable({ value: false });

export default {
  name: 'MjGoogleMap',
  provide() {
    return {
      map,
      google,
      mapIsReady
    };
  },
  props: {
    height: {
      type: String,
      default: '450px'
    },
    mapOptions: {
      type: Object,
      default: () => ({ zoom: 14, disableDefaultUI: true })
    },
    showControls: {
      type: Boolean,
      default: true
    },
    center: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      google: null,
      loader: null,
      options: null,
      zoomLevel: 12,
      mapTypeId: 'roadmap',
      id: uuid.value
    };
  },
  computed: {
    googleCenter() {
      return this.center ? { lat: this.center.latitude, lng: this.center.longitude } : null;
    }
  },
  watch: {
    zoomLevel: function(level) { // eslint-disable-line
      if (mapIsReady.value) {
        map.value.setZoom(level);
      }
    },
    mapTypeId: function(type) { // eslint-disable-line
      if (mapIsReady.value) {
        map.value.setMapTypeId(type);
      }
    }
  },
  async created() {
    this.loader = new Loader({
      apiKey: 'AIzaSyAAV9F5Dr1hABCuIvy5_6SlmaRDUUiTHm8',
      version: 'weekly',
      libraries: ['places']
    });
    const googleOptions = merge(DEFAULT_MAP_OPTIONS, this.mapOptions);
    this.options = merge(googleOptions, omitBy({ center: this.googleCenter }, isNil));
    this.zoomLevel = this.mapOptions.zoom || 12;
    this.mapTypeId = this.mapOptions.mapTypeId || 'roadmap';
    google.value = await this.loader.load();
    this.init();
  },
  methods: {
    init() {
      map.value = new google.value.maps.Map(
        document.getElementById(`map-${uuid.value}`),
        this.options
      );
      mapIsReady.value = true;
      map.value.addListener('zoom_changed', () => {
        this.zoomLevel = map.value.getZoom();
      });
      this.$emit('map-init', map.value);
    }
  }
};
</script>

<style>
.gm-style-cc,
.gmnoprint {
  display: none !important;
}

a[href^="http://maps.google.com/maps"] {display:none !important; }
a[href^="https://maps.google.com/maps"] {display:none !important; }
</style>

