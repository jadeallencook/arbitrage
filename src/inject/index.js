import { getEtsyItem } from '../../utilities/get-etsy-item';

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		console.log(getEtsyItem());

	}
	}, 10);
});