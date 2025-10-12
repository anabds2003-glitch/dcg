document.addEventListener("DOMContentLoaded", () => {
  const toggleThemeButton = document.getElementById("toggleTheme");

  // Fonction pour appliquer le thème et mettre à jour l'icône
  function applyTheme(isDark) {
    document.body.classList.toggle("dark-mode", isDark);
    if (toggleThemeButton) {
      toggleThemeButton.textContent = isDark ? "☀️" : "🌙";
    }
  }

  // Lecture du thème enregistré dans le navigateur
  const savedTheme = localStorage.getItem("theme");
  const isDarkSaved = savedTheme === "dark";
  applyTheme(isDarkSaved);

  // Écoute du clic sur le bouton pour basculer le thème
  if (toggleThemeButton) {
    toggleThemeButton.addEventListener("click", () => {
      const isDark = !document.body.classList.contains("dark-mode");
      applyTheme(isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }
});
