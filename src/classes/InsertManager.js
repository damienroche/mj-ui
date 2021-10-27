export default class InsertManager {
  constructor({ inserts, defaultInsert }) {
    this.items = {};
    this.stagedItems = [];
    this.inserts = inserts;
    this.id = 0;
    this.defaultInsert = defaultInsert;
  }

  register(item) {
    this.items[item.id] = { ...item };
  }

  destroy(itemId) {
    this.hide(itemId);
    delete this.items[itemId];
  }

  show(itemId, props = {}) {
    if (!this.items[itemId]) {
      return;
    }
    this.items[itemId].vNode.slotProps = props;
    if (this.stagedItems.includes(itemId)) {
      if (this.items[itemId].onUpdate) {
        this.items[itemId].onUpdate();
      }

      return;
    }
    this.stagedItems.push(itemId);
    if (this.items[itemId].onShow) {
      this.items[itemId].onShow();
    }
  }

  hide(itemId) {
    if (!this.items[itemId] || !this.stagedItems.includes(itemId)) {
      return;
    }
    if (this.items[itemId].onHide) {
      this.items[itemId].onHide();
    }
    this.stagedItems.splice(this.stagedItems.indexOf(itemId), 1);
  }

  stages(itemId) {
    return this.stagedItems.includes(itemId);
  }

  generate({ id, type = 'MjToast', props = {}, slots = {} }) {
    if (!id) {
      id = `${type}-${this.id}`;
      this.id++;
    }
    const item = new this.inserts[type]({
      propsData: {
        ...props,
        id
      }
    });
    item.$slots = slots;
    item.$mount();
    document.querySelector('body').appendChild(item.$el);

    return id;
  }

  deploy(args, props) {
    const itemId = this.generate(args);
    this.show(itemId, props);

    return itemId;
  }
}
