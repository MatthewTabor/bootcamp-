var levelNumber;
function rysujChoinke(levelNumber) {

	for(var x = 1; x < levelNumber+1; x++) {

		var star = '';

			for(var n = x; n <= (x*2-1); n++) {

				 star += '*';
			}

		console.log(star);
	}
}