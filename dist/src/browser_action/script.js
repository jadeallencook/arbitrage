(() => {
  const storage = chrome.storage.sync;
  const margin = 0.15;
  let averageProfit = 0;
  document.getElementById('clear').onclick = () => storage.clear();
  storage.get(null, (items) => {
    const keys = Object.keys(items);
    const ul = document.getElementById('items');
    keys.forEach((key) => {
      const li = document.createElement('li');
      const titleElem = document.createElement('h2');
      const priceElem = document.createElement('p');
      const shippingElem = document.createElement('p');
      const descriptionElem = document.createElement('textarea');
      const productLink = document.createElement('a');
      const item = items[key];
      const { title, price, description, photos, freeShipping } = item;
      const link = `https://www.etsy.com/listing/${key}`;
      let profit = price * margin;
      averageProfit += profit;
      titleElem.innerText = title;
      priceElem.innerText = `Etsy: $${price.toFixed(2)} | Suggested: $${(
        price * (1 + margin)
      ).toFixed(2)} | Profit: +$${profit.toFixed(2)}`;
      priceElem.classList.add('price');
      productLink.href = link;
      productLink.innerText = link;
      shippingElem.innerText = freeShipping ? 'Free Shipping!' : 'NO Free Shipping!';
      shippingElem.classList.add('shipping');
      descriptionElem.value = description;
      li.appendChild(titleElem);
      li.appendChild(productLink);
      li.appendChild(priceElem);
      li.appendChild(shippingElem);
      photos.forEach((photo) => {
        const imageElem = document.createElement('img');
        imageElem.src = photo;
        li.appendChild(imageElem);
      });
      li.appendChild(descriptionElem);
      ul.appendChild(li);
    });
    document.getElementById('average').innerText = `Average Profit: $${(
      averageProfit / keys.length
    ).toFixed(2)}`;
  });
})();
