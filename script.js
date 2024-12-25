const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    console.log('Menu icon clicked');
    navLinks.classList.toggle('active');
});