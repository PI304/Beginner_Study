const visitorsBook = document.querySelector('.visitorsBook');
const visitorsBookTitle = document.querySelector('#visitorsBookTitle');
const visitorsBookContent = document.querySelector('#visitorsBookContent');
const showVisitor = document.querySelector('.showVisitor');
const titleP = document.querySelector('.showVisitor p:nth-child(2)');
const visitorList = document.querySelector('.showVisitor div');
//form
const valueTitle = localStorage.getItem('visitorsBookTitle');
const valueContent = localStorage.getItem('visitorsBookContent');

visitorsBook.addEventListener('submit', function (event) {
	event.preventDefault();
	localStorage.setItem('visitorsBookTitle', visitorsBookTitle.value);
	localStorage.setItem('visitorsBookContent', visitorsBookContent.value);
	showVisitorsBook(visitorsBookTitle.value, visitorsBookContent.value);
	visitorsBookTitle.value = '';
	visitorsBookContent.value = '';
});

function showVisitorsBook(valueTitle, valueContent) {
	if (valueTitle !== null || valueContent !== null) {
		visitorList.innerText = `방명록`;
		titleP.innerText = `${valueTitle} - ${valueContent}`;
	}
}
showVisitorsBook(valueTitle, valueContent);
