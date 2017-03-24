var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
    maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];



var allNames = maleNames.concat(femaleNames);
var newName = 'Marian';


if(allNames.indexOf(newName) === -1) {

	allNames.push(newName);

  } else {

		console.log('coś nie pykło');

  }