const volumeCounter = document.querySelector('.volumeCounter');
const volumeLogo = volumeCounter.querySelector('i');
const volPlus = volumeCounter.querySelector('.plus');
const volMinus = volumeCounter.querySelector('.minus');
const result = volumeCounter.querySelector('#result');

//counter_dropdown{
function counterOnClick() {
	if (volumeCounter.classList.contains('onClick')) {
		volumeCounter.classList.remove('onClick');
	} else {
		volumeCounter.classList.add('onClick');
	}
}
//}

volumeLogo.addEventListener('click', counterOnClick);

//stepper 방법 1

//1. sound라는 변수(이 변수는 버튼을 클릭할 때 숫자가 바뀌어야 함)  check
//2. 클릭이 될 때 마다 숫자가 바뀌고 로컬스토리지에 저장됨,  check
//3. sound라는 변수는 volumeNum에 innerText로 들어가야하나  check

volPlus.addEventListener('click', plus);
volMinus.addEventListener('click', minus);

let sound = localStorage.getItem('volume');
result.innerText = `${sound}`;

function plus() {
	sound++;
	localStorage.setItem('volume', sound);
	result.innerText = `${sound}`;
}

function minus() {
	sound--;
	localStorage.setItem('volume', sound);
	result.innerText = `${sound}`;
}

//방법 2
// function count(type) {
// 	// 결과를 표시할 element
// 	// const resultElement = document.getElementById('result');

// 	// 현재 화면에 표시된 값
// 	let number = localStorage.getItem('volume');

// 	// 더하기/빼기
// 	if (type === 'plus') {
// 		number = parseInt(number) + 1;
// 		localStorage.setItem('volume', number);
// 	} else if (type === 'minus') {
// 		number = parseInt(number) - 1;
// 		localStorage.setItem('volume', number);
// 	}

// 	// 결과 출력
// 	resultElement.innerText = number;
// }
