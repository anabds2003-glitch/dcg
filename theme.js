document.addEventListener("DOMContentLoaded", () => {
  const toggleTheme = document.getElementById("toggleTheme");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (toggleTheme) toggleTheme.textContent = "☀️";
  }

  if (toggleTheme) {
    toggleTheme.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      toggleTheme.textContent = isDark ? "☀️" : "🌙";
    });
  }
});
