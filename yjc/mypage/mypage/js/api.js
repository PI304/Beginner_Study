// 모달창에 뜨는 유저 정보
const createUserInfoDiv = (user) => {
	const div = document.createElement('div');
	div.innerHTML = `${user.email}, ${user.introduction}`;

	return div;
};

const createDivUser = (user) => {
	const div = document.createElement('div');
	div.innerHTML = `${user.name}`;
	div.classList.add('userinfo');
	div.appendChild(createUserInfoDiv(user));

	return div;
};

const appendToModal = (users) => {
	const visitor = document.querySelector('.visitor');
	users.forEach((user) => visitor.appendChild(createDivUser(user)));
};

//왼쪽 사이드바에 뜨는 방명록 불러오기
const createPVititor = (user) => {
	const paragraph = document.createElement('p');
	paragraph.innerHTML = `${user.user.name} - ${user.content}`;
	// console.log(paragraph);

	return paragraph;
};

const getPostInfo = (postInfo) => {
	const showVisitor = document.querySelector('.showVisitor');
	postInfo.forEach((user) => showVisitor.appendChild(createPVititor(user)));
};

//방명록 작성하기
const UserName = document.querySelector('#UserName');
const visitorsBookContent = document.querySelector('#visitorsBookContent');
const visitorsBook = document.querySelector('.visitorsBook');

let postsInfo;

const addPost = (event) => {
	event.preventDefault();

	let userName = UserName.value;
	let content = visitorsBookContent.value;

	postsInfo = {
		userName: userName,
		content: content,
		toUser: 'yjc',
	};

	console.log(postsInfo);

	userName = '';
	content = '';
};
visitorsBook.addEventListener('submit', addPost);

const getData = async () => {
	axios
		//모달창에 뜨는 유저 정보
		.get('http://52.78.238.141/api/users')
		.then((res) => {
			const users = res.data;
			// console.log(users);
			appendToModal(users);
		})
		.catch((error) => console.log(error));

	axios
		//왼쪽 사이드바에 뜨는 방명록 불러오기
		.get('http://52.78.238.141/api/posts/')
		.then((res) => {
			const postInfo = res.data;
			console.log(postInfo);
			getPostInfo(postInfo);
		})
		.catch((error) => console.log(error));

	// axios
	// 	//방명록 남기기
	// 	.post('http://52.78.238.141/api/posts/', postsInfo)
	// 	.then((res) => {
	// 		console.log(res);
	// 	})
	// 	.catch((error) => console.log(error));
};

getData();
