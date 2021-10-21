<template>
  <div>
    <mj-card class="mt-4 p-4">
      <h2 class="text-primary dark_text-white font-semibold mb-4">Overflow avec scrollbar custom</h2>
      <mj-fixed-height>
        <mj-flex-centered
          v-for="i in 30"
          :key="i"
          class="p-2 my-px"
        >
          <mj-text>{{ i }}</mj-text>
        </mj-flex-centered>
      </mj-fixed-height>
    </mj-card>
    <!-- <mj-card class="mt-4 p-4">
      <h2 class="text-primary dark_text-white font-semibold mb-4">Pagination test</h2>
      <div class="grid grid-cols-4 gap-4">
        <mj-flex-centered
          v-for="i in perPage"
          :key="i"
          class="p-2 my-px"
        >
          <mj-text>{{ i + pageIndex * perPage }}</mj-text>
        </mj-flex-centered>
      </div>
      <div class="flex justify-center pt-4">
        <mj-pagination
          v-model="pageIndex"
          :length="nbItems"
          :per-page="perPage"
        />
      </div>
    </mj-card> -->
    <mj-card class="mt-4 p-4">
      <h2 class="text-primary dark_text-white font-semibold mb-4">Pagination construite via API</h2>
      <div class="grid grid-cols-4 gap-4">
        <mj-flex-centered
          v-for="vehicle in vehicles"
          :key="vehicle.id"
          class="p-2 my-px"
        >
          <mj-text class="text-xs">{{ vehicle.brand }} {{ vehicle.reference }}</mj-text>
        </mj-flex-centered>
      </div>
      <div class="flex justify-center pt-4">
        <mj-pagination
          v-model="pageIndex"
          :length="nbItems"
          :per-page="perPage"
          item-name="véhicule"
          item-name-plural="véhicules"
        />
      </div>
    </mj-card>
    <mj-card class="mt-4 p-4">
      <h2 class="text-primary dark_text-white font-semibold mb-4">Image Slider</h2>
      <mj-image-slider
        v-model="slideIndex"
        :images="slideImages"
        show-zoom
        @zoom="onZoom"
      />
    </mj-card>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Utilities',
  data() {
    return {
      pageIndex: 0,
      nbItems: 0,
      perPage: 12,
      vehicles: [],
      slideIndex: 0,
      slideImages: [
        'https://www.automobile-magazine.fr/asset/cms/800x449/167149/config/115964/peugeot-208.jpg',
        'https://www.turbo.fr/sites/default/files/styles/slideshow_images/public/slideshow/slides/2020-03/5e7dc34562f44.jpg?itok=cE8-8n6B',
        'https://www.automobile-magazine.fr/asset/cms/800x449/167149/config/115964/peugeot-208.jpg',
        'https://www.turbo.fr/sites/default/files/styles/slideshow_images/public/slideshow/slides/2020-03/5e7dc34562f44.jpg?itok=cE8-8n6B',
        'https://www.automobile-magazine.fr/asset/cms/800x449/167149/config/115964/peugeot-208.jpg',
        'https://www.turbo.fr/sites/default/files/styles/slideshow_images/public/slideshow/slides/2020-03/5e7dc34562f44.jpg?itok=cE8-8n6B'
      ]
    };
  },
  watch: {
    pageIndex: {
      immediate: true,
      handler() {
        this.fetchVehiclesFromApi();
      }
    }
  },
  methods: {
    fetchVehiclesFromApi() {
      const instance = axios.create({
        baseURL: 'https://osis.mj-fleet-test.com/api/manager',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`
        }
      });
      instance.get('agencies/s13/vehicles', { params: { per: this.perPage, page: this.pageIndex + 1 } }).then(res => {
        this.vehicles = res.data && res.data.vehicles ? res.data.vehicles : [];
        this.nbItems = parseInt(res.headers['x-pagination-total'], 10);
      });
    },
    onZoom(imageUrl) {
      window.location.href = imageUrl;
    }
  }
};
</script>
