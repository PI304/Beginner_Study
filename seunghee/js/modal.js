const modal = document.querySelector(".modal_container");
const body = document.querySelector("body");
const mql = window.matchMedia("screen and (max-width: 800px)");

handleOrientationChange(mql);

function handleOrientationChange(mm) {
  if (mm.matches) {
    modal.classList.add("remove");
    body.style.overflow = "auto";
  } else {
    body.style.overflow = "hidden";
    setTimeout(() => {
      modal.classList.add("remove");
      body.style.overflow = "auto";
    }, 3000);
  }
}
