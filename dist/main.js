(()=>{"use strict";var e={244:(e,t,n)=>{e.exports=n.p+"./favicon.ico"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{n(244);const e=document.getElementById("menu-btn"),t=document.getElementById("sidebar"),r=document.getElementById("close-menu-btn"),i=document.getElementById("shade");e.addEventListener("click",(()=>{c()})),r.addEventListener("click",(()=>{c()})),i.addEventListener("click",(()=>{c()})),window.addEventListener("resize",(()=>{window.innerWidth>=768&&!i.classList.contains("hidden")&&c()}));const c=()=>{t.classList.toggle("-translate-x-full"),i.classList.toggle("hidden")},s=document.getElementById("2");document.getElementById("1").addEventListener("click",(()=>{s.classList.toggle("scale-0")}))})()})();