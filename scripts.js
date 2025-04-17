window.onload = function () {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    handleScroll();
  }, 10);
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
