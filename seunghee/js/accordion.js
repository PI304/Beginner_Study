const accordion = document.getElementsByClassName("accordion");
let i;
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    let j;
    for (j = 0; j < accordion.length; j++) {
      const panels = accordion[j].nextElementSibling;
      panels.style.maxHeight = null;
      accordion[j].classList.remove("active");
    }
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.classList.remove("active");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.classList.add("active");
    }
  });
}
