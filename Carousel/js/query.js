$(function(){

	var carouselList = $("#carousel ul");

var interval = setInterval(slideImg, 3000);

$('.rightBtn').click(function(){
	slideImg();
	clearInterval(interval);
});

$('.leftBtn').click(function(){
	slideImgBack();
	clearInterval(interval);
});

$('.resetInt').click(function(){
	setInterval(slideImg, 3000);
});

function slideImg() {

	carouselList.animate({'marginLeft': -400}, 700, moveFirstSlide);
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

});


