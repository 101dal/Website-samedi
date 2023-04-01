function redirect(e) {
	xhttp = new XMLHttpRequest();
	xhttp.open("GET", e, true);
    xhttp.send();
	content.innerHTML = this.responseText;
}