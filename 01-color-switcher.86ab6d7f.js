const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");document.querySelector("body");let d=null;e.addEventListener("click",(()=>{d||(e.disabled=!0,t.disabled=!1,d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3))})),t.addEventListener("click",(()=>{d&&(e.disabled=!1,t.disabled=!0,clearInterval(d),d=null)}));
//# sourceMappingURL=01-color-switcher.86ab6d7f.js.map
