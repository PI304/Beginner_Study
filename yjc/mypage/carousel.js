const carousel = document.querySelector('.carousel');
const carouselBtn1 = document.querySelector('.carouselBtn1');
const carouselBtn2 = document.querySelector('.carouselBtn2');
const carouselBtn3 = document.querySelector('.carouselBtn3');
const carouselBtn4 = document.querySelector('.carouselBtn4');
const carouselButtons = document.querySelectorAll('.carouselButtons');

carouselBtn1.addEventListener('click', function () {
	carousel.style.transform = 'translateX(0px)';
});
carouselBtn2.addEventListener('click', function () {
	carousel.style.transform = 'translateX(-100%)';
});
carouselBtn3.addEventListener('click', function () {
	carousel.style.transform = 'translateX(-200%)';
});
carouselBtn4.addEventListener('click', function () {
	carousel.style.transform = 'translateX(-300%)';
});

// for (i = 0; i < carouselButtons.length; i++) {
// 	carouselButtons[i].addEventListener('click', function () {
// 		let car = `${i} * -100`;
// 		console.log(car);
// 		carouselButtons[i].style.transform = `translateX(${car}%)`;
// 	});
// }
