// Lorsque la page est complètement chargée, on remonte tout en haut
window.onload = function () {
  window.scrollTo(0, 0);
  handleScroll(); // Appliquer l'état initial
};

// Gérer le style du header selon le scroll
window.addEventListener("scroll", function () {
  handleScroll();
});

// Fonction qui affiche le logo et le nom du logo selon le scroll
function handleScroll() {
  const logoName = document.querySelector("header strong.logo-name");
  const logo = document.querySelector(".logo");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    // Lorsque l'utilisateur descend : cacher le nom du logo et montrer le logo
    logo.classList.remove("hidden");
    logoName.classList.remove("visible");
  } else {
    // Lorsque l'utilisateur est en haut : faire apparaître le nom du logo et le faire sortir du logo
    logo.classList.add("hidden");
    logoName.classList.add("visible");
  }
}