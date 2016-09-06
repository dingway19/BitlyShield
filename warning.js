var requestedUrl = window.location.search.replace("?url=", "");
console.log(requestedUrl);
var xhr = new XMLHttpRequest();
xhr.onload = function(e) {
	console.log(e.target.getAllResponseHeaders());
}
xhr.onreadystatechange = function() {
	console.log(xhr);
	var redirectTo = xhr.getResponseHeader("X-Final-URL");
	document.getElementById("url").innerHTML = "<a href='" + redirectTo + "'>" + redirectTo + "</a>";
	document.getElementById("go").action = redirectTo;

};
xhr.open("GET", "https://cors-anywhere.herokuapp.com/" + requestedUrl, true);
xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
xhr.send(null);