/* ===============================
   HEADER MENU OVERLAY LOGIC
================================= */

// Sélection des éléments
const burgerBtn = document.querySelector('.menu-burger');
const overlayMenu = document.getElementById('menu-overlay');
const menuLinks = document.querySelectorAll('.menu-links a');

// Fonction pour ouvrir / fermer le menu
function toggleMenu() {
  const isOpen = burgerBtn.classList.toggle('open');
  overlayMenu.classList.toggle('active');

  // Mise à jour des attributs d’accessibilité
  burgerBtn.setAttribute('aria-expanded', isOpen);
  overlayMenu.setAttribute('aria-hidden', !isOpen);
}

// Clique sur le bouton burger
burgerBtn.addEventListener('click', toggleMenu);

// Fermer le menu quand on clique sur un lien
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerBtn.classList.remove('open');
    overlayMenu.classList.remove('active');
    burgerBtn.setAttribute('aria-expanded', false);
    overlayMenu.setAttribute('aria-hidden', true);
  });
});

// Fermer avec la touche Échap (accessibilité clavier)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && overlayMenu.classList.contains('active')) {
    burgerBtn.classList.remove('open');
    overlayMenu.classList.remove('active');
    burgerBtn.setAttribute('aria-expanded', false);
    overlayMenu.setAttribute('aria-hidden', true);
  }
});
