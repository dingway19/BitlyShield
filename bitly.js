var x = function(details) {
	console.log(details);
	return {"redirectUrl": chrome.extension.getURL("warning.html") + "?url=" + details.url};
};

chrome.webRequest.onBeforeRequest.addListener(x, {"urls":["*://bit.ly/*"]}, ["blocking"]);