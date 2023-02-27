const menu = document.querySelector('.menu');

// top이 아닌 다른것에 주어야 할 것 같은데,
// 스크롤을 할때 조금씩 밀림,
//Math.ceil(scrollTop / (document.body.scrollHeight - window.outerHeight) * 100);
//위의 식을 이용하면 난감한 숫자가 나옴.
//그래서 percent에 3 더해줌,
window.addEventListener('scroll', () => {
	scrollTop = document.documentElement.scrollTop;
	// console.log(scrollTop);
	let percent = Math.ceil((scrollTop / document.body.scrollHeight) * 100) + 2;
	console.log(percent);
	menu.style.top = `${percent}%`;
});
