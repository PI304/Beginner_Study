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
