class Item {
  constructor({ id, title, price, description, photos, freeShipping }) {
    this.id = id || 0;
    this.title = title || '';
    this.price = price || 0;
    this.description = description || '';
    this.photos = photos || [];
    this.posted = false;
    this.freeShipping = freeShipping || false;
  }
}

export default Item;
