import getEtsyItem from './utilities/get-etsy-item.js';
import buildEtsyUI from './utilities/build-etsy-ui.js';

const logError = () => alert('Feature not yet implemented...');

chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === 'complete') {
      clearInterval(readyStateCheckInterval);
      const href = window.location.href.split('/');
      const storage = chrome.storage.sync;
      if (href[2] === 'www.etsy.com' && href[3] === 'listing') {
        const item = getEtsyItem();
        storage.get(null, (result) => {
          const isStored = !!result[item.id];
          const { button } = buildEtsyUI();
          if (isStored) {
            button.innerText = 'Remove from Arbitrage';
            button.onclick = logError;
          } else {
            button.onclick = () => {
              storage.set(
                {
                  [item.id]: item,
                },
                () => {
                  button.innerText = 'Refresh to remove';
                  button.disabled = true;
                }
              );
            };
          }
        });
      }
    }
  }, 10);
});
