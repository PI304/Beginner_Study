const accordion = document.querySelectorAll('.accordion');
const accordionCollapse = document.querySelectorAll('.accordionCollapse');

//accordion
function openAccordion(i) {
	accordion[i].addEventListener('click', function () {
		accordionCollapse[i].classList.toggle('active');
	});
}
openAccordion(0);
openAccordion(1);
