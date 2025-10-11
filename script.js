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

// 📬 Formulaire de contact
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { Accept: "application/json" }
  }).then(response => {
    if (response.ok) {
      document.getElementById("confirmation").style.display = "block";
      form.reset();
    } else {
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  });
});
