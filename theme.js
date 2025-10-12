document.addEventListener("DOMContentLoaded", () => {
  const toggleThemeButton = document.getElementById("toggleTheme");

  // Appliquer le thème et mettre à jour l’icône
  function applyTheme(isDark) {
    document.body.classList.toggle("dark-mode", isDark);
    toggleThemeButton.textContent = isDark ? "☀️" : "🌙";
  }

  // Charger le thème enregistré
  const savedTheme = localStorage.getItem("theme");
  applyTheme(savedTheme === "dark");

  // Basculer le thème au clic
  toggleThemeButton.addEventListener("click", () => {
    const isDark = !document.body.classList.contains("dark-mode");
    applyTheme(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // ---------------------------
  // Calendrier interactif
  // ---------------------------
  const monthYear = document.getElementById("monthYear");
  const calendarBody = document.getElementById("calendarBody");
  const prevMonth = document.getElementById("prevMonth");
  const nextMonth = document.getElementById("nextMonth");
  const eventForm = document.getElementById("addEventForm");
  const eventTitle = document.getElementById("eventTitle");
  const eventDate = document.getElementById("eventDate");

  let currentDate = new Date(2025, 8); // Septembre 2025
  let events = JSON.parse(localStorage.getItem("calendarEvents")) || [];

  function saveEvents() {
    localStorage.setItem("calendarEvents", JSON.stringify(events));
  }

  function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const monthNames = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
    monthYear.textContent = `${monthNames[month]} ${year}`;

    calendarBody.innerHTML = "";
    let row = document.createElement("tr");
    let dayIndex = (firstDay + 6) % 7; // Commencer lundi

    for (let i = 0; i < dayIndex; i++) {
      row.appendChild(document.createElement("td"));
    }

    for (let day = 1; day <= daysInMonth; day++) {
      if (dayIndex % 7 === 0) {
        calendarBody.appendChild(row);
        row = document.createElement("tr");
      }

      const cell = document.createElement("td");
      const cellDate = new Date(year, month, day).toISOString().split("T")[0];
      cell.innerHTML = `<div class="day-number">${day}</div>`;

      const dayEvents = events.filter(ev => ev.date === cellDate);
      dayEvents.forEach((ev, index) => {
        const badge = document.createElement("div");
        badge.className = "event-badge";
        badge.textContent = ev.title;
        badge.title = "Clique pour modifier ou supprimer";
        badge.addEventListener("click", () => {
          const action = prompt(`Modifier ou supprimer l'événement : "${ev.title}"\n\n- Pour modifier, entre un nouveau titre\n- Pour supprimer, laisse vide et clique OK`);
          if (action === null) return;
          if (action.trim() === "") {
            events.splice(events.indexOf(ev), 1);
          } else {
            events[index].title = action.trim();
          }
          saveEvents();
          renderCalendar(currentDate);
        });
        cell.appendChild(badge);
      });

      row.appendChild(cell);
      dayIndex++;
    }

    calendarBody.appendChild(row);
  }

  // Soumission du formulaire
  if (eventForm) {
    eventForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = eventTitle.value.trim();
      const date = eventDate.value;
      if (title && date) {
        events.push({ title, date });
        saveEvents();
        eventTitle.value = "";
        eventDate.value = "";
        renderCalendar(currentDate);
      }
    });
  }

  // Navigation mois précédent
  prevMonth.addEventListener("click", () => {
    if (currentDate.getFullYear() > 2025 || currentDate.getMonth() > 8) {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar(currentDate);
    }
  });

  // Navigation mois suivant
  nextMonth.addEventListener("click", () => {
    if (currentDate.getFullYear() < 2026 || currentDate.getMonth() < 7) {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar(currentDate);
    }
  });

  renderCalendar(currentDate);
});
