const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const range = document.querySelector(".range");
const submit = document.querySelector(".submit_btn");

let num = 10;
range.innerHTML = num;

minus.addEventListener("click", () => {
  if (num > 0) {
    num--;
  }
  range.innerHTML = num;
});

plus.addEventListener("click", () => {
  if (num < 10) {
    num++;
  }
  range.innerHTML = num;
});

submit.addEventListener("click",()=>{
  //내용 서버로 넘기는 코드 작성 예정

  // 초기화
  num = 10;
  range.innerHTML = num;
});