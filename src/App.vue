<template>
  <div id="app" class="bg-gray-200 dark_bg-gray-900 p-4">
    <mj-card class="my-4 p-4 sticky top-[20px] z-10 w-[200px] ml-auto">
      <h2 class="text-navy dark_text-white font-semibold mb-4">Dark/Light Mode</h2>
      <div class="flex gap-4">
        <mj-button :type="isDark ? 'primary' : 'secondary'" @click="setTheme('dark')">Dark</mj-button>
        <mj-button :type="!isDark ? 'primary' : 'secondary'" @click="setTheme('light')">Light</mj-button>
      </div>
    </mj-card>

    <mj-card class="p-4 my-4 w-[430px]">
      <h2 class="text-navy dark_text-white font-semibold mb-4">Formulaire</h2>
      <form @submit.prevent="submitForm">
        <mj-field class="my-2" label="Prénom" required>
          <mj-input type="text" />
          <template #message>
            Le prénom est obligatoire
          </template>
        </mj-field>
        <mj-field class="my-2" label="Nom" required>
          <mj-input type="text" placeholder="Nom de famile" />
        </mj-field>
        <mj-field class="my-2" label="Nom" required orientation="horizontal">
          <mj-input type="text" placeholder="Nom de famile" />
          <template #message>
            Le nom est obligatoire
          </template>
        </mj-field>
        <mj-field class="my-2" label="Commentaire">
          <mj-input tag="textarea" class="resize-none" />
        </mj-field>
        <mj-button>Valider</mj-button>
      </form>
    </mj-card>

    <mj-card class="my-4 p-4">
      <h2 class="text-navy dark_text-white font-semibold mb-4">Overflow avec scrollbar custom</h2>
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

    <mj-card class="my-4 w-[430px]">
      <div class="p-4">
        <div class="p-2 flex items-center gap-2">
          <mj-head-tag-counter :count="6" />
          <mj-text class="text-base leading-5 font-bold">Planification</mj-text>
        </div>
        <mj-info-box class="my-2">
          Attention, la modification s'appliquera à l'ensemble des interventions associées au contrat.
        </mj-info-box>
      </div>
      <mj-fixed-height height="450px">
        <div class="p-2">
          <mj-list-item
            v-for="i in 40"
            :key="i"
          >
            <mj-text class="group-hover_text-brand">Test {{ i }}</mj-text>
          </mj-list-item>
        </div>
      </mj-fixed-height>
      <mj-card-footer>
        <mj-add-button title="Ajouter un créneau" class="w-full" />
      </mj-card-footer>
    </mj-card>

    <mj-card class="w-[436px] my-4">
      <div class="p-2">
        <div class="p-2 flex items-center gap-2">
          <mj-head-tag-counter :count="23" />
          <mj-text class="text-base leading-5 font-bold">Contact sur place</mj-text>
        </div>
        <mj-horizontal-border class="my-4" />
        <mj-flex-centered class="my-3" text-center>
          <mj-text class="block text-xxxs" type="ternary">SIRET :</mj-text>
          <mj-text class="block text-[13px] font-semibold" select type="normal">799999129932</mj-text>
        </mj-flex-centered>
        <mj-flex-centered class="my-3" text-center>
          <mj-text class="block text-xxxs" type="ternary">TVA Intracommunautaire :</mj-text>
          <mj-text class="block text-[13px] font-semibold" select>FR 795329 9129932</mj-text>
        </mj-flex-centered>
        <mj-flex-centered class="my-3" text-center>
          <mj-text class="block text-xxxs" type="ternary">Code client :</mj-text>
          <mj-text class="block text-[13px] font-semibold" select>990A</mj-text>
        </mj-flex-centered>
      </div>
      <mj-card-footer>
        <mj-add-button title="Ajouter un contact sur place" class="w-full" />
      </mj-card-footer>
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
        <mj-save-button title="Mettre à jour" :loading="loading" @click="loading = !loading" />
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
      <mj-info-box class="my-2" color="danger">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi aliquid delectus ullam culpa laudantium sequi molestias rerum?
      </mj-info-box>
      <mj-info-box class="my-2" color="success">
        Bravo
      </mj-info-box>
    </mj-card>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      loading: false,
      isDark: false,
      mapStyle: 'roadmap'
    };
  },
  mounted() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.isDark = true;
      document.documentElement.classList.add('dark');
    } else {
      this.isDark = false;
      document.documentElement.classList.remove('dark');
    }
  },
  methods: {
    setTheme(theme) {
      localStorage.theme = theme;
      if (theme === 'dark') {
        this.isDark = true;
        document.documentElement.classList.add('dark');
      } else {
        this.isDark = false;
        document.documentElement.classList.remove('dark');
      }
    },
    submitForm() {
      alert('Submit form');
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato:300,400|Montserrat:300,400,500,600,700,800&display=swap');
@import './styles/style.css';
</style>
