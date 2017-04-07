$(function(){

	var carouselList = $("#carousel ul");

var interval = setInterval(slideImg, 3000);

$('.rightBtn').click(function(){
	slideImg();
	clearInterval(interval);
	activeIndicator();
});

$('.leftBtn').click(function(){
	slideImgBack();
	clearInterval(interval);
	reverseIndicator();
});

$('.resetInt').click(function(){
	setInterval(slideImg, 3000);
	activeIndicator();
});

function slideImg() {

	carouselList.animate({'marginLeft': -400}, 700, moveFirstSlide);
	activeIndicator();
}

function slideImgBack() {

	moveLastSlide();
	carouselList.animate({'marginLeft': 0}, 700);
}

function moveFirstSlide() {

	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");

	lastItem.after(firstItem);
	carouselList.css({"marginLeft":0});
}

function moveLastSlide() {

	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");

	firstItem.before(lastItem);
	carouselList.css({"marginLeft": -400});
}

var indicateList = $('#indicate');

function activeIndicator() {

	var firstItem = indicateList.find("li:first");
	var lastItem = indicateList.find("li:last");

	$(".active").next().addClass("active");
	$(".active").prev().removeClass("active");

	lastItem.after(function(){
		$("li").first().addClass("active");
		$("li").last().removeClass("active");
	});

}

function reverseIndicator() {

	var firstItem = indicateList.find("li:first");
	var lastItem = indicateList.find("li:last");

	$(".active").prev().addClass("active");
	$(".active").next().removeClass("active");

}

});


