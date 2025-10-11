// 🌙 Gestion du thème sombre
const themeButton = document.getElementById("toggleTheme");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeButton.textContent = "☀️ Mode clair";
}

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeButton.textContent = "☀️ Mode clair";
  } else {
    localStorage.setItem("theme", "light");
    themeButton.textContent = "🌙 Mode sombre";
  }
});
