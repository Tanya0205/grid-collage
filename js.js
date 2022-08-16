const cells = document.querySelectorAll(".photo");

cells.forEach((el) => {
  el.addEventListener("click", () => {
    cells.forEach((fl) => {
      fl.classList.remove("active");
    });
    el.classList.add("active");
  });
});
