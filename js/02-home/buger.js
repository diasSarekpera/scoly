const burger = document.querySelector('.burger');
const mobileMenu = document.getElementById('mobile-menu');
const links = mobileMenu.querySelectorAll('a');

burger.addEventListener('click', () => {
    const isOpen = burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');

    burger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
});

/* Fermer au clic sur un lien */
links.forEach(link => {
    link.addEventListener('click', closeMenu);
});

/* Fermer au clic sur l’overlay */
mobileMenu.addEventListener('click', e => {
    if (e.target === mobileMenu) closeMenu();
});

function closeMenu() {
    burger.classList.remove('active');
    mobileMenu.classList.remove('active');
    burger.setAttribute('aria-expanded', false);
    document.body.style.overflow = '';
}


mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        closeMenu();
    }
});

function closeMenu() {
    burger.classList.remove('active');
    mobileMenu.classList.remove('active');
    burger.setAttribute('aria-expanded', false);
    document.body.style.overflow = '';
}




