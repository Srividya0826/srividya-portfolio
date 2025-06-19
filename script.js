// Mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
});

// Active link switching
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    navLinks.forEach(n => n.classList.remove('active-link'));
    this.classList.add('active-link');
    navMenu.classList.remove('show-menu');
}

navLinks.forEach(link => link.addEventListener('click', linkAction));
