const closeBtn = document.querySelector('.close');
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('#modalBtn');

//modal
closeBtn.onclick = function () {
	modal.style.display = 'none';
};
modalBtn.onclick = function () {
	modal.style.display = 'block';
};
