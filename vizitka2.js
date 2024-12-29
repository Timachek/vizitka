document.getElementById('burgerMenu').addEventListener('click', toggleMenu);

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
    console.log('Menu toggled'); // Для проверки, срабатывает ли функция
}
