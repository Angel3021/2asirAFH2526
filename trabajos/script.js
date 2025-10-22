const button = document.getElementById('learnMore');
button.addEventListener('click', () => {
    button.textContent = 'Cargando...';
    setTimeout(() => {
        alert('Bienvenido a TecnoVisión 2025. ¡Explora la innovación tecnológica!');
        button.textContent = 'Explorar ahora';
    }, 1000);
});

// Efecto al hacer scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
