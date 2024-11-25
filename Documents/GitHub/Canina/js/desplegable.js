const desplegable = document.querySelector('.desplegable');
const hoverGatos = document.querySelector('.hoverGatos');

desplegable.addEventListener('mouseenter', () => {
    hoverGatos.style.opacity = '1';
});

desplegable.addEventListener('mouseleave', () => {
    hoverGatos.style.opacity = '0.5'; // O cualquier valor predeterminado
});
