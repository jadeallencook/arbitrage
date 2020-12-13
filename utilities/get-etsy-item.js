import Item from '../classes/Item.js';

const getPhotos = () => {
  let photos = [];
  const items = document.querySelector('ul.carousel-pane-list').children;
  for (let item of items) {
    photos = [...photos, item.childNodes[1].src];
  }
  return photos;
};

const getProductId = () => Number(window.location.href.split('/')[4]);

const getProductTitle = () => document.querySelector('h1').innerText;

const getPrice = () =>
  Number(
    document
      .querySelector('p.wt-text-title-03.wt-mr-xs-2')
      .innerText.substring(1)
  );

const getDescription = () =>
  document.querySelector('#wt-content-toggle-product-details-read-more > p')
    .innerText;

const getEtsyItem = () => {
  const title = getProductTitle();
  const id = getProductId();
  const price = getPrice();
  const description = getDescription();
  const photos = getPhotos();
  return new Item({ title, id, price, description, photos });
};

export default getEtsyItem;
