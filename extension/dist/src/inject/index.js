(()=>{"use strict";chrome.extension.sendMessage({},(function(e){var t=setInterval((function(){if("complete"===document.readyState){clearInterval(t);const e=window.location.href.split("/");"www.etsy.com"===e[2]&&"listing"===e[3]&&console.log(!0)}}),10)}))})();