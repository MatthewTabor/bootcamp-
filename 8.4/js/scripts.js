var a = prompt('Wpisz liczbę a'),
	b = prompt('Wpisz liczbę b'),
	value = (a * a) + (2 * a * b) - (b * b);

console.log('Wynik działania "(a * a) + (2 * a * b) - (b * b)" to: ' + value);

if (value > 0) {
	console.log('Wynik jest dodatni');
} else {
	console.log('Wynik jest ujemny');
}

if (value == 0) {
	console.log('Wynik równa się 0');
} else {
	console.log('Wynik jest liczbą inną niż zero');
}