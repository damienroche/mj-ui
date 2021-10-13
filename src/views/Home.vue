<template>
  <div>
    <mj-card class="my-4 p-4">
      <mj-audio-player-inline src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
      <mj-audio-player-inline src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" title="Commentaire audio :" />
    </mj-card>
    <mj-card class="my-4 p-4">
      <mj-stepper>
        <div slot="header" slot-scope="{ currentStep }" class="text-center my-4 h-8">
          <mj-text class="font-medium text-lg">{{ currentStep }}</mj-text>
        </div>
        <mj-step title="Étape 1 : Activité">
          <div class="my-4">
            Détails de l'activité...
          </div>
        </mj-step>
        <mj-step title="Étape 2 : Planification de l'intervention">
          <div class="my-4">
            L'étape de la planification
          </div>
        </mj-step>
        <mj-step title="Étape 3 : Notifications">
          <div class="my-4">
            Les Notifications
          </div>
        </mj-step>
        <div slot="footer" slot-scope="{ currentIndex, goNext, goPrevious, count }" class="flex gap-4">
          <mj-button v-if="currentIndex > 0" type="secondary" @click="goPrevious">Étape précédente</mj-button>
          <mj-button @click="goNext">
            <span v-if="currentIndex < count - 1">Suivant</span>
            <span v-else>Valider</span>
          </mj-button>
        </div>
      </mj-stepper>
    </mj-card>

    <mj-card class="p-4 my-4 w-[430px]">
      <mj-tab-wrapper>
        <mj-tab title="Tab 1">
          <mj-text class="my-3 block text-xs">Contenu tab 1</mj-text>
        </mj-tab>
        <mj-tab title="Tab 2">
          <mj-text class="my-3 block text-xs">Contenu tab 2</mj-text>
        </mj-tab>
        <mj-tab title="Tab 3">
          <mj-text class="my-3 block text-xs">Contenu tab 3</mj-text>
        </mj-tab>
        <mj-tab title="Tab 4" disabled>
          <mj-text class="my-3 block text-xs">Contenu tab 4</mj-text>
        </mj-tab>
      </mj-tab-wrapper>

      <mj-tab-wrapper :rounded="false" type="navy">
        <mj-tab title="Tab 1">
          <mj-text class="my-3 block text-xs">Contenu tab 1</mj-text>
        </mj-tab>
        <mj-tab title="Tab 2">
          <mj-text class="my-3 block text-xs">Contenu tab 2</mj-text>
        </mj-tab>
        <mj-tab title="Tab 3">
          <mj-text class="my-3 block text-xs">Contenu tab 3</mj-text>
        </mj-tab>
      </mj-tab-wrapper>
    </mj-card>

    <mj-card class="p-4 my-4">
      <div class="flex flex-wrap gap-4">
        <mj-button type="brand" size="normal">Ajouter</mj-button>
        <mj-button type="primary" size="normal">Ajouter</mj-button>
        <mj-button type="primary" size="normal" disabled>Ajouter</mj-button>
        <mj-button type="primary" size="small">Charger plus</mj-button>
        <mj-button type="secondary">Ajouter</mj-button>
        <mj-button type="secondary" disabled>Ajouter</mj-button>
        <mj-button type="transparent">Ajouter</mj-button>
        <mj-button type="danger">Ajouter</mj-button>
        <mj-button type="success" class="w-[200px]">Ajouter</mj-button>
        <mj-add-button title="Ajouter un contact sur place" disabled />
        <mj-next-button title="Voir tous les ouvrages" />
        <mj-add-button title="Ajouter un contact sur place" />
        <mj-add-button title="Importer un document réglementaire" />
        <mj-add-button title="Ajouter" />
        <mj-add-button title="Importer une photo de profil" />
        <mj-process-button title="Mettre à jour" :loading="loading" @click="loading = !loading" />
      </div>
      <div class="flex flex-wrap gap-4 my-8">
        <mj-tag deletable>antoine.delorme@gmail.com</mj-tag>
        <mj-tag>antoine.delorme@gmail.com</mj-tag>
        <mj-tag deletable>0638953929</mj-tag>
        <mj-tag>0638953929</mj-tag>
      </div>
      <div class="flex flex-wrap gap-4 my-8">
        <mj-progress-bar :value="0.335" />
        <mj-progress-bar :value="0.86" type="success" />
      </div>
    </mj-card>

    <mj-card class="p-4 my-4">
      <h2 class="text-navy dark_text-white font-semibold mb-4">Niveau de gris</h2>
      <div class="grid grid-cols-8">
        <div class="h-32 bg-gray-100"></div>
        <div class="h-32 bg-gray-200"></div>
        <div class="h-32 bg-gray-300"></div>
        <div class="h-32 bg-gray-400"></div>
        <div class="h-32 bg-gray-500"></div>
        <div class="h-32 bg-gray-600"></div>
        <div class="h-32 bg-gray-700"></div>
        <div class="h-32 bg-gray-800"></div>
        <div class="h-32 bg-gray-900"></div>
      </div>
    </mj-card>

    <mj-card class="p-4 my-4">
      <h2 class="text-navy dark_text-white font-semibold mb-4">Couleur ternaire</h2>
      <div class="grid grid-cols-8">
        <div class="h-32 bg-ternary-light"></div>
        <div class="h-32 bg-ternary"></div>
      </div>
    </mj-card>

    <mj-card class="p-4 my-4">
      <h2 class="text-navy dark_text-white font-semibold mb-4">Élements cartes</h2>
      <div class="flex flex-wrap gap-4 items-start">
        <mj-map-zoom :disabled="['in']" />
        <mj-map-style-switch v-model="mapStyle" />
      </div>
    </mj-card>

    <mj-card class="p-4 my-4">
      <h2 class="text-navy dark_text-white font-semibold mb-4">Boite infos</h2>
      <mj-info-box class="my-2">
        Propreté du chantier
      </mj-info-box>
      <mj-info-box class="my-2" type="danger">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi aliquid delectus ullam culpa laudantium sequi molestias rerum?
      </mj-info-box>
      <mj-info-box class="my-2" type="success">
        Bravo
      </mj-info-box>
    </mj-card>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      loading: false,
      mapStyle: 'roadmap',
      check: [],
    };
  },
  methods: {
    submitForm() {
      alert('Submit form');
    }
  }
};
</script>
