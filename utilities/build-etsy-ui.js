import getEtsyItem from './get-etsy-item.js';

const buildEtsyUI = () => {
  const button = document.createElement('button');
  const container = document.querySelector('#variations');
  button.classList.add('wt-btn');
  button.classList.add('wt-btn--filled');
  button.classList.add('wt-width-full');
  button.innerText = 'Arbitrage';
  button.style.marginTop = '15px';
  container.appendChild(button);
  return { button };
};

export default buildEtsyUI;
