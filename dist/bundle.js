(()=>{"use strict";const e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".form-close",l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".close-btn",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".form-content",o=document.querySelector(e),c=function e(c){var n=c.target;(n.closest(t)||n.closest(l)||!n.closest(s))&&(o.style.display="none",o.removeEventListener("click",e))};o.style.display="block",o.addEventListener("click",c)};var t=document.querySelector(".clubs-list ul"),l=document.querySelector(".popup-menu"),s=0;document.querySelector("html").addEventListener("click",(function(o){var c=o.target,n=null;if((n=c.closest(".clubs-list"))&&(s<1?(t.style.display="block",s+=1):c.closest(".clubs-list ul")||(t.style.display="none",s-=1)),n||"block"===t.style.display&&(t.style.display="none",s=0),c.closest(".menu-button")&&(l.style.display="flex"),(c.closest(".close-menu-btn")||c.closest(".popup-menu li"))&&(l.style.display="none"),n=c.closest(".free-visit")){var i=n.querySelector("a").dataset.popup;e(i)}(n=c.closest(".callback-btn"))&&e(n.dataset.popup),(n=c.closest(".fixed-gift"))&&(n.style.display="none",e("#gift"))}))})();