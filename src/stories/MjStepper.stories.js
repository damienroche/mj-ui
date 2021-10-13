import MjStepper from './../components/MjStepper.vue';
import MjStep from './../components/MjStep.vue';
import MjText from './../components/MjText.vue';
import MjButton from './../components/MjButton.vue';

export default {
  component: MjStepper,
  title: 'Containers/MjStepper',
  parameters: {
    docs: {
      description: {
        component: 'MjStepper must be used with MjStep components inside (see "show code" as an example). header slot-scope can access to { currentStep, end } footer slot-scope can access to { currentStep, end, goNext, goPrevious, currentIndex, count } in order to implement pagination logic.',
      },
    },
  }
};

export const Default = (args, { argTypes }) => ({
  components: { MjStepper, MjStep, MjText, MjButton },
  props: Object.keys(argTypes),
  template: `
    <mj-stepper v-bind="$props">
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
  `,
});
