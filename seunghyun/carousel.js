//  캐러셀입니다

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter =1;
const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// 버튼
nextBtn.addEventListener("click", () => {
  if (counter === carouselImages.length - 1) return;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// 슬라이드 이동

carouselSlide.addEventListener("transitionend", () => {
  console.log(carouselImages[counter]);
  if (carouselImages[counter].id === 'lastClone'){
    carouselSlide.style.transition = 'none'; // 트랜지션 효과 없애기
    counter = carouselImages.length -2; // couter 초기화
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; // 실제 마지막 이미지로 이동.
  } else if (carouselImages[counter].id === 'firstClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - counter; // couter 초기화
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});
