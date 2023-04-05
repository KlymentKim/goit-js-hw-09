
setTimeout(()=>{
    const buttonStart = document.querySelector('[data-start]');
    const buttonStop = document.querySelector('[data-stop]');
    const changeColorStart= document.body.style.backgroundColor= getRandomHexColor();
    buttonStart.innerHTML=changeColorStart;
},1000);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }