document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("toggleTheme");

  function applyTheme(theme) {
    document.body.classList.toggle("dark-mode", theme === "dark");
    if (themeButton) {
      themeButton.textContent = theme === "dark" ? "☀️ Mode clair" : "🌙 Mode sombre";
    }
    localStorage.setItem("theme", theme);
  }

  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);

  if (themeButton) {
    themeButton.addEventListener("click", () => {
      const newTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
      applyTheme(newTheme);
    });
  }
});
