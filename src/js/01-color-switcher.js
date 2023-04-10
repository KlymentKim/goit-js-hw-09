function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
  }
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
// let intervalId= null;

// const changeBodyColor = () =>{
//     const setColor = getRandomHexColor();
//     document.body.style.backgroundColor = setColor;
//     setTimeout(changeBodyColor, 1000);
//     if (buttonStart) {
//         buttonStart.disable = true;
//     }
// };
// buttonStart.addEventListener('click', changeBodyColor);

// const stopChangeColor = () =>{
//     clearTimeout(intervalId);
// };
// buttonStop.addEventListener('click', stopChangeColor);
  let intervalId = null;

  startBtn.addEventListener('click', () => {
    if (!intervalId) {
      startBtn.disabled = true;
      stopBtn.disabled = false;
      intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
      }, 1000);
    }
  });

  stopBtn.addEventListener('click', () => {
    if (intervalId) {
      startBtn.disabled = false;
      stopBtn.disabled = true;
      clearInterval(intervalId);
      intervalId = null;
    }
  });
