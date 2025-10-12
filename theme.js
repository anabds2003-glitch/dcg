// theme.js

const toggleTheme = document.getElementById("toggleTheme");
const savedTheme = localStorage.getItem("theme");

// Appliquer le thème enregistré au chargement
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

// Mettre à jour l’icône du bouton selon le thème actif
function updateThemeIcon() {
  if (toggleTheme) {
    toggleTheme.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  }
}

// Gérer le clic sur le bouton pour changer de thème
if (toggleTheme) {
  toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const newTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    updateThemeIcon();
  });
}

// Initialiser l’icône au chargement
updateThemeIcon();
