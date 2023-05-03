const form = document.getElementById("form");
const afterSubmit = document.querySelector(".after_submit");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thank you!");
});
