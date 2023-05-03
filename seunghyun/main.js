// // 모달창 만들기

// const modal = document.getElementById("modal");
// const openModalBtn = document.getElementById("openModal");
// const closeModalBtn = document.getElementById("closeModal");

// // 모달창 열기 
// openModalBtn.addEventListener("click", () => {
//     modal.style.display = "block";
//     document.body.style.overflow = "hidden";
// });

// // 
// closeModalBtn.addEventListener("click", () => {
//     modal.style.display = "none";
//     document.body.style.overflow = "auto";
// });
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



// 스텝퍼

let countNum = document.querySelector(".countNumber");
let buttonWrap = document.querySelector(".countButtonWrap");

buttonWrap.addEventListener("click", (a) => {
    if (a.target.classList.contains("plus")) {
        countNum.innerHTML++;
        //증가
    }
    if (a.target.classList.contains("minus")) {
        countNum.innerHTML--;
        //감소
    }
    if (a.target.classList.contains("reset")) {
        countNum.innerHTML = 0;
        //리셋
    }
    
    //음수일 경우 색상 변경
    if (countNum.innerHTML < 0) {
        countNum.style.color = "#f66555"
    } else {
        countNum.style.color = "#ffffff"
    }
});

// 툴팁 입니다

window.onload=function(){

  // selecting the elements for which we want to add a tooltip
  const target = document.getElementById("tooltip-img");
  const tooltip = document.getElementById("tooltip-text");
  
  // change display to 'block' on mouseover
  target.addEventListener('mouseover', () => {
    tooltip.style.display = 'block';
  }, false);
  
  // change display to 'none' on mouseleave
  target.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  }, false);
  
  }