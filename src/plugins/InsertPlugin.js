import InsertManager from '../classes/InsertManager.js';
import MjOverlay from '../components/MjOverlay.vue';
import MjSidePanel from '../components/MjSidePanel.vue';
import MjDialog from '../components/MjDialog.vue';
import MjToast from '../components/MjToast.vue';
import MjSnackbar from '../components/MjSnackbar.vue';

// Order in insertTypes defines instantiation order in HTML
const insertTypes = {
  MjSidePanel: {
    dismissible: true,
    classes: 'pointer-events-auto'
  },
  MjDialog: {
    dismissible: true,
    classes: 'flex justify-center items-center pointer-events-auto'
  },
  MjSnackbar: {
    classes: 'flex justify-center'
  },
  MjToast: {
    classes: 'flex flex-col items-center'
  }
};
const components = [MjSidePanel, MjDialog, MjToast, MjSnackbar];

export default {
  install(Vue) {
    const manager = new InsertManager({
      inserts: components.reduce((a, v) => ({ ...a, [v.name]: Vue.extend(v) }), {}),
      defaultInsert: 'MjToast'
    });
    const OverlayClass = Vue.extend(MjOverlay);
    const overlay = new OverlayClass({
      propsData: { manager, insertTypes }
    });
    overlay.$mount();
    document.querySelector('body').appendChild(overlay.$el);

    Vue.prototype.$insertManager = manager;
  }
};
