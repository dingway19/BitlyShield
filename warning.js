var requestedUrl = window.location.search.replace("?url=", "");
console.log(requestedUrl);
var xhr = new XMLHttpRequest();
xhr.onload = function(e) {
	console.log(e.target.getAllResponseHeaders());
}
xhr.onreadystatechange = function() {
	console.log(xhr);
	document.getElementById("url").innerHTML = requestedUrl;
};
xhr.open("GET", requestedUrl, true);
xhr.send(null);