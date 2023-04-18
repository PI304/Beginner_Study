const modal = document.querySelector(".modal_container");
const body = document.querySelector("body");
var mm = window.matchMedia("screen and (max-width: 800px)");
if (!mm.matches) {
  body.style.overflow = "hidden";
  setTimeout(() => {
    modal.classList.add("remove");
    body.style.overflow = "auto";
  }, 3000);
}
