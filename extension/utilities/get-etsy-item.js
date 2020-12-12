import Item from '../classes/Item.js';

const getEtsyItem = () => {
  const title = document.querySelector('h1').innerText;
  const id = Number(window.location.href.split('/')[4]);
  const price = Number(
    document
      .querySelector('p.wt-text-title-03.wt-mr-xs-2')
      .innerText.split('\n')[1]
      .substring(1)
  );
  const description = document.querySelector(
    '#wt-content-toggle-product-details-read-more > p'
  ).innerText;
  return new Item({ title, id, price, description });
};

export default getEtsyItem;
