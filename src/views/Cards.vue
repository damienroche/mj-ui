<template>
  <div>
    <mj-card-file-list :files="files" @add="alert('Ajouter un document')" />
    <mj-card-file-list />

    <mj-card class="my-4 w-[26.875rem]">
      <div class="p-4">
        <div class="flex items-center justify-between gap-2 mb-4">
          <div class="leading-none">
            <mj-text class="inline-flex items-center gap-2">
              <div class="w-5 h-5">
                <mj-campaign-icon />
              </div>
              <span class="text-lg font-extrabold">INT-0628</span>
            </mj-text>
            <mj-text type="secondary" class="block text-xxs">ID de campagne</mj-text>
          </div>
          <mj-text type="gray-500" class="w-4 h-4" tag="a" href="#!" hoverable>
            <mj-edit-icon />
          </mj-text>
        </div>

        <div class="h-[2.5rem] bg-inProgress rounded items-center justify-center flex select-none mb-2">
          <div class="text-xs font-bold text-white">En cours</div>
        </div>

        <mj-flex-centered>
          <div class="flex flex-col items-center gap-1 leading-none">
            <mj-text type="secondary" class="text-xxxs">Référence interne :</mj-text>
            <mj-text class="text-[0.8125rem] font-semibold">C-SESGN-6666</mj-text>
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
          <mj-text type="secondary" class="text-xxxs">Fiche campagne créée le 12/09/2020</mj-text>
        </div>
      </mj-card-footer>
    </mj-card>

    <mj-card class="my-4 w-[26.875rem]">
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
          hoverable
        >
          <div class="flex items-center gap-4">
            <div class="flex flex-col gap-4 flex-1">
              <div class="flex items-start justify-between gap-2">
                <div></div>
                <div class="text-right flex flex-col gap-1 leading-none">
                  <mj-text type="secondary" class="text-xxxs">Ref. interne :</mj-text>
                  <mj-text class="duration-150 group-hover_text-brand text-xs font-semibold">C-SESGN-33336</mj-text>
                </div>
              </div>
              <div class="flex items-start justify-between gap-2">
                <div></div>
                <div class="text-right flex flex-col gap-1 leading-none">
                  <mj-text type="secondary" class="text-xxxs">Date :</mj-text>
                  <mj-text class="duration-150 group-hover_text-brand text-xs font-semibold">28/08/2021</mj-text>
                </div>
              </div>
            </div>
            <mj-text class="duration-150 group-hover_text-brand" type="gray-500">
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

    <mj-card class="my-4 w-[26.875rem]">
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

    <mj-card class="w-[27.25rem] my-4">
      <div class="p-2">
        <div class="p-2 flex items-center gap-2">
          <mj-head-tag-counter :count="23" />
          <mj-text class="text-base leading-5 font-bold">Contact sur place</mj-text>
        </div>
        <mj-horizontal-border class="my-4" />
        <mj-flex-centered class="my-3" text-center>
          <mj-text class="block text-xxxs" type="secondary">SIRET :</mj-text>
          <mj-text class="block text-[0.8125rem] font-semibold" select type="normal">799999129932</mj-text>
        </mj-flex-centered>
        <mj-flex-centered class="my-3" text-center>
          <mj-text class="block text-xxxs" type="secondary">TVA Intracommunautaire :</mj-text>
          <mj-text class="block text-[0.8125rem] font-semibold" select>FR 795329 9129932</mj-text>
        </mj-flex-centered>
        <mj-flex-centered class="my-3" text-center>
          <mj-text class="block text-xxxs" type="secondary">Code client :</mj-text>
          <mj-text class="block text-[0.8125rem] font-semibold" select>990A</mj-text>
        </mj-flex-centered>
      </div>
      <mj-card-footer>
        <mj-add-button title="Ajouter un contact sur place" class="w-full" />
      </mj-card-footer>
    </mj-card>

    <mj-card class="my-4 p-4 w-[26.875rem]">
      <div class="flex items-center justify-between gap-4">
        <mj-text class="text-base font-bold">Notifications</mj-text>
        <div class="h-[1.875rem] flex items-center">
          <mj-text v-if="!editNotifications" type="gray-500" class="w-4 h-4" tag="a" href="#!" hoverable @click.prevent="editNotifications = !editNotifications">
            <mj-edit-icon />
          </mj-text>
        </div>
        <mj-process-button v-if="editNotifications" size="small" title="Mettre à jour" :loading="updatingNotifications" @click="fakeApiCall"></mj-process-button>
      </div>
      <div class="my-4">
        <mj-true-false-inline v-model="notifications.notifyClientOnCampaignPlanification" :editing="editNotifications" class="my-px" title="Informer le client de la planification du contrat" />
        <mj-true-false-inline v-model="notifications.notifyClientWhenAssignmentSchedules" :editing="editNotifications" class="my-px" title="Lorsque toutes les interventions seront planifiées" />
        <mj-true-false-inline v-model="notifications.notifyClientOnCampaignFinished" :editing="editNotifications" class="my-px" title="Informer le client de la fin du contrat" />
        <mj-true-false-inline v-model="notifications.notifyClientOnAssignmentFinished" :editing="editNotifications" class="my-px" title="Lorsque toutes les interventions seront terminées" />
        <mj-true-false-inline class="my-px" title="Définir une date personnalisée" :value="true" />
        <mj-field class="mt-3" label="Alert SMS + Email :">
          <div class="flex flex-wrap gap-2">
            <mj-tag>antoine.delorme@gmail.com</mj-tag>
            <mj-tag>0638953929</mj-tag>
          </div>
        </mj-field>
      </div>
    </mj-card>
  </div>
</template>

<script>
import MjCardFileList from './../partials/MjCardFileList.vue';

export default {
  name: 'Cards',
  components: {
    MjCardFileList
  },
  data() {
    return {
      updatingNotifications: false,
      editNotifications: false,
      notifications: {
        notifyClientOnCampaignPlanification: true,
        notifyClientWhenAssignmentSchedules: false,
        notifyClientOnCampaignFinished: true,
        notifyClientOnAssignmentFinished: true,
      },
      files: [
        {
          fileContentType: 'image/jpeg',
          fileName: 'bleu-de-gascogne.jpeg',
          fileUrl: 'https://mj-fleet-suez-staging.s3-eu-west-3.amazonaws.com/paperclip/attachments/files/000/148/254/original/bleu-de-gascogne.jpeg?1634046248',
          id: 148254,
          updatedAt: '2021-10-12T15:44:08.813+02:00',
          category: 'image',
          url: '/agency/s9/attachments/148254'
        },
        {
          fileContentType: 'image/jpeg',
          fileName: 'Lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit.-Modi-ducimus-eveniet-vero-iste,-soluta-quidem-sit-corrupti-magnam-dolore-illum-aliquid-tempora-veritatis,-voluptate-iure-nulla-in-corporis-id-laborum.base',
          fileUrl: 'https://mj-fleet-suez-staging.s3-eu-west-3.amazonaws.com/paperclip/attachments/files/000/148/254/original/bleu-de-gascogne.jpeg?1634046248',
          id: 148255,
          updatedAt: '2021-10-12T15:44:08.813+02:00',
          category: 'base',
          url: '/agency/s9/attachments/148254'
        },
        {
          fileContentType: 'image/jpeg',
          fileName: 'bleu-de-gascogne.pdf',
          fileUrl: 'https://mj-fleet-suez-staging.s3-eu-west-3.amazonaws.com/paperclip/attachments/files/000/148/254/original/bleu-de-gascogne.jpeg?1634046248',
          id: 148256,
          updatedAt: '2021-10-12T15:44:08.813+02:00',
          category: 'pdf',
          url: '/agency/s9/attachments/148254'
        },
        {
          fileContentType: 'image/jpeg',
          fileName: 'bleu-de-gascogne.mp4',
          fileUrl: 'https://mj-fleet-suez-staging.s3-eu-west-3.amazonaws.com/paperclip/attachments/files/000/148/254/original/bleu-de-gascogne.jpeg?1634046248',
          id: 148257,
          updatedAt: '2021-10-12T15:44:08.813+02:00',
          category: 'audio',
          url: '/agency/s9/attachments/148254'
        },
        {
          fileContentType: 'image/jpeg',
          fileName: 'bleu-de-gascogne.txt',
          fileUrl: 'https://mj-fleet-suez-staging.s3-eu-west-3.amazonaws.com/paperclip/attachments/files/000/148/254/original/bleu-de-gascogne.jpeg?1634046248',
          id: 148258,
          updatedAt: '2021-10-12T15:44:08.813+02:00',
          category: 'text',
          url: '/agency/s9/attachments/148254'
        },
        {
          fileContentType: 'image/jpeg',
          fileName: 'bleu-de-gascogne.map',
          fileUrl: 'https://mj-fleet-suez-staging.s3-eu-west-3.amazonaws.com/paperclip/attachments/files/000/148/254/original/bleu-de-gascogne.jpeg?1634046248',
          id: 148259,
          updatedAt: '2021-10-12T15:44:08.813+02:00',
          category: 'cartography',
          url: '/agency/s9/attachments/148254'
        },
        {
          fileContentType: 'image/jpeg',
          fileName: null,
          fileUrl: 'https://mj-fleet-suez-staging.s3-eu-west-3.amazonaws.com/paperclip/attachments/files/000/148/254/original/bleu-de-gascogne.jpeg?1634046248',
          id: 148260,
          updatedAt: '2021-10-12T15:44:08.813+02:00',
          category: 'other',
          url: '/agency/s9/attachments/148254'
        },
        {
          fileContentType: 'image/jpeg',
          fileName: 'bleu-de-gascogne.mpeg',
          fileUrl: 'https://mj-fleet-suez-staging.s3-eu-west-3.amazonaws.com/paperclip/attachments/files/000/148/254/original/bleu-de-gascogne.jpeg?1634046248',
          id: 148261,
          updatedAt: '2021-10-12T15:44:08.813+02:00',
          category: 'video',
          url: '/agency/s9/attachments/148254'
        }
      ]
    };
  },
  methods: {
    alert(message) {
      alert(message);
    },
    fakeApiCall() {
      this.updatingNotifications = true;
      setTimeout(() => {
        this.editNotifications = false;
        this.updatingNotifications = false;
      }, 3000);
    }
  }
};
</script>
