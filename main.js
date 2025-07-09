// === Încarcă fișiere HTML externe (ex: header, footer) în elemente cu ID specific ===
function includeHTML(id, file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (typeof callback === "function") callback(); // Rulează funcția după încărcare
    })
    .catch(err => console.error(`Eroare la încărcarea ${file}:`, err));
}

// === Inițializează meniul mobil după ce headerul a fost încărcat ===
function initMobileMenu() {
  const menuButton = document.getElementById("menu-button");
  const closeButton = document.getElementById("close-menu"); // <-- butonul ×
  const mobileMenu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("overlay");

  if (!menuButton || !mobileMenu || !overlay) return;

  // Deschidere meniu
  menuButton.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
  });

  // Închidere din overlay
  overlay.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
    overlay.classList.add("hidden");
  });

  // Închidere cu butonul "×"
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      mobileMenu.classList.add("translate-x-full");
      overlay.classList.add("hidden");
    });
  }
}

// === Când pagina e gata, încarcă headerul și footerul și apoi initializează meniul ===
document.addEventListener("DOMContentLoaded", () => {
  includeHTML("header-placeholder", "header.html", initMobileMenu);
  includeHTML("footer-placeholder", "footer.html");
});

document.addEventListener("DOMContentLoaded", () => {
});