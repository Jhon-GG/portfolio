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