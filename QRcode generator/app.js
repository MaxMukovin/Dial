window.addEventListener("DOMContentLoaded", init);

function init() {

	var style = document.createElement("style");
	document.body.appendChild(style);
	style.appendChild(document.createTextNode("img {width: 20px; transition: all .3s; cursor: none; opacity: 0.3; display: none} \
	img:hover {width: 250px; opacity: 1; padding: 20px; background: white} canvas {display: none}"))

	var block = document.createElement("div");
	document.body.appendChild(block);
	block.id = "qrcode";
	block.style.position = "absolute";
	block.style.top = "10px";
	block.style.right = "10px";
	block.style.position = "fixed";

	var qrcode = new QRCode(document.getElementById("qrcode"), {
		width : 250,
		height : 250
	});

	makeCode();

	block.title = "";

	function makeCode () {
		qrcode.makeCode(window.location.href);
	}
}
