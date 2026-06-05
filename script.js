// NeuroPsynfonía v2 — script.js

// Bio expandible en tarjetas del equipo
function toggleBio(card) {
  const bio = card.querySelector('.prof-bio');
  const hint = card.querySelector('.prof-hint');
  const isOpen = bio.classList.contains('open');
  bio.classList.toggle('open', !isOpen);
  hint.textContent = isOpen ? '▾ Ver trayectoria completa' : '▴ Cerrar';
}

// Menú hamburguesa
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Copiar link al portapapeles
function copiarLink(url, btn) {
  navigator.clipboard.writeText(url).then(() => {
    const original = btn.textContent;
    btn.textContent = '¡Copiado!';
    setTimeout(() => btn.textContent = original, 2000);
  });
}

// Navbar sombra al hacer scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.style.boxShadow = window.scrollY > 10 ? '0 2px 12px rgba(0,0,0,0.07)' : 'none';
  }
});
