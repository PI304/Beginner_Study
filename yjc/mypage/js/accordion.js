const accordion = document.querySelectorAll('.accordion');
const accordionCollapse = document.querySelectorAll('.accordionCollapse');

//accordion
function openAccordion(i) {
	accordion[i].addEventListener('click', function () {
		accordionCollapse[i].classList.toggle('clicked');
	});
}
for (i = 0; i < accordionCollapse.length; i++) {
	openAccordion(i);
}
