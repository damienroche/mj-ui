import InsertManager from '../classes/InsertManager.js';
import MjOverlay from '../components/MjOverlay.vue';

export default {
  install(Vue) {
    const OverlayClass = Vue.extend(MjOverlay);
    const manager = new InsertManager();
    const overlay = new OverlayClass({
      propsData: { manager }
    });
    overlay.$mount();
    document.querySelector('body').appendChild(overlay.$el);

    Vue.prototype.$insertManager = manager;
  }
};
