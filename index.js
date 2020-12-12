import getEtsyItem from './utilities/get-etsy-item.js';

chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === 'complete') {
      clearInterval(readyStateCheckInterval);
      console.log(getEtsyItem());
    }
  }, 10);
});