export default class InsertManager {
  constructor() {
    this.items = {};
    this.stagedItems = [];
  }

  register(item) {
    this.items[item.id] = { ...item };
  }

  destroy(itemId) {
    this.hide(itemId);
    delete this.items[itemId];
  }

  show(itemId, props = {}) {
    if (!this.items[itemId] || this.stagedItems.includes(itemId)) {
      return;
    }
    this.stagedItems.push(itemId);
    this.items[itemId].vNode.slotProps = props;
  }

  hide(itemId) {
    if (!this.items[itemId] || !this.stagedItems.includes(itemId)) {
      return;
    }
    this.stagedItems.splice(this.stagedItems.indexOf(itemId), 1);
  }
}
