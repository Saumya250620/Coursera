// Simple fade-in animation
document.querySelector('.hero').style.opacity = 0;

window.addEventListener('load', () => {
    document.querySelector('.hero').style.transition = "1s";
    document.querySelector('.hero').style.opacity = 1;
})