(()=>{"use strict";const e=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=document.querySelector(t),i=o.querySelector("form"),a=o.querySelector("h4"),l=o.querySelector("p");""!==n&&(a.textContent=n),""!==r&&(l.textContent=r),e.close=function(e){o.style.display="none",i&&i.reset(),o.removeEventListener("click",e)};var c=function t(n){var r=n.target;(r.closest(".form-close")||r.closest(".close-btn")||!r.closest(".form-content"))&&e.close(t)};o.style.display="block",o.addEventListener("click",c)};var t=document.querySelector(".clubs-list ul"),n=document.querySelector(".popup-menu"),r=0;function o(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=document.createElement(t);return""!==n.trim()&&(r.className=n),e.append(r),r},l=function(e,t,n,r){var o=t(e,"a",n);o.setAttribute("href","#!"),t(o,"span",r)},c=function(e,t){var n=t.length,r=e.getBoundingClientRect().width,o=2*parseInt(getComputedStyle(e).padding.split(" ")[1],10),i=2*parseInt(getComputedStyle(t[0]).margin.split(" ")[1],10),a=parseInt(getComputedStyle(t[0]).minWidth,10),l=Math.floor((r-o)/a),c=a+i;return{slidesToShow:l,step:c,maxPos:2*n*c,wrapWidth:l*c,amount:n,allowShift:!0}},s=function(e,t){var n=e.cloneNode(!0);o(n.children).forEach((function(e){t[0].before(e.cloneNode(!0))})),o(n.children).reverse().forEach((function(e){t[t.length-1].after(e)}))};function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",n=document.querySelectorAll(e);function r(e){var n=e.keyCode,r=t,o=r.replace(/\D/g,""),i=this.value.replace(/\D/g,""),a=0,l=r.replace(/[_\d]/g,(function(e){return a<i.length?i.charAt(a++)||o.charAt(a):e}));-1!==(a=l.indexOf("_"))&&(l=l.slice(0,a));var c=r.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,".concat(e.length,"}")})).replace(/[+()]/g,"\\$&");(!(c=new RegExp("^".concat(c,"$"))).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=l),"blur"==e.type&&this.value.length<5&&(this.value="")}d(n).forEach((function(e){e.addEventListener("input",r),e.addEventListener("focus",r),e.addEventListener("blur",r)}))}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const y=function(e){var t=document.querySelector(e),n=t.querySelector("#price-total"),r={mozaika:{1:1999,6:9900,9:13900,12:19900},schelkovo:{1:2999,6:14990,9:21990,12:24990},discount:0},o=function(e){return e.checked||e.matches(".price-message input")},i=function(){var e,i=(e=t.elements,function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter(o);if(i.length>1){var a=i[1].value;""!==i[2].value.trim()&&"ТЕЛО2020"===i[2].value.trim()?r.discount=30:r.discount=0,Object.keys(r[a]).forEach((function(e){e===i[0].value&&function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;n.textContent=e-Math.floor(e*(t/100))}(r[a][e],r.discount)}))}};t.addEventListener("change",i),t.addEventListener("keyup",i)};function v(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const b=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=document.querySelector(t);if(i){var a=/^((\+?7|8)[ -] ?)?((\(\d{3}\))|(\d{3}))?([ -])?(\d{3}[- ]?\d{2}[- ]?\d{2})$/,l=document.createElement("span"),c=i.querySelector("button[type=submit]"),s={errTitle:"Ошибка",errMsg:"Что-то пошло не так...",load:"Идет отправка...",club:"Выберите клуб",phone:"+7(XXX)-XXX-XX-XX",confirm:"Подтвердите согласие"},u={isConfirm:!1,isClub:!1,isPhone:!1},d=function(e){v(i.elements).forEach((function(t){if("input"===e.type){var n=e.target;n===t&&"name"===t.name&&(n.value=n.value.replace(/[^аА-яёЯЁ ]/,"")),n===t&&"promocode"===t.name&&(n.value=n.value.replace(/[^А-ЯЁ ][^\d]/,""))}o?"club-name"===t.name&&(t.checked?u.isClub=!0:(l.textContent=s.club,t.closest(".club").style.borderBottom="1px solid red"),u.isClub&&(l.textContent="",t.closest(".club").style.cssText="")):u.isClub=!0,r?t.matches(".personal-data input[type=checkbox]")&&(t.checked?(u.isConfirm=!0,l.textContent="",t.nextElementSibling.style.borderBottom=""):(u.isConfirm=!1,l.textContent=s.confirm,t.nextElementSibling.style.borderBottom="1px solid red")):u.isConfirm=!0,"phone"===t.name&&(a.test(t.value)?(u.isPhone=!0,t.setCustomValidity("")):(u.isPhone=!1,t.setCustomValidity(s.phone)))}))},f=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},p=function(t){t.preventDefault(),l.classList.add("active");var n=new FormData(i),r={};d(t),u.isClub&&u.isConfirm&&u.isPhone&&(l.textContent=s.load,n.forEach((function(e,t){r[t]=e})),f(r).then((function(t){if(l.classList.remove("active"),200!==t.status)throw new Error("status network not 200");e("#thanks")})).catch((function(t){e("#thanks",s.errTitle,s.errMsg),console.warn(t)})).finally((function(){i.reset(),Object.keys(u).forEach((function(e){u[e]=!1})),l.classList.remove("active"),i.closest(".popup")&&(i.closest(".popup").style.display="none"),setTimeout((function(){return e.close()}),6e3)})))};m("".concat(t," input[name=phone]")),i.classList.contains("card_order-calc")&&y(t),l.className="status-msg active",(i.classList.contains("card_order")||i.classList.contains("card_order-calc"))&&(l.style.color="#000000"),n?c.after(l):i.append(l),i.addEventListener("input",d),i.addEventListener("submit",p)}};var g,S,w,A,E,C;document.querySelector("html").addEventListener("click",(function(o){var i=o.target,a=null;if((a=i.closest(".clubs-list"))&&(r<1?(t.style.display="block",r+=1):i.closest(".clubs-list ul")||(t.style.display="none",r-=1)),a||"block"===t.style.display&&(t.style.display="none",r=0),i.closest(".menu-button")&&(n.style.display="flex"),(i.closest(".close-menu-btn")||i.closest(".popup-menu li"))&&(n.style.display="none"),a=i.closest(".free-visit")){var l=a.querySelector("a").dataset.popup;e(l)}(a=i.closest(".callback-btn"))&&!a.closest("form")&&e(a.dataset.popup),(a=i.closest(".fixed-gift"))&&(a.style.display="none",e("#gift"))})),g=document.getElementById("totop"),S=document.querySelector(".header-main").getBoundingClientRect().bottom/2,w=document.querySelector(".top-menu"),A=w.getBoundingClientRect().height,E=window.screen.width,C=function(){return window.pageYOffset||document.documentElement.scrollTop},g.style.display="none",window.addEventListener("scroll",(function(){var e;C()>S?(g.style.display="block",(e=g).addEventListener("click",(function t(n){n.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),e.removeEventListener("click",t)}))):g.style.display="none",E<768&&(C()>=w.getBoundingClientRect().bottom+A?w.classList.add("fixed-header"):w.classList.remove("fixed-header"))})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6e3,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".main-slider .slide",n=document.querySelectorAll(t),r=0,o=function(){n[r].style.display="none",(r+=1)>=n.length&&(r=0),n[r].style.display="inline-block"};setInterval(o,e)}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".services-slider",t=document.querySelector(e),n=document.querySelectorAll("".concat(e," .slide")),r=t.querySelector("".concat(e,"--wrap")),o=t.querySelector("#slides"),i=c(t,n),u=-i.step*i.amount;s(o,n),o.style.transform="translateX(".concat(u,"px)"),r.style.maxWidth="".concat(i.wrapWidth,"px");var d=function(){l(t,a,"slider-arrow prev","fa fa-arrow-left"),l(t,a,"slider-arrow next","fa fa-arrow-right")},f=function(){o.style.transform="translateX(".concat(u,"px)")},m=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];o.classList.add("shifting"),i.allowShift&&(e?u+=i.step:u-=i.step,f()),i.allowShift=!1},p=function(){i=c(t,n),u=-i.step*i.amount,r.style.maxWidth="".concat(i.wrapWidth,"px"),f()},y=function(e){var t=e.target;t.closest(".prev")&&m(!0),t.closest(".next")&&m()},v=function(){Math.abs(u)!==i.maxPos&&0!==u||(o.classList.remove("shifting"),u=-i.step*i.amount,o.style.transform="translateX(".concat(u,"px)"),f()),i.allowShift=!0};d(),window.addEventListener("resize",p),o.addEventListener("transitionend",v),t.addEventListener("click",y)}(),function(){var e=document.querySelector(".gallery-slider"),t=document.querySelectorAll(".gallery-slider .slide"),n=function(n){for(var r=a(e,"ul","slider-dots"),o=0;o<t.length-1;o+=1){if(0===o){var i=a(r,"li","slick-active");a(i,"button")}var l=a(r,"li");a(l,"button")}return r.children}();l(e,a,"slider-arrow prev","fa fa-arrow-left"),l(e,a,"slider-arrow next","fa fa-arrow-right");var r=function(e,t,n){e[t].classList.remove(n)},o=function(e,t,n){e[t].classList.add(n)},i=0,c=0,s=function(){r(t,i,"active"),r(n,i,"slick-active"),(i+=1)>=t.length&&(i=0),o(t,i,"active"),o(n,i,"slick-active")},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e3;c=setInterval(s,e)},f=function(){clearInterval(c)},m=function(e,t){var n=e.target;(n.closest(".slider-arrow")||n.closest(".slider-dots li"))&&t()};e.addEventListener("click",(function(e){e.preventDefault();var a,l=e.target;if(l.closest(".slider-arrow")||l.closest(".slider-dots")){if(r(t,i,"active"),r(n,i,"slick-active"),l.closest(".next"))i+=1;else if(l.closest(".prev"))i-=1;else if(l.closest(".slider-dots li")){var c=l.closest(".slider-dots li");(a=n,function(e){if(Array.isArray(e))return u(e)}(a)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(a)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e,t){e===c&&(i=t)}))}i>=t.length&&(i=0),i<0&&(i=t.length-1),o(t,i,"active"),o(n,i,"slick-active")}})),e.addEventListener("mouseover",(function(e){return m(e,f)})),e.addEventListener("mouseout",(function(e){return m(e,d)})),d()}(),b("#form1",!1),b("#form2",!1),b("#banner-form",!1),b(".card_order-calc"),b(".card_order"),b("#footer_form",!0,!1,!0)})();