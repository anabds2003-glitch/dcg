document.addEventListener("DOMContentLoaded", () => {
  const toggleTheme = document.getElementById("toggleTheme");

  // Appliquer le thème enregistré
  const savedTheme = localStorage.getItem("theme");
  const isDarkSaved = savedTheme === "dark";
  if (isDarkSaved) {
    document.body.classList.add("dark-mode");
  }

  // Mettre à jour l'icône du bouton
  if (toggleTheme) {
    toggleTheme.textContent = isDarkSaved ? "☀️" : "🌙";

    toggleTheme.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      toggleTheme.textContent = isDark ? "☀️" : "🌙";
    });
  }
});
