export const removeElement = (el) => {
  if (typeof el.remove !== 'undefined') {
    el.remove();
  } else if (typeof el.parentNode !== 'undefined' && el.parentNode !== null) {
    el.parentNode.removeChild(el);
  }
};

/**
 * Merge function to replace Object.assign with deep merging possibility
 */
const isObject = (item) => typeof item === 'object' && !Array.isArray(item);
const mergeFn = (target, source, deep = false) => {
  if (deep || !Object.assign) {
    const isDeep = (prop) =>
      isObject(source[prop]) &&
      target !== null &&
      target.hasOwnProperty(prop) && // eslint-disable-line
      isObject(target[prop]);
    const replaced = Object.getOwnPropertyNames(source)
      .map((prop) => ({ [prop]: isDeep(prop)
        ? mergeFn(target[prop], source[prop], deep)
        : source[prop] }))
      .reduce((a, b) => ({ ...a, ...b }), {});

    return {
      ...target,
      ...replaced
    };
  }

  return Object.assign(target, source);
};

export const merge = mergeFn;
