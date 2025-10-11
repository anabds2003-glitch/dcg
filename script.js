// 🌙 Gestion du thème sombre avec animation
const themeButton = document.getElementById("toggleTheme");

function applyTheme(theme) {
  document.body.classList.toggle("dark-mode", theme === "dark");
  themeButton.textContent = theme === "dark" ? "☀️ Mode clair" : "🌙 Mode sombre";
  localStorage.setItem("theme", theme);
}

// Appliquer le thème au chargement
const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

// Changement de thème au clic
themeButton.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
  applyTheme(newTheme);
});
