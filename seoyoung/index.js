const button = document.querySelector(".menu1");

button.addEventListener("click", () => {
  const dropdown = document.querySelector(".dropdownmenu");
  dropdown.style.display = "block";
});

button.addEventListener("blur", () => {
  const dropdown = document.querySelector(".dropdownmenu");
  dropdown.style.display = "none";
});
