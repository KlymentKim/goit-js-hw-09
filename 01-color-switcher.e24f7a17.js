!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=(document.querySelector("body"),null);t.addEventListener("click",(function(){n||(t.disabled=!0,e.disabled=!1,n=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3))})),e.addEventListener("click",(function(){n&&(t.disabled=!1,e.disabled=!0,clearInterval(n),n=null)}))}();
//# sourceMappingURL=01-color-switcher.e24f7a17.js.map
