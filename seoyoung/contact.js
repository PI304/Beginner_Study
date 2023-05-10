// 모달 열기
function modalOpen() {
  document.querySelector('.modal_wrap').style.display = 'block';
  document.querySelector('.modal_background').style.display = 'block';
}

// 모달 끄기
function modalClose() {
  document.querySelector('.modal_wrap').style.display = 'none';
  document.querySelector('.modal_background').style.display = 'none';
}

//버튼 클릭리스너 달기
document.querySelector('.modal_btn').addEventListener('click', modalOpen);
document.querySelector('.modal_close').addEventListener('click', modalClose);

