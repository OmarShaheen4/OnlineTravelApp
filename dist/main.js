var MyClient=function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=7)}([function(e,t,o){"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),a=[];function d(e){for(var t=-1,o=0;o<a.length;o++)if(a[o].identifier===e){t=o;break}return t}function c(e,t){for(var o={},n=[],r=0;r<e.length;r++){var i=e[r],c=t.base?i[0]+t.base:i[0],l=o[c]||0,s="".concat(c," ").concat(l);o[c]=l+1;var p=d(s),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(a[p].references++,a[p].updater(u)):a.push({identifier:s,updater:h(u,t),references:1}),n.push(s)}return n}function l(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=o.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,p=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function u(e,t,o,n){var r=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=p(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,o){var n=o.css,r=o.media,i=o.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var g=null,m=0;function h(e,t){var o,n,r;if(t.singleton){var i=m++;o=g||(g=l(t)),n=u.bind(null,o,i,!1),r=u.bind(null,o,i,!0)}else o=l(t),n=f.bind(null,o,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var o=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var r=d(o[n]);a[r].references--}for(var i=c(e,t),l=0;l<o.length;l++){var s=d(o[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}o=i}}}},function(e,t,o){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);n&&r[c[0]]||(o&&(c[2]?c[2]="".concat(o," and ").concat(c[2]):c[2]=o),t.push(c))}},t}},function(e,t,o){"use strict";var n=o(1),r=o.n(n)()((function(e){return e[1]}));r.push([e.i,"footer{grid-area:ft;margin-top:20px;background-color:#c2c397}@media(min-width: 900px){footer{background-color:#fbff00}}@media(min-width: 1100px){footer{background-color:red;margin-top:100px}}",""]),t.a=r},function(e,t,o){"use strict";var n=o(1),r=o.n(n)()((function(e){return e[1]}));r.push([e.i,"header{grid-area:hd;width:auto;height:30px;border:2px solid blue}.navFrame a{text-decoration:none;color:#000}",""]),t.a=r},function(e,t,o){"use strict";var n=o(1),r=o.n(n),i=o(5),a=o.n(i),d=o(6),c=r()((function(e){return e[1]})),l=a()(d.a);c.push([e.i,'.container{display:grid;grid-template-rows:1fr;grid-template-areas:"hd" "img1" "img2" "img3" "img4" "ft";border:2px solid red}#photo1{background-image:url('+l+');width:100%;height:100%;background-size:cover}form{width:80%;height:200px;border:2px solid red;border-radius:5px;background-color:#f2f2f2;padding:10px;margin:20px;display:grid}input[type=text],select{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box}input[type=submit]{width:100%;background-color:#4caf50;color:#fff;padding:14px 20px;margin:8px 0;border:none;border-radius:4px;cursor:pointer}input[type=submit]:hover{background-color:#45a049}.imgBox{width:350px;height:150px;width:auto;border:2px solid red;margin-bottom:5px;margin-top:5px}.imageee{background-size:100% 100%;border-radius:3%;width:100%;height:140px}.floatText{display:flex;align-items:center;background-color:#f5f5f5;width:93%;height:25%;margin-top:-40px;opacity:80%;padding-left:20px;border-radius:3%;text-decoration:none;color:#000}.img1{grid-area:img1}.img2{grid-area:img2}.img3{grid-area:img3}.img4{grid-area:img4}.sideBar{display:none}.lowerNav{overflow:hidden;background-color:#181616;position:fixed;bottom:0;width:100%}.lowerNav a{float:left;display:block;color:#f2f2f2;text-align:center;padding:10px 8px;text-decoration:none;font-size:17px}@media(min-width: 900px){.container{display:grid;grid-template-columns:1fr 150px;grid-template-rows:repeat(1, 1fr);grid-template-areas:"hd  hd" "img1  tst" "img2  tst" "img3  tst" "ft  ft"}.box{background-color:#c2c397;border-radius:1px;box-shadow:0px 4px 8px 0px #000;margin-top:10px;width:95%;margin-left:10px}.section1{display:flex;flex-direction:column;align-items:center}.imgBox{width:80%;height:60%}.sideBar{grid-area:tst;width:85%;height:auto;border:2px solid red;background-color:#fbff00;display:block;margin-top:10px;margin-bottom:10px;margin-left:10px}}@media(min-width: 1100px){.container{display:grid;grid-template-rows:1fr;grid-template-columns:repeat(4, 1fr);grid-template-areas:"hd hd hd hd" "img1 img2 img3 img4" "tst tst tst tst" "ft ft ft ft"}.box{background-color:#c2c397;border-radius:1px;box-shadow:0px 4px 8px 0px #000;margin-top:10px;width:95%;margin-left:10px;height:100%}.imgBox img{width:100%;height:500px;border-radius:3%}.sideBar{display:block;width:98%;height:100px;margin-top:20px;margin-right:200px}.lowerNav{margin-top:100px}}.modal{display:none;position:fixed;z-index:1;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.4)}.modal-content{position:relative;background-color:#fefefe;margin:auto;padding:0;border:1px solid #888;width:80%;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);-webkit-animation-name:animatetop;-webkit-animation-duration:.4s;animation-name:animatetop;animation-duration:.4s}@-webkit-keyframes animatetop{from{top:-300px;opacity:0}to{top:0;opacity:1}}@keyframes animatetop{from{top:-300px;opacity:0}to{top:0;opacity:1}}.close{color:#fff;float:right;font-size:28px;font-weight:bold}.close:hover,.close:focus{color:#000;text-decoration:none;cursor:pointer}.modal-header{padding:2px 16px;background-color:#5cb85c;color:#fff}.modal-body{padding:2px 16px}.modal-footer{padding:2px 16px;background-color:#5cb85c;color:#fff}',""]),t.a=c},function(e,t,o){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,o){"use strict";t.a=o.p+"e2ac9c1bf11f20f0e32d0d41c021e2f7.jpg"},function(e,t,o){"use strict";o.r(t),o.d(t,"getWeatherData",(function(){return i}));let n=new Date,r=n.getMonth()+1+"."+n.getDate()+"."+n.getFullYear();document.getElementById("button_search").addEventListener("click",(function(e){e.preventDefault();const t=document.getElementById("zip").value,o=document.getElementById("feelings").value;""!==t?""!==o?i("https://api.openweathermap.org/data/2.5/weather/",t,"bb04270cd184efee40dac170417a61a3&units=metric").then((function(e){console.log("The data"),console.log(e),a("/AddData",{temp:e.main.temp,date:r,content:o})})).then((function(){d()})).catch((function(e){console.log(e),alert("The zip code is invalid. Try again")})):alert("Please Enter How do you feel"):alert("Please Enter ZipCode")}));const i=async(e,t,o)=>{const n=await fetch(`${e}?zip=${t}&apikey=${o}`);console.log(n);try{const e=await n.json();return console.log("The data from weatherData"),console.log(e),e}catch(e){console.log("error",e)}},a=async(e="",t={})=>{const o=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});console.log("response"),console.log(o);try{const e=await o.json();return console.log("newData"),console.log(e),e}catch(e){console.log(e)}},d=async()=>{const e=await fetch("/all");try{const t=await e.json();console.log("all data"),console.log(t),void 0!==t.date&&void 0!==t.temp&&void 0!==t.content&&(document.getElementById("date").innerHTML="Today's Date: "+t.date,document.getElementById("temp").innerHTML="Today's Temperature: "+Math.round(t.temp)+" degrees Celsius",document.getElementById("content").innerHTML="You are Feeling: "+t.content)}catch(e){console.log("error",e)}};var c=o(0),l=o.n(c),s=o(2),p={insert:"head",singleton:!1},u=(l()(s.a,p),s.a.locals,o(3)),f={insert:"head",singleton:!1},g=(l()(u.a,f),u.a.locals,o(4)),m={insert:"head",singleton:!1};l()(g.a,m),g.a.locals}]);