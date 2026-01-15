const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const rect = button.getBoundingClientRect();

        const xInside = e.clientX - rect.left;
        const yInside = e.clientY - rect.top;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.left = xInside + 'px';
        circle.style.top = yInside + 'px';

        button.appendChild(circle);

        setTimeout(() => circle.remove(), 500);
    })
})