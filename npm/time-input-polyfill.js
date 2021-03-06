// == TIME INPUT POLYFILL AUTO LOADER ==
// This is not the actual time input polyfill. This file checks for input[type=time] support.
// If not supported, it will load the real polyfill, then apply it to all input[type=time] elements.

// The actual polyfill is found here:
// https://cdn.jsdelivr.net/npm/time-input-polyfill@1.0.9/dist/time-input-polyfill.min.js

!function(){function e(t,r,n){function o(u,c){if(!r[u]){if(!t[u]){var l="function"==typeof require&&require;if(!c&&l)return l(u,!0);if(i)return i(u,!0);var p=new Error("Cannot find module '"+u+"'");throw p.code="MODULE_NOT_FOUND",p}var a=r[u]={exports:{}};t[u][0].call(a.exports,function(e){var r=t[u][1][e];return o(r||e)},a,a.exports,e,t,r,n)}return r[u].exports}for(var i="function"==typeof require&&require,u=0;u<n.length;u++)o(n[u]);return o}return e}()({1:[function(e,t,r){var n=e("./core/helpers/supportsTime"),o=e("./core/helpers/loadJS");document.addEventListener("DOMContentLoaded",function(){n||o("https://cdn.jsdelivr.net/npm/time-input-polyfill@1.0.9/dist/time-input-polyfill.min.js",function(){var e=[].slice.call(document.querySelectorAll('input[type="time"]'));e.forEach(function(e){new TimePolyfill(e)})})})},{"./core/helpers/loadJS":2,"./core/helpers/supportsTime":3}],2:[function(e,t,r){t.exports=function(e,t){var r=document.createElement("script");r.src=e,r.onload=t,document.head.appendChild(r)}},{}],3:[function(e,t,r){function n(){var e=document.createElement("input");e.setAttribute("type","time");var t="not-a-time";return e.setAttribute("value",t),e.value!==t}var o=n();window&&(window.supportsTime=o),t&&(t.exports=o)},{}]},{},[1]);
//# sourceMappingURL=time-input-polyfill.auto.min.js.map
