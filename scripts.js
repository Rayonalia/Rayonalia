window.onload = function () {
  window.scrollTo(0, 0);
  handleScroll();
};

window.addEventListener("scroll", function () {
  handleScroll();
});

function handleScroll() {
  const logoName = document.querySelector("header strong.logo-name");
  const logo = document.querySelector(".logo");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    logo.classList.remove("hidden");
    logoName.classList.remove("visible");
  } else {
    logo.classList.add("hidden");
    logoName.classList.add("visible");
  }
}
