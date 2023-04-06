
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');

buttonStart.addEventListener('click', (event) => {
    event.preventDefault();
    setTimeout(() => {
        const changeColorRandmize = getRandomHexColor();
        document.body.style.backgroundColor = changeColorRandmize;
        
    }, 500);
    // buttonStart.innerHTML = changeColorRandmize;
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
  }