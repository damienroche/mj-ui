<template>
  <div>
    <mj-card class="my-4 p-4 w-[430px]">
      <h2 class="text-navy dark_text-white font-semibold mb-4">Formulaire</h2>
      <form @submit.prevent="submitForm">
        <!-- <fieldset disabled>  -->
        <fieldset>
          <legend>Fieldset</legend>
          <mj-field class="my-2" label="Valeurs multiples">
            <mj-select v-model="selectValues" :options="selectOptions" multiple></mj-select>
          </mj-field>
          <mj-field class="my-2" label="Valeur unique">
            <mj-select v-model="selectValue" :options="selectOptions"></mj-select>
          </mj-field>
          <mj-field class="my-2" label="Chargement">
            <mj-select v-model="selectValue" :options="selectOptions" loading></mj-select>
          </mj-field>
          <mj-field class="my-2" label="Désactivé">
            <mj-select v-model="selectValues" :options="selectOptions" disabled multiple></mj-select>
          </mj-field>

          <mj-checkbox />
          <mj-radio type="brand" />
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
        </fieldset>
      </form>
      <!-- <mj-checkbox-group
        name="example"
        v-model="check"
        :options="[
          { key: 'key_1', title: 'Option 1'},
          { key: 'key_2', title: 'Option 2'},
          { key: 'key_3', title: 'Option 3'}
        ]"
      /> -->
    </mj-card>
  </div>
</template>

<script>
export default {
  name: 'Forms',
  data() {
    return {
      selectValue: null,
      selectValues: [],
      selectOptions: ['list', 'of', 'Quo sunt omnis accusamus alias odit quam, ex a ut non debitis, iste distinctio excepturi voluptas iusto aperiam placeat quas, quibusdam velit'
      ]
    };
  },
};
</script>
