import Item from '../classes/Item.js';

const getPhotos = () => {
  let photos = [];
  const items = document.querySelector('ul.carousel-pane-list').children;
  for (let item of items) {
    const { src } = item.childNodes[1];
    if (src && (src.indexOf('jpg') !== -1 || src.indexOf('jpeg') !== -1)) {
      photos = [...photos, src];
    }
  }
  return photos;
};

const getProductId = () => Number(window.location.href.split('/')[4]);

const getProductTitle = () => document.querySelector('h1').innerText;

const getPrice = () =>
  Number(
    document
      .querySelector('p.wt-text-title-03')
      .innerText.replace(/[^\d.-]/g, '')
  );

const getShipping = () =>
  !!document.querySelectorAll('p.wt-text-caption.wt-position-relative')[1];

const getDescription = () => {
  if (document.querySelector('[data-id="description-text"')) {
    return document.querySelector('[data-id="description-text"').innerText;
  } else if (
    document.querySelector('#wt-content-toggle-product-details-read-more > p')
  ) {
    return document.querySelector(
      '#wt-content-toggle-product-details-read-more > p'
    ).innerText;
  } else {
    return 'No description available';
  }
};

const getEtsyItem = () => {
  const title = getProductTitle();
  const id = getProductId();
  const price = getPrice();
  const description = getDescription();
  const photos = getPhotos();
  const freeShipping = getShipping();
  return new Item({ title, id, price, description, photos, freeShipping });
};

export default getEtsyItem;
