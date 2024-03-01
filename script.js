const slide = document.querySelectorAll(".slide");

slide.forEach((element) => {
  element.addEventListener("click", () => {
    clear();
    element.classList.add("isActive");
  });
});

function clear() {
  slide.forEach((element) => {
    element.classList.remove("isActive");
  });
}
