var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountries
	});
}

function showCountries(resp) {
	countriesList.empty();
	resp.forEach(function(item) {
		$('<li>').text(item.name).appendTo(countriesList);
		$('<span>').text(item.capital).appendTo(countriesList);
	});
}