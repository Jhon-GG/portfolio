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


const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const circles = [];

        function Circle(x, y, radius, dx, dy) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.dx = dx;
            this.dy = dy;
            this.alpha = 0;
            this.color = `rgba(0, 100, 255, ${this.alpha})`;
        }

        Circle.prototype.draw = function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.strokeStyle = this.color;
            ctx.stroke();
        }

        Circle.prototype.update = function() {
            if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }

            this.x += this.dx;
            this.y += this.dy;

            if (this.alpha < 1) {
                this.alpha += 0.005;
                this.color = `rgba(0, 100, 255, ${this.alpha})`;
            }

            this.draw();
        }

        function init() {
            for (let i = 0; i < 15; i++) {
                let radius = Math.random() * 50 + 10;
                let x = Math.random() * (canvas.width - radius * 2) + radius;
                let y = Math.random() * (canvas.height - radius * 2) + radius;
                let dx = (Math.random() - 0.5) * 2;
                let dy = (Math.random() - 0.5) * 2;

                circles.push(new Circle(x, y, radius, dx, dy));
            }
        }

        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let circle of circles) {
                circle.update();
            }
        }

        init();
        animate();

        window.addEventListener('resize', function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        });