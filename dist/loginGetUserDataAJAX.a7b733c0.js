parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"KezH":[function(require,module,exports) {
function t(t){t.preventDefault();var e=document.querySelector("form");return fetch("php/login.php",{method:"POST",body:new FormData(e)}).then(function(t){return t.text()}).then(function(t){document.querySelector(".for_fetch_data").innerHTML=t}),!1}!function(){"use strict";window.addEventListener("load",function(){var e=document.getElementsByClassName("needs-validation");Array.prototype.filter.call(e,function(e){e.addEventListener("submit",function(n){!1===e.checkValidity()?(n.preventDefault(),n.stopPropagation()):t(n),e.classList.add("was-validated")},!1)})},!1)}();
},{}]},{},["KezH"], null)
//# sourceMappingURL=loginGetUserDataAJAX.a7b733c0.map