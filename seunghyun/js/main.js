// const { default: axios } = require("axios");


// 스크롤 이벤트 리스너 등록
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY; // 현재 스크롤 위치

  // Education 아래에 있는 요소들이 모두 로드된 경우에만 실행
  if (scrollPosition >= document.querySelector('.profile').offsetTop) {
    // 검은색 배경을 가진 새로운 div 요소 생성
    var newDiv = document.createElement('div');
    newDiv.classList.add('black-background');
    document.body.appendChild(newDiv);

    // 글씨 색상 변경
    document.querySelector('.profile h2').style.color = 'white';
    document.querySelector('.profile p').style.color = 'white';
  } else {
    // 스크롤 위치가 Education 아래에 있지 않으면 검은색 배경이 나오지 않게 함
    var blackBackground = document.querySelector('.black-background');
    if (blackBackground) {
      blackBackground.remove();
    }

    // 글씨 색상 원래대로 변경
    document.querySelector('.profile h2').style.color = '';
    document.querySelector('.profile p').style.color = '';
  }
});

  // 햄버거 버튼 클릭 이벤트 처리
  const hamBtn = document.querySelector('.ham-btn');
  const menuArea = document.querySelector('.menu-area');
  const closeBtn = document.querySelector('.close-btn');
  const grayBg = document.querySelector('.gray-bg');
  
  hamBtn.addEventListener('click', () => {
    menuArea.classList.add('open');
    grayBg.classList.add('show');
  });
  
  closeBtn.addEventListener('click', () => {
    menuArea.classList.remove('open');
    grayBg.classList.remove('show');
  });
  
  grayBg.addEventListener('click', () => {
    menuArea.classList.remove('open');
    grayBg.classList.remove('show');
  });

// 모달창
window.onload = function () {

  function onClick() {
      document
          .querySelector('.modal_wrap')
          .style
          .display = 'block';
      document
          .querySelector('.black_bg')
          .style
          .display = 'block';
  }
  function offClick() {
      document
          .querySelector('.modal_wrap')
          .style
          .display = 'none';
      document
          .querySelector('.black_bg')
          .style
          .display = 'none';
  }

  document
      .getElementById('modal_btn')
      .addEventListener('click', onClick);
  document
      .querySelector('.modal_close')
      .addEventListener('click', offClick);

};

//아코디언
let acc = document.querySelectorAll(".accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// 중간 드롭다운 
function dp_menu() {
    let click = document.getElementById("drop-content");
    if(click.style.display === "none"){
      click.style.display = "block";

  }else{
      click.style.display = "none";

  }
}



// 툴팁 입니다

window.onload=function(){

  // selecting the elements for which we want to add a tooltip
  const target = document.getElementById("tooltip-img");
  const tooltip = document.getElementById("tooltip-text");

  // target 요소에 이벤트 리스너를 연결합니다.
  target.addEventListener('mouseover', () => {
    tooltip.style.display = 'block';
  });

  target.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
}

const getData = async () => {
  try {
    // 유저 정보 가져오기 
    const res = await axios.get(`http://52.78.238.141/api/users`);
    const users = res.data;
    console.log(users);

    // 새 유저 생성
    const createRes = await axios
    .post(`http://52.78.238.141/api/users`, {
      name: "new user",
      email: "newuser@example.com"
    });
    const newUser = createRes.data;
    console.log(newUser);
  } catch (error) {
    console.log(error);
  }
};

getData();

// userId 가져오기
const getUserById = async (userId) => {
  try {
    const response = await axios
    .get(`http://52.78.238.141/api/users/${userId}`)
    const user = response.data;
    console.log(user);

    const updateResponse = await axios
    .patch(`http://52.78.238.141/api/users/${userId}`)
    const updateUser = updateResponse.data;
    console.log(updateUser);

    const deleteResponse = await axios
    .delete(`http://52.78.238.141/api/users/${userId}`);
    console.log(deleteResponse.data);
  } catch (error) {
    console.log(error);
  }
};

getUserById();

// Post 가져오기
const getUserByPost = async () => {
  try {
    const response = await axios
    // get 
    .get(`http://52.78.238.141/api/posts/`)
    const post = response.data;
    console.log(post);

    // post 생성
    const newPost = {
      title: "New Post",
      body: "New Post Body",
      userId: 1,
    };
    const createResponse = await axios
    .post(`http://52.78.238.141/api/posts/`)
    const createdPost = createResponse.data;
    console.log(createPost);

    // patch로 posrt 업데이트 
    const updatePost = {
      title: "Update Post",
      body: "Updated Post Body",
      userId: 2,
    };
    const patchResponse = await axios
    .patch(`http://52.78.238.141/api/posts/${postId}`)
    const patchPost = patchResponse.data;
    console.log(patchPost);

    // delete
    const deleteResponse = await axios
    .delete(`http://52.78.238.141/api/posts/${postId}`);
    console.log(deleteResponse.data);
  } catch (error) {
    console.log(error);
  }
};

getUserByPost();