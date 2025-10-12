const toggleTheme = document.getElementById("toggleTheme");
const savedTheme = localStorage.getItem("theme");

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

// 🍔 Menu glissant + overlay + accessibilité
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

function toggleMenu(open) {
  menu.classList.toggle("open", open);
  overlay.classList.toggle("show", open);
  burger.setAttribute("aria-expanded", open);
}

if (burger && menu && overlay) {
  burger.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("open");
    toggleMenu(isOpen);
  });

  burger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      burger.click();
    }
  });

  overlay.addEventListener("click", () => {
    toggleMenu(false);
  });

  const links = menu.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      toggleMenu(false);
    });
  });
}
