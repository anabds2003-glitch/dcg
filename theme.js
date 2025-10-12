// theme.js

const toggleTheme = document.getElementById("toggleTheme");
const savedTheme = localStorage.getItem("theme");

// Appliquer le thème enregistré ou le thème préféré du système
if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.body.classList.add("dark-mode");
}

function updateThemeIcon() {
  if (toggleTheme) {
    toggleTheme.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  }
}

if (toggleTheme) {
  toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    updateThemeIcon();
  });
}

updateThemeIcon();
