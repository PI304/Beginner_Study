const dropD = document.querySelector('.dropD');
const dropdown = document.querySelector('.dropdown');
const dropdownBtn = document.querySelector('.dropdownBtn');

//dropdown
dropD.addEventListener('click', function () {
	if (dropdownBtn.classList.contains('active')) {
		dropdownBtn.classList.remove('active');
	} else {
		dropdownBtn.classList.add('active');
	}
});

// 처음 만든 드롭다운
// dropdownBtn.onclick = dropdownBtnClick;
// function dropdownBtnClick() {
// 	if (dropdown.style.display === 'block') {
// 		dropdown.style.display = 'none';
// 	} else {
// 		dropdown.style.display = 'block';
// 	}
// }

//두번째로 만든 드롭다운
// dropdownBtn.addEventListener('click', function () {
// 	this.classList.toggle('active');
// });
