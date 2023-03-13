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
	//모달창에 뜨는 유저 정보
	const res = await axios
		.get('http://52.78.238.141/api/users')
		.catch((error) => console.log(error));
	const users = res.data;
	appendToModal(users);
};

const getpost = async () => {
	//왼쪽 사이드바에 뜨는 방명록 불러오기
	const res = await axios
		.get('http://52.78.238.141/api/posts/')
		.catch((error) => console.log(error));
	const postInfo = res.data;
	console.log(postInfo);
	getPostInfo(postInfo);
};

const addPost = async () => {
	//방명록 남기기
	const res = await axios
		.post('http://52.78.238.141/api/posts/', postsInfo)
		.catch((error) => console.log(error));
	console.log(res);
};

const delPost = async (postId) => {
	//방명록 삭제
	const res = await axios
		.delete(`http://52.78.238.141/api/posts/${postId}`)
		.catch((error) => console.log(error));
	console.log(res);
};
getData();
getpost();
