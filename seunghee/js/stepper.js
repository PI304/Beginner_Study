const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const range = document.querySelector(".range");

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
