var a = prompt('Wprowadź liczbę a'),
    h = prompt('Wprowadź liczbę h');

function getTriangleArea(a, h) {
	
	if(a >= 0 && h >= 0) {
		
		return(a*h/2);
			
	  } else {

		console.log('Nieprawidłowe dane');
		
	  }
  }

console.log('Pole trójkąta dla wprowadzonych liczb wynosi: ' + getTriangleArea(a,h));

var triangleArea1 = getTriangleArea(10,15);

    triangleArea2 = getTriangleArea(10,6);

    triangleArea3 = getTriangleArea(8, 10);