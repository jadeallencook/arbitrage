class Item {
  constructor({ id, title, price, description, photos }) {
    this.id = id || 0;
    this.title = title || '';
    this.price = price || 0;
    this.description = description || '';
    this.photos = photos || [];
  }
}

export default Item;
