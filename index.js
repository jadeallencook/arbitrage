import getEtsyItem from './utilities/get-etsy-item.js';
import buildEtsyUI from './utilities/build-etsy-ui.js';

chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === 'complete') {
      clearInterval(readyStateCheckInterval);
      const href = window.location.href.split('/');
      if (href[2] === 'www.etsy.com' && href[3] === 'listing') {
        const { button } = buildEtsyUI();
        button.onclick = () => console.log(getEtsyItem());
      }
    }
  }, 10);
});
