//방명록 삭제
let postId;

const deletePost = (event) => {
	postId = event.target.parentElement.classList.value;
	console.log(postId);
	const li = event.target.parentElement;
	li.remove();

	delPost(postId);
};

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
	const li = document.createElement('li');
	const button = document.createElement('button');
	li.innerHTML = `${user.user.name} - ${user.content}`;
	button.innerHTML = `❌`;
	button.classList.add('delbtn');
	postId = user.id;
	li.classList.add(postId);
	li.appendChild(button);
	button.addEventListener('click', deletePost);

	return li;
};

const getPostInfo = (postInfo) => {
	const showVisitorsBook = document.querySelector('.showVisitorsBook');
	postInfo.forEach((user) =>
		showVisitorsBook.appendChild(createPVititor(user))
	);
};

//방명록 작성하기
const UserName = document.querySelector('#UserName');
const visitorsBookContent = document.querySelector('#visitorsBookContent');
const visitorsBook = document.querySelector('.visitorsBook');

let postsInfo;

const addPostInfo = (event) => {
	event.preventDefault();

	let userName = UserName.value;
	let content = visitorsBookContent.value;

	postsInfo = {
		userName: userName,
		content: content,
		toUser: 'yjc',
	};

	console.log(postsInfo);

	addPost();

	userName = '';
	content = '';
};
visitorsBook.addEventListener('submit', addPostInfo);

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
};

const getpost = async () => {
	axios
		//왼쪽 사이드바에 뜨는 방명록 불러오기
		.get('http://52.78.238.141/api/posts/')
		.then((res) => {
			const postInfo = res.data;
			console.log(postInfo);
			getPostInfo(postInfo);
		})
		.catch((error) => console.log(error));
};

const addPost = async () => {
	axios
		//방명록 남기기
		.post('http://52.78.238.141/api/posts/', postsInfo)
		.then((res) => {
			console.log(res);
		})
		.catch((error) => console.log(error));
};

const delPost = async (postId) => {
	axios
		//방명록 삭제
		.delete(`http://52.78.238.141/api/posts/${postId}`)
		.then((res) => {
			console.log(res);
		})
		.catch((error) => console.log(error));
};
getData();
getpost();
