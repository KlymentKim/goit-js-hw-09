function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
  }
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let intervalId= null;

const changeBodyColor = () =>{
    const setColor = getRandomHexColor();
    document.body.style.backgroundColor = setColor;
    setTimeout(changeBodyColor,1000);
};
buttonStart.addEventListener('click', changeBodyColor);

const stopChangeColor = () =>{
    clearTimeout(null);
};
buttonStop.addEventListener('click', stopChangeColor);
