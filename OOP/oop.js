function Telefon(producent, price, color) {
	this.producent = producent,
	this.price = price,
	this.color = color
}

Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.producent + ", w kolorze " + this.color + ", w cenie " + this.price ".");
}

var galaxyS6 = new Telefon("Samsung", 3000, "white");
var iPhone6s = new Telefon("Apple", 3200, "silver");
var onePlus = new Telefon("OnePlus", 2200, "black");

Telefon.prototype.turnOn = function() {
	var determine = this.producent;

	if(determine == "OnePlus") {
		console.log("Bzzzzt - blue screen of death");
	} else {
		console.log(this.producent + " witamy w funkcjonalności");
	}
}