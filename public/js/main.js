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


    function startAnimations() {
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(el => {
            el.style.opacity = '0';
        });

        // Forzamos un reflow antes de agregar la clase de animación
        void document.body.offsetHeight;

        fadeElements.forEach(el => {
            el.style.opacity = '';
        });
    }

    // Iniciamos las animaciones cuando la ventana haya cargado completamente
    window.addEventListener('load', startAnimations);
});



document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTopBtn');

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Usando scrollTo con fallback para navegadores más antiguos
            if ('scrollBehavior' in document.documentElement.style) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                // Fallback para navegadores que no soportan scrollBehavior
                smoothScrollToTop();
            }
        });
    } else {
        console.error('Back to top button not found');
    }
});

// Función de fallback para scroll suave
function smoothScrollToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(smoothScrollToTop);
        window.scrollTo(0, c - c / 8);
    }
}

// Opcional: Mostrar/ocultar el botón basado en la posición de scroll
window.addEventListener('scroll', function() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        if (window.pageYOffset > 100) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    }
});