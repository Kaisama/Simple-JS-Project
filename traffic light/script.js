document.addEventListener('DOMContentLoaded', () => {
    const redButton = document.querySelector('.button1');
    const redCircle = document.getElementById('red');

    redButton.addEventListener('click', () => {
        redCircle.style.backgroundColor = 'red';
    });
});