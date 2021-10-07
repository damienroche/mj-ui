<template>
  <div id="app" class="bg-gray-200 dark_bg-gray-900 p-4">
    <mj-card class="my-4 p-4 sticky top-[20px] z-10 w-[200px] ml-auto">
      <h2 class="text-navy dark_text-white font-semibold mb-4">Dark/Light Mode</h2>
      <div class="flex gap-4">
        <mj-button :type="isDark ? 'primary' : 'secondary'" @click="setTheme('dark')">Dark</mj-button>
        <mj-button :type="!isDark ? 'primary' : 'secondary'" @click="setTheme('light')">Light</mj-button>
      </div>
    </mj-card>

    <mj-card>
      <div class="rounded overflow-hidden">
        <mj-google-map />
      </div>
      <div class="rounded overflow-hidden">
        <mj-google-map height="300px" :show-controls="false" :center="{ latitude: 42.299482, longitude: 6.38978 }" />
      </div>
    </mj-card>

    <mj-card class="my-4 w-[430px]">
      <div class="p-4">
        <div class="flex items-center justify-between gap-2 mb-4">
          <div class="leading-none">
            <mj-text class="inline-flex items-center gap-2">
              <div class="w-5 h-5">
                <mj-campaign-icon />
              </div>
              <span class="text-lg font-extrabold">INT-0628</span>
            </mj-text>
            <mj-text type="ternary" class="block text-xxs">ID de campagne</mj-text>
          </div>
          <mj-text type="gray-500" class="w-4 h-4" tag="a" href="#!" hoverable>
            <mj-edit-icon />
          </mj-text>
        </div>

        <div class="h-[40px] bg-inProgress rounded items-center justify-center flex select-none mb-2">
          <div class="text-xs font-bold text-white">En cours</div>
        </div>

        <mj-flex-centered>
          <div class="flex flex-col items-center gap-1 leading-none">
            <mj-text type="ternary" class="text-xxxs">Référence interne :</mj-text>
            <mj-text class="text-[13px] font-semibold">C-SESGN-6666</mj-text>
          </div>
        </mj-flex-centered>
        <mj-field label="Types d'interventions :" class="mt-4">
          <div class="flex items-center gap-3">
            <mj-head-tag-counter :count="6" />
            <mj-text class="text-xs font-semibold">Curage de canalisations non visitables</mj-text>
          </div>
          <div class="flex items-center gap-3">
            <mj-head-tag-counter :count="13" />
            <mj-text class="text-xs font-semibold">Pompage/Nettoyage</mj-text>
          </div>
          <div class="flex items-center gap-3">
            <mj-head-tag-counter :count="2" />
            <mj-text class="text-xs font-semibold">Dépotage</mj-text>
          </div>
        </mj-field>
        <mj-field label="Natures du réseau :" class="mt-4">
          <div class="flex items-center gap-3">
            <mj-head-tag-counter :count="6" />
            <mj-text class="text-xs font-semibold">Eaux industrielles</mj-text>
          </div>
          <div class="flex items-center gap-3">
            <mj-head-tag-counter :count="13" />
            <mj-text class="text-xs font-semibold">Lorem ipsum</mj-text>
          </div>
        </mj-field>
        <mj-field label="Pré-chiffrage :" class="mt-4">
          <mj-text class="text-xs font-semibold">2 000</mj-text>
        </mj-field>
        <mj-horizontal-border class="my-4" />
        <mj-field label="Agence réalisatrice :">
          <mj-text class="block uppercase font-bold text-xs">LOREM IPSUM DOLOR</mj-text>
          <mj-text class="block text-xs">139 avenue Pasteur, Batiment C - RDC, <br /> 93200 Saint-Denis, FR</mj-text>
        </mj-field>
      </div>
      <mj-card-footer>
        <div class="flex items-center justify-center gap-1">
          <mj-text type="gray-500" class="w-4 h-4 flex-none block">
            <mj-clock-icon />
          </mj-text>
          <mj-text type="ternary" class="text-xxxs">Fiche campagne créée le 12/09/2020</mj-text>
        </div>
      </mj-card-footer>
    </mj-card>

    <mj-card class="my-4 w-[430px]">
      <div class="p-4">
        <div class="flex items-center gap-2 justify-between">
          <div class="flex items-center gap-2">
            <mj-head-tag-counter :count="632" />
            <mj-text class="font-bold text-base">Interventions</mj-text>
            <mj-text class="text-xs">Depuis le 07/02/2020</mj-text>
          </div>
          <div class="w-5 h-5">
            <mj-text type="gray-500">
              <svg width="100%" height="100%" viewBox="0 0 24 24"><path d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5v-5z" fill="currentColor"></path></svg>
            </mj-text>
          </div>
        </div>
      </div>
      <mj-fixed-height class="px-3">
        <mj-list-item
          v-for="i in 30"
          :key="i"
        >
          <div class="flex items-center gap-4">
            <div class="flex flex-col gap-4 flex-1">
              <div class="flex items-start justify-between gap-2">
                <div></div>
                <div class="text-right flex flex-col gap-1 leading-none">
                  <mj-text type="ternary" class="text-xxxs">Ref. interne :</mj-text>
                  <mj-text class="animation duration-150 group-hover_text-brand text-xs font-semibold">C-SESGN-33336</mj-text>
                </div>
              </div>
              <div class="flex items-start justify-between gap-2">
                <div></div>
                <div class="text-right flex flex-col gap-1 leading-none">
                  <mj-text type="ternary" class="text-xxxs">Date :</mj-text>
                  <mj-text class="animation duration-150 group-hover_text-brand text-xs font-semibold">28/08/2021</mj-text>
                </div>
              </div>
            </div>
            <mj-text class="animation duration-150 group-hover_text-brand" type="gray-500">
              <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M8.586 5.586a2 2 0 0 0 0 2.828L12.171 12l-3.585 3.586a2 2 0 1 0 2.828 2.828L17.829 12l-6.415-6.414a2 2 0 0 0-2.828 0z" fill="currentColor"></path></svg>
            </mj-text>
          </div>
        </mj-list-item>
      </mj-fixed-height>
      <mj-card-footer class="flex flex-col gap-2">
        <mj-button type="secondary" class="w-full">Toutes les interventions</mj-button>
        <mj-add-button title="Nouvelle intervention" class="w-full" />
      </mj-card-footer>
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
