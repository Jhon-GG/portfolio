document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const menu = document.getElementById('menu');
    const navBurger = document.querySelector('.nav-burger');

    function toggleMenu() {
        menu.classList.toggle('active');
        navBurger.classList.toggle('active');
    }

    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        toggleMenu();
    });

    closeMenu.addEventListener('click', toggleMenu);

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!menu.contains(e.target) && !navBurger.contains(e.target) && menu.classList.contains('active')) {
            toggleMenu();
        }
    });
});


const contenedor = document.querySelector('.box-1');

for (let i = 0; i < 100; i++) { // Genera 100 luces, puedes ajustar este número
    const luz = document.createElement('div');
    luz.classList.add('luz');
    
    // Posición inicial aleatoria
    luz.style.top = `${Math.random() * 100}vh`;
    luz.style.left = `${Math.random() * 100}vw`;
    
    // Duración y retardo de animación aleatorios
    luz.style.animationDuration = `${Math.random() * 20 + 5}s`;
    luz.style.animationDelay = `${Math.random() * 10}s`;
    
    contenedor.appendChild(luz);
}
