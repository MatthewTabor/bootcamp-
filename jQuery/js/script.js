var span = $("span");
	span.each(function(index, element) {

		if((index + 1) % 2 == 0) { //jak ma być parzyste to teraz jest parzyste :D
			$(element).css('color', 'red');
		};
	});

var paragraphs = $("p");
	paragraphs.each(function(index, element) {

		var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
		$(element).append(button)
	});

$("button").click(function(){

	alert($(this).attr("data-tmp"));
});