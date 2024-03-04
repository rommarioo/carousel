function isStart(numSlide) {
  const slides = document.querySelectorAll(".slide");

  slides[numSlide].classList.add("isActive");

  slides.forEach((element) => {
    element.addEventListener("click", () => {
      clear();
      element.classList.add("isActive");
    });
  });

  function clear() {
    slides.forEach((element) => {
      element.classList.remove("isActive");
    });
  }
}
isStart(0);
