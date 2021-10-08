let config = {
  defaultToastDuration: 2000,
  defaultToastPosition: null,
};

export { config as default };
export let VueInstance;

export const setOptions = (options) => {
  config = options;
};

export const setVueInstance = (Vue) => {
  VueInstance = Vue;
};
