const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");

burger.addEventListener('click', () => {
    burger.classList.toggle('activo');
    navMenu.classList.toggle('activo');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    burger.classList.remove('activo');
    navMenu.classList.remove('activo');
}));