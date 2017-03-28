var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var index = document.getElementsByTagName('li').length;
	list.innerHTML += '<li> item ' + index + '</li>';
	fixit++;
	
});