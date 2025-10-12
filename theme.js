const toggleTheme = document.getElementById("toggleTheme");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  toggleTheme.textContent = "☀️";
}

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  toggleTheme.textContent = isDark ? "☀️" : "🌙";
});

const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const burgerIcon = document.getElementById("burger-icon");

function toggleMenu(open) {
  menu.classList.toggle("open", open);
  overlay.classList.toggle("show", open);
  burger.setAttribute("aria-expanded", open);
  burgerIcon.textContent = open ? "✖️" : "☰";
}

burger.addEventListener("click", () => {
  toggleMenu(!menu.classList.contains("open"));
});

overlay.addEventListener("click", () => {
  toggleMenu(false);
});
