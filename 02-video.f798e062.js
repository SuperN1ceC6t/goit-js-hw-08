function e(e){return e&&e.__esModule?e.default:e}var t,r,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},n.parcelRequired7c6=a);/**
 * @module lib/functions
 *//**
 * Check to see this is a node environment.
 * @type {Boolean}
 *//* global global */const s=void 0!==n&&"[object global]"===({}).toString.call(n);function l(e,t){return 0===e.indexOf(t.toLowerCase())?e:`${t.toLowerCase()}${e.substr(0,1).toUpperCase()}${e.substr(1)}`}function u(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function c(e){return/^https:\/\/player\.vimeo\.com\/video\/\d+/.test(e)}function d(e={}){let t=e.id,r=e.url,n=t||r;if(!n)throw Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(!isNaN(parseFloat(n))&&isFinite(n)&&Math.floor(n)==n)return`https://vimeo.com/${n}`;if(u(n))return n.replace("http:","https:");if(t)throw TypeError(`“${t}” is not a valid video id.`);throw TypeError(`“${n}” is not a vimeo.com url.`)}const h=(e,t,r,n="addEventListener",i="removeEventListener")=>{let o="string"==typeof t?[t]:t;return o.forEach(t=>{e[n](t,r)}),{cancel:()=>o.forEach(t=>e[i](t,r))}},f=void 0!==Array.prototype.indexOf,m="undefined"!=typeof window&&void 0!==window.postMessage;if(!s&&(!f||!m))throw Error("Sorry, the Vimeo Player API is not available in this browser.");!/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,r=Object.defineProperty&&function(){try{// Avoid IE8's broken Object.defineProperty
return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),n=function(e,t,n){r?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n};e.WeakMap=function(){// ECMA-262 23.3 WeakMap Objects
function e(){if(void 0===this)throw TypeError("Constructor WeakMap requires 'new'");// ECMA-262 23.3.1.1 WeakMap([iterable])
if(n(this,"_id","_WeakMap_"+o()+"."+o()),arguments.length>0)throw TypeError("WeakMap iterable is not supported")}function r(e,r){if(!i(e)||!t.call(e,"_id"))throw TypeError(r+" method called on incompatible receiver "+typeof e)}function o(){return Math.random().toString().substring(2)}return(// ECMA-262 23.3.3.2 WeakMap.prototype.delete(key)
n(e.prototype,"delete",function(e){if(r(this,"delete"),!i(e))return!1;var t=e[this._id];return!!t&&t[0]===e&&(delete e[this._id],!0)}),// ECMA-262 23.3.3.3 WeakMap.prototype.get(key)
n(e.prototype,"get",function(e){if(r(this,"get"),i(e)){var t=e[this._id];if(t&&t[0]===e)return t[1]}}),// ECMA-262 23.3.3.4 WeakMap.prototype.has(key)
n(e.prototype,"has",function(e){if(r(this,"has"),!i(e))return!1;var t=e[this._id];return!!t&&t[0]===e}),// ECMA-262 23.3.3.5 WeakMap.prototype.set(key, value)
n(e.prototype,"set",function(e,t){if(r(this,"set"),!i(e))throw TypeError("Invalid value used as weak map key");var o=e[this._id];return o&&o[0]===e?o[1]=t:n(e,this._id,[e,t]),this}),n(e,"_polyfill",!0),e)}()}function i(e){return Object(e)===e}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n?n:{});var p={};t="Promise",// special form of UMD for polyfilling across evironments
(r=void 0!==n?n:p)[t]=r[t]||function(){var e,t,r,n=Object.prototype.toString,i="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;// dammit, IE8.
try{Object.defineProperty({},"x",{}),e=function(e,t,r,n){return Object.defineProperty(e,t,{value:r,writable:!0,configurable:!1!==n})}}catch(t){e=function(e,t,r){return e[t]=r,e}}function o(e,n){r.add(e,n),t||(t=i(r.drain))}// promise duck typing
function a(e){var t,r=typeof e;return null!=e&&("object"==r||"function"==r)&&(t=e.then),"function"==typeof t&&t}function s(){for(var e=0;e<this.chain.length;e++)// NOTE: This is a separate function to isolate
// the `try..catch` so that other code can be
// optimized better
(function(e,t,r){var n,i;try{!1===t?r.reject(e.msg):(n=!0===t?e.msg:t.call(void 0,e.msg))===r.promise?r.reject(TypeError("Promise-chain cycle")):(i=a(n))?i.call(n,r.resolve,r.reject):r.resolve(n)}catch(e){r.reject(e)}})(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function l(e){var t,r=this;// already triggered?
if(!r.triggered){r.triggered=!0,r.def&&(r=r.def);try{(t=a(e))?o(function(){var n=new d(r);try{t.call(e,function(){l.apply(n,arguments)},function(){u.apply(n,arguments)})}catch(e){u.call(n,e)}}):(r.msg=e,r.state=1,r.chain.length>0&&o(s,r))}catch(e){u.call(new d(r),e)}}}function u(e){var t=this;// already triggered?
!t.triggered&&(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&o(s,t))}function c(e,t,r,n){for(var i=0;i<t.length;i++)!function(i){e.resolve(t[i]).then(function(e){r(i,e)},n)}(i)}function d(e){this.def=e,this.triggered=!1}function h(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function f(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");// instance shadowing the inherited "brand"
// to signal an already "initialized" promise
this.__NPO__=1;var t=new h(this);this.then=function(e,r){var n={success:"function"!=typeof e||e,failure:"function"==typeof r&&r};return(// Note: `then(..)` itself can be borrowed to be used against
// a different promise constructor for making the chained promise,
// by substituting a different `this` binding.
n.promise=new this.constructor(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");n.resolve=e,n.reject=t}),t.chain.push(n),0!==t.state&&o(s,t),n.promise)},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,function(e){l.call(t,e)},function(e){u.call(t,e)})}catch(e){u.call(t,e)}}// Note: using a queue instead of array for efficiency
r=function(){var e,r,n;function i(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,o){n=new i(t,o),r?r.next=n:e=n,r=n,n=void 0},drain:function(){var n=e;for(e=r=t=void 0;n;)n.fn.call(n.self),n=n.next}}}();var m=e({},"constructor",f,/*configurable=*/!1);return(// Note: Android 4 cannot use `Object.defineProperty(..)` here
f.prototype=m,// built-in "brand" to signal an "uninitialized" promise
e(m,"__NPO__",0,/*configurable=*/!1),e(f,"resolve",function(e){return(// spec mandated checks
// note: best "isPromise" check that's practical for now
e&&"object"==typeof e&&1===e.__NPO__?e:new this(function(t,r){if("function"!=typeof t||"function"!=typeof r)throw TypeError("Not a function");t(e)}))}),e(f,"reject",function(e){return new this(function(t,r){if("function"!=typeof t||"function"!=typeof r)throw TypeError("Not a function");r(e)})}),e(f,"all",function(e){var t=this;return(// spec mandated checks
"[object Array]"!=n.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t(function(r,n){if("function"!=typeof r||"function"!=typeof n)throw TypeError("Not a function");var i=e.length,o=Array(i),a=0;c(t,e,function(e,t){o[e]=t,++a===i&&r(o)},n)}))}),e(f,"race",function(e){var t=this;return(// spec mandated checks
"[object Array]"!=n.call(e)?t.reject(TypeError("Not an array")):new t(function(r,n){if("function"!=typeof r||"function"!=typeof n)throw TypeError("Not a function");c(t,e,function(e,t){r(t)},n)}))}),f)}(),p?p=r[t]:"function"==typeof define&&define.amd&&define(function(){return r[t]});/**
 * @module lib/callbacks
 */const g=new WeakMap;function y(e,t,r){let n=g.get(e.element)||{};t in n||(n[t]=[]),n[t].push(r),g.set(e.element,n)}function w(e,t){let r=g.get(e.element)||{};return r[t]||[]}function v(e,t,r){let n=g.get(e.element)||{};if(!n[t])return!0;// If no callback is passed, remove all callbacks for the event
if(!r)return n[t]=[],g.set(e.element,n),!0;let i=n[t].indexOf(r);return -1!==i&&n[t].splice(i,1),g.set(e.element,n),n[t]&&0===n[t].length}/**
 * @module lib/embed
 *//**
 * @module lib/postmessage
 */function b(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return(// If the message cannot be parsed, throw the error as a warning
console.warn(e),{})}return e}function E(e,t,r){if(!e.element.contentWindow||!e.element.contentWindow.postMessage)return;let n={method:t};void 0!==r&&(n.value=r);// IE 8 and 9 do not support passing messages, so stringify them
let i=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));i>=8&&i<10&&(n=JSON.stringify(n)),e.element.contentWindow.postMessage(n,e.origin)}const T=["autopause","autoplay","background","byline","color","colors","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function P(e,t={}){return T.reduce((t,r)=>{let n=e.getAttribute(`data-vimeo-${r}`);return(n||""===n)&&(t[r]=""===n?1:n),t},t)}function k({html:e},t){if(!t)throw TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");let r=document.createElement("div");return r.innerHTML=e,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function M(e,t={},r){return new Promise((n,i)=>{if(!u(e))throw TypeError(`“${e}” is not a vimeo.com url.`);let o=`https://vimeo.com/api/oembed.json?url=${encodeURIComponent(e)}`;for(let e in t)t.hasOwnProperty(e)&&(o+=`&${e}=${encodeURIComponent(t[e])}`);let a="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;a.open("GET",o,!0),a.onload=function(){if(404===a.status){i(Error(`“${e}” was not found.`));return}if(403===a.status){i(Error(`“${e}” is not embeddable.`));return}try{let t=JSON.parse(a.responseText);// Check api response for 403 on oembed
if(403===t.domain_status_code){// We still want to create the embed to give users visual feedback
k(t,r),i(Error(`“${e}” is not embeddable.`));return}n(t)}catch(e){i(e)}},a.onerror=function(){let e=a.status?` (${a.status})`:"";i(Error(`There was an error fetching the embed code from Vimeo${e}.`))},a.send()})}/** @typedef {import('./timing-src-connector.types').PlayerControls} PlayerControls *//** @typedef {import('./timing-object.types').TimingObject} TimingObject *//** @typedef {import('./timing-src-connector.types').TimingSrcConnectorOptions} TimingSrcConnectorOptions *//** @typedef {(msg: string) => any} Logger *//** @typedef {import('timing-object.types').TConnectionState} TConnectionState *//**
 * @type {TimingSrcConnectorOptions}
 *
 * For details on these properties and their effects, see the typescript definition referenced above.
 */const C={role:"viewer",autoPlayMuted:!0,allowedDrift:.3,maxAllowedDrift:1,minCheckInterval:.1,maxRateAdjustment:.2,maxTimeToCatchUp:1};class _ extends EventTarget{logger;/**
     * @param {PlayerControls} player
     * @param {TimingObject} timingObject
     * @param {TimingSrcConnectorOptions} options
     * @param {Logger} logger
     */constructor(e,t,r={},n){super(),this.logger=n,this.init(t,e,{...C,...r})}disconnect(){this.dispatchEvent(new Event("disconnect"))}/**
     * @param {TimingObject} timingObject
     * @param {PlayerControls} player
     * @param {TimingSrcConnectorOptions} options
     * @return {Promise<void>}
     */async init(e,t,r){if(await this.waitForTOReadyState(e,"open"),"viewer"===r.role){await this.updatePlayer(e,t,r);let n=h(e,"change",()=>this.updatePlayer(e,t,r)),i=this.maintainPlaybackPosition(e,t,r);this.addEventListener("disconnect",()=>{i.cancel(),n.cancel()})}else{await this.updateTimingObject(e,t);let r=h(t,["seeked","play","pause","ratechange"],()=>this.updateTimingObject(e,t),"on","off");this.addEventListener("disconnect",()=>r.cancel())}}/**
     * Sets the TimingObject's state to reflect that of the player
     *
     * @param {TimingObject} timingObject
     * @param {PlayerControls} player
     * @return {Promise<void>}
     */async updateTimingObject(e,t){e.update({position:await t.getCurrentTime(),velocity:await t.getPaused()?0:await t.getPlaybackRate()})}/**
     * Sets the player's timing state to reflect that of the TimingObject
     *
     * @param {TimingObject} timingObject
     * @param {PlayerControls} player
     * @param {TimingSrcConnectorOptions} options
     * @return {Promise<void>}
     */async updatePlayer(e,t,r){let{position:n,velocity:i}=e.query();"number"==typeof n&&t.setCurrentTime(n),"number"==typeof i&&(0===i?await t.getPaused()===!1&&t.pause():i>0&&(await t.getPaused()===!0&&(await t.play().catch(async e=>{"NotAllowedError"===e.name&&r.autoPlayMuted&&(await t.setMuted(!0),await t.play().catch(e=>console.error("Couldn't play the video from TimingSrcConnector. Error:",e)))}),this.updatePlayer(e,t,r)),await t.getPlaybackRate()!==i&&t.setPlaybackRate(i)))}/**
     * Since video players do not play with 100% time precision, we need to closely monitor
     * our player to be sure it remains in sync with the TimingObject.
     *
     * If out of sync, we use the current conditions and the options provided to determine
     * whether to re-sync via setting currentTime or adjusting the playbackRate
     *
     * @param {TimingObject} timingObject
     * @param {PlayerControls} player
     * @param {TimingSrcConnectorOptions} options
     * @return {{cancel: (function(): void)}}
     */maintainPlaybackPosition(e,t,r){let{allowedDrift:n,maxAllowedDrift:i,minCheckInterval:o,maxRateAdjustment:a,maxTimeToCatchUp:s}=r,l=async()=>{if(0===e.query().velocity||await t.getPaused()===!0)return;let r=e.query().position-await t.getCurrentTime(),o=Math.abs(r);if(this.log(`Drift: ${r}`),o>i)await this.adjustSpeed(t,0),t.setCurrentTime(e.query().position),this.log("Resync by currentTime");else if(o>n){let e=o/s,n=e<a?(a-e)/2:a;await this.adjustSpeed(t,n*Math.sign(r)),this.log("Resync by playbackRate")}},u=setInterval(()=>l(),1e3*Math.min(s,Math.max(o,i)));return{cancel:()=>clearInterval(u)}}/**
     * @param {string} msg
     */log(e){this.logger?.(`TimingSrcConnector: ${e}`)}speedAdjustment=0;/**
     * @param {PlayerControls} player
     * @param {number} newAdjustment
     * @return {Promise<void>}
     */adjustSpeed=async(e,t)=>{if(this.speedAdjustment===t)return;let r=await e.getPlaybackRate()-this.speedAdjustment+t;this.log(`New playbackRate:  ${r}`),await e.setPlaybackRate(r),this.speedAdjustment=t};/**
     * @param {TimingObject} timingObject
     * @param {TConnectionState} state
     * @return {Promise<void>}
     */waitForTOReadyState(e,t){return new Promise(r=>{let n=()=>{e.readyState===t?r():e.addEventListener("readystatechange",n,{once:!0})};n()})}}const x=new WeakMap,j=new WeakMap;let F={};s||(F=/* MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
Terms */function(){let e=function(){let e;let t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],// New WebKit
["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],// Old WebKit
["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],r=0,n=t.length,i={};for(;r<n;r++)if((e=t[r])&&e[1]in document){for(r=0;r<e.length;r++)i[t[0][r]]=e[r];return i}return!1}(),t={fullscreenchange:e.fullscreenchange,fullscreenerror:e.fullscreenerror},r={request:t=>new Promise((n,i)=>{let o=function(){r.off("fullscreenchange",o),n()};r.on("fullscreenchange",o),t=t||document.documentElement;let a=t[e.requestFullscreen]();a instanceof Promise&&a.then(o).catch(i)}),exit:()=>new Promise((t,n)=>{if(!r.isFullscreen){t();return}let i=function(){r.off("fullscreenchange",i),t()};r.on("fullscreenchange",i);let o=document[e.exitFullscreen]();o instanceof Promise&&o.then(i).catch(n)}),on(e,r){let n=t[e];n&&document.addEventListener(n,r)},off(e,r){let n=t[e];n&&document.removeEventListener(n,r)}};return Object.defineProperties(r,{isFullscreen:{get:()=>!!document[e.fullscreenElement]},element:{enumerable:!0,get:()=>document[e.fullscreenElement]},isEnabled:{enumerable:!0,get:()=>!!document[e.fullscreenEnabled]}}),r}(),function(e=document){let t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),r=e=>{"console"in window&&console.error&&console.error(`There was an error creating an embed: ${e}`)};t.forEach(e=>{try{// Skip any that have data-vimeo-defer
if(null!==e.getAttribute("data-vimeo-defer"))return;let t=P(e),n=d(t);M(n,t,e).then(t=>k(t,e)).catch(r)}catch(e){r(e)}})}(),function(e=document){// Prevent execution if users include the player.js script multiple times.
window.VimeoPlayerResizeEmbeds_||(window.VimeoPlayerResizeEmbeds_=!0,window.addEventListener("message",t=>{if(!u(t.origin)||!t.data||"spacechange"!==t.data.event)return;let r=e.querySelectorAll("iframe");for(let e=0;e<r.length;e++){if(r[e].contentWindow!==t.source)continue;// Change padding-bottom of the enclosing div to accommodate
// card carousel without distorting aspect ratio
let n=r[e].parentElement;n.style.paddingBottom=`${t.data.data[0].bottom}px`;break}}))}(),function(e=document){//  Prevent execution if users include the player.js script multiple times.
window.VimeoSeoMetadataAppended||(window.VimeoSeoMetadataAppended=!0,window.addEventListener("message",t=>{if(!u(t.origin))return;let r=b(t.data);if(!r||"ready"!==r.event)return;let n=e.querySelectorAll("iframe");for(let e=0;e<n.length;e++){let r=n[e],i=r.contentWindow===t.source;if(c(r.src)&&i){let e=new N(r);e.callMethod("appendVideoMetadata",window.location.href)}}}))}(),function(e=document){//  Prevent execution if users include the player.js script multiple times.
if(window.VimeoCheckedUrlTimeParam)return;window.VimeoCheckedUrlTimeParam=!0;let t=e=>{"console"in window&&console.error&&console.error(`There was an error getting video Id: ${e}`)};window.addEventListener("message",r=>{if(!u(r.origin))return;let n=b(r.data);if(!n||"ready"!==n.event)return;let i=e.querySelectorAll("iframe");for(let e=0;e<i.length;e++){let n=i[e],o=n.contentWindow===r.source;if(c(n.src)&&o){let e=new N(n);e.getVideoId().then(t=>{let r=RegExp(`[?&]vimeo_t_${t}=([^&#]*)`).exec(window.location.href);if(r&&r[1]){let t=decodeURI(r[1]);e.setCurrentTime(t)}}).catch(t)}}})}());var N=class{/**
     * Create a Player.
     *
     * @param {(HTMLIFrameElement|HTMLElement|string|jQuery)} element A reference to the Vimeo
     *        player iframe, and id, or a jQuery object.
     * @param {object} [options] oEmbed parameters to use when creating an embed in the element.
     * @return {Player}
     */constructor(t,r={}){var n;// Not an element!
if(window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!=typeof document&&"string"==typeof t&&(t=document.getElementById(t)),!((n=t)&&1===n.nodeType&&"nodeName"in n&&n.ownerDocument&&n.ownerDocument.defaultView))throw TypeError("You must pass either a valid element or a valid id.");// Already initialized an embed in this div, so grab the iframe
if("IFRAME"!==t.nodeName){let e=t.querySelector("iframe");e&&(t=e)}// iframe url is not a Vimeo url
if("IFRAME"===t.nodeName&&!u(t.getAttribute("src")||""))throw Error("The player element passed isn’t a Vimeo embed.");// If there is already a player object in the map, return that
if(x.has(t))return x.get(t);this._window=t.ownerDocument.defaultView,this.element=t,this.origin="*";let i=new/*@__PURE__*/(e(p))((e,n)=>{if(this._onMessage=t=>{if(!u(t.origin)||this.element.contentWindow!==t.source)return;"*"===this.origin&&(this.origin=t.origin);let r=b(t.data),i=r&&"error"===r.event,o=i&&r.data&&"ready"===r.data.method;if(o){let e=Error(r.data.message);e.name=r.data.name,n(e);return}let a=r&&"ready"===r.event,s=r&&"ping"===r.method;if(a||s){this.element.setAttribute("data-ready","true"),e();return}!function(e,t){let r;t=b(t);let n=[];if(t.event){if("error"===t.event){let r=w(e,t.data.method);r.forEach(r=>{let n=Error(t.data.message);n.name=t.data.name,r.reject(n),v(e,t.data.method,r)})}n=w(e,`event:${t.event}`),r=t.data}else if(t.method){let i=function(e,t){let r=w(e,t);if(r.length<1)return!1;let n=r.shift();return v(e,t,n),n}(e,t.method);i&&(n.push(i),r=t.value)}n.forEach(t=>{try{if("function"==typeof t){t.call(e,r);return}t.resolve(r)}catch(e){// empty
}})}(this,r)},this._window.addEventListener("message",this._onMessage),"IFRAME"!==this.element.nodeName){let e=P(t,r),i=d(e);M(i,e,t).then(e=>{let r=k(e,t);return(// Overwrite element with the new iframe,
// but store reference to the original element
this.element=r,this._originalElement=t,!function(e,t){let r=g.get(e);g.set(t,r),g.delete(e)}(t,r),x.set(this.element,this),e)}).catch(n)}});if(// Store a copy of this Player in the map
j.set(this,i),x.set(this.element,this),"IFRAME"===this.element.nodeName&&E(this,"ping"),F.isEnabled){let e=()=>F.exit();this.fullscreenchangeHandler=()=>{F.isFullscreen?y(this,"event:exitFullscreen",e):v(this,"event:exitFullscreen",e),// eslint-disable-next-line
this.ready().then(()=>{E(this,"fullscreenchange",F.isFullscreen)})},F.on("fullscreenchange",this.fullscreenchangeHandler)}return this}/**
     * Get a promise for a method.
     *
     * @param {string} name The API method to call.
     * @param {Object} [args={}] Arguments to send via postMessage.
     * @return {Promise}
     */callMethod(t,r={}){return new/*@__PURE__*/(e(p))((e,n)=>this.ready().then(()=>{y(this,t,{resolve:e,reject:n}),E(this,t,r)}).catch(n))}/**
     * Get a promise for the value of a player property.
     *
     * @param {string} name The property name
     * @return {Promise}
     */get(t){return new/*@__PURE__*/(e(p))((e,r)=>(t=l(t,"get"),this.ready().then(()=>{y(this,t,{resolve:e,reject:r}),E(this,t)}).catch(r)))}/**
     * Get a promise for setting the value of a player property.
     *
     * @param {string} name The API method to call.
     * @param {mixed} value The value to set.
     * @return {Promise}
     */set(t,r){return new/*@__PURE__*/(e(p))((e,n)=>{if(t=l(t,"set"),null==r)throw TypeError("There must be a value to set.");// We are storing the resolve/reject handlers to call later, so we
// can’t return here.
// eslint-disable-next-line promise/always-return
return this.ready().then(()=>{y(this,t,{resolve:e,reject:n}),E(this,t,r)}).catch(n)})}/**
     * Add an event listener for the specified event. Will call the
     * callback with a single parameter, `data`, that contains the data for
     * that event.
     *
     * @param {string} eventName The name of the event.
     * @param {function(*)} callback The function to call when the event fires.
     * @return {void}
     */on(e,t){if(!e)throw TypeError("You must pass an event name.");if(!t)throw TypeError("You must pass a callback function.");if("function"!=typeof t)throw TypeError("The callback must be a function.");let r=w(this,`event:${e}`);0===r.length&&this.callMethod("addEventListener",e).catch(()=>{// Ignore the error. There will be an error event fired that
// will trigger the error callback if they are listening.
}),y(this,`event:${e}`,t)}/**
     * Remove an event listener for the specified event. Will remove all
     * listeners for that event if a `callback` isn’t passed, or only that
     * specific callback if it is passed.
     *
     * @param {string} eventName The name of the event.
     * @param {function} [callback] The specific callback to remove.
     * @return {void}
     */off(e,t){if(!e)throw TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw TypeError("The callback must be a function.");let r=v(this,`event:${e}`,t);// If there are no callbacks left, remove the listener
r&&this.callMethod("removeEventListener",e).catch(e=>{// Ignore the error. There will be an error event fired that
// will trigger the error callback if they are listening.
})}/**
     * A promise to load a new video.
     *
     * @promise LoadVideoPromise
     * @fulfill {number} The video with this id or url successfully loaded.
     * @reject {TypeError} The id was not a number.
     *//**
     * Load a new video into this embed. The promise will be resolved if
     * the video is successfully loaded, or it will be rejected if it could
     * not be loaded.
     *
     * @param {number|string|object} options The id of the video, the url of the video, or an object with embed options.
     * @return {LoadVideoPromise}
     */loadVideo(e){return this.callMethod("loadVideo",e)}/**
     * A promise to perform an action when the Player is ready.
     *
     * @todo document errors
     * @promise LoadVideoPromise
     * @fulfill {void}
     *//**
     * Trigger a function when the player iframe has initialized. You do not
     * need to wait for `ready` to trigger to begin adding event listeners
     * or calling other methods.
     *
     * @return {ReadyPromise}
     */ready(){let t=j.get(this)||new/*@__PURE__*/(e(p))((e,t)=>{t(Error("Unknown player. Probably unloaded."))});return /*@__PURE__*/e(p).resolve(t)}/**
     * A promise to add a cue point to the player.
     *
     * @promise AddCuePointPromise
     * @fulfill {string} The id of the cue point to use for removeCuePoint.
     * @reject {RangeError} the time was less than 0 or greater than the
     *         video’s duration.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     *//**
     * Add a cue point to the player.
     *
     * @param {number} time The time for the cue point.
     * @param {object} [data] Arbitrary data to be returned with the cue point.
     * @return {AddCuePointPromise}
     */addCuePoint(e,t={}){return this.callMethod("addCuePoint",{time:e,data:t})}/**
     * A promise to remove a cue point from the player.
     *
     * @promise AddCuePointPromise
     * @fulfill {string} The id of the cue point that was removed.
     * @reject {InvalidCuePoint} The cue point with the specified id was not
     *         found.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     *//**
     * Remove a cue point from the video.
     *
     * @param {string} id The id of the cue point to remove.
     * @return {RemoveCuePointPromise}
     */removeCuePoint(e){return this.callMethod("removeCuePoint",e)}/**
     * A representation of a text track on a video.
     *
     * @typedef {Object} VimeoTextTrack
     * @property {string} language The ISO language code.
     * @property {string} kind The kind of track it is (captions or subtitles).
     * @property {string} label The human‐readable label for the track.
     *//**
     * A promise to enable a text track.
     *
     * @promise EnableTextTrackPromise
     * @fulfill {VimeoTextTrack} The text track that was enabled.
     * @reject {InvalidTrackLanguageError} No track was available with the
     *         specified language.
     * @reject {InvalidTrackError} No track was available with the specified
     *         language and kind.
     *//**
     * Enable the text track with the specified language, and optionally the
     * specified kind (captions or subtitles).
     *
     * When set via the API, the track language will not change the viewer’s
     * stored preference.
     *
     * @param {string} language The two‐letter language code.
     * @param {string} [kind] The kind of track to enable (captions or subtitles).
     * @return {EnableTextTrackPromise}
     */enableTextTrack(e,t){if(!e)throw TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}/**
     * A promise to disable the active text track.
     *
     * @promise DisableTextTrackPromise
     * @fulfill {void} The track was disabled.
     *//**
     * Disable the currently-active text track.
     *
     * @return {DisableTextTrackPromise}
     */disableTextTrack(){return this.callMethod("disableTextTrack")}/**
     * A promise to pause the video.
     *
     * @promise PausePromise
     * @fulfill {void} The video was paused.
     *//**
     * Pause the video if it’s playing.
     *
     * @return {PausePromise}
     */pause(){return this.callMethod("pause")}/**
     * A promise to play the video.
     *
     * @promise PlayPromise
     * @fulfill {void} The video was played.
     *//**
     * Play the video if it’s paused. **Note:** on iOS and some other
     * mobile devices, you cannot programmatically trigger play. Once the
     * viewer has tapped on the play button in the player, however, you
     * will be able to use this function.
     *
     * @return {PlayPromise}
     */play(){return this.callMethod("play")}/**
     * Request that the player enters fullscreen.
     * @return {Promise}
     */requestFullscreen(){return F.isEnabled?F.request(this.element):this.callMethod("requestFullscreen")}/**
     * Request that the player exits fullscreen.
     * @return {Promise}
     */exitFullscreen(){return F.isEnabled?F.exit():this.callMethod("exitFullscreen")}/**
     * Returns true if the player is currently fullscreen.
     * @return {Promise}
     */getFullscreen(){return F.isEnabled?/*@__PURE__*/e(p).resolve(F.isFullscreen):this.get("fullscreen")}/**
     * Request that the player enters picture-in-picture.
     * @return {Promise}
     */requestPictureInPicture(){return this.callMethod("requestPictureInPicture")}/**
     * Request that the player exits picture-in-picture.
     * @return {Promise}
     */exitPictureInPicture(){return this.callMethod("exitPictureInPicture")}/**
     * Returns true if the player is currently picture-in-picture.
     * @return {Promise}
     */getPictureInPicture(){return this.get("pictureInPicture")}/**
     * A promise to prompt the viewer to initiate remote playback.
     *
     * @promise RemotePlaybackPromptPromise
     * @fulfill {void}
     * @reject {NotFoundError} No remote playback device is available.
     *//**
     * Request to prompt the user to initiate remote playback.
     *
     * @return {RemotePlaybackPromptPromise}
     */remotePlaybackPrompt(){return this.callMethod("remotePlaybackPrompt")}/**
     * A promise to unload the video.
     *
     * @promise UnloadPromise
     * @fulfill {void} The video was unloaded.
     *//**
     * Return the player to its initial state.
     *
     * @return {UnloadPromise}
     */unload(){return this.callMethod("unload")}/**
     * Cleanup the player and remove it from the DOM
     *
     * It won't be usable and a new one should be constructed
     *  in order to do any operations.
     *
     * @return {Promise}
     */destroy(){return new/*@__PURE__*/(e(p))(e=>{// If the clip is private there is a case where the element stays the
// div element. Destroy should reset the div and remove the iframe child.
if(j.delete(this),x.delete(this.element),this._originalElement&&(x.delete(this._originalElement),this._originalElement.removeAttribute("data-vimeo-initialized")),this.element&&"IFRAME"===this.element.nodeName&&this.element.parentNode&&(this.element.parentNode.parentNode&&this._originalElement&&this._originalElement!==this.element.parentNode?this.element.parentNode.parentNode.removeChild(this.element.parentNode):this.element.parentNode.removeChild(this.element)),this.element&&"DIV"===this.element.nodeName&&this.element.parentNode){this.element.removeAttribute("data-vimeo-initialized");let e=this.element.querySelector("iframe");e&&e.parentNode&&(e.parentNode.parentNode&&this._originalElement&&this._originalElement!==e.parentNode?e.parentNode.parentNode.removeChild(e.parentNode):e.parentNode.removeChild(e))}this._window.removeEventListener("message",this._onMessage),F.isEnabled&&F.off("fullscreenchange",this.fullscreenchangeHandler),e()})}/**
     * A promise to get the autopause behavior of the video.
     *
     * @promise GetAutopausePromise
     * @fulfill {boolean} Whether autopause is turned on or off.
     * @reject {UnsupportedError} Autopause is not supported with the current
     *         player or browser.
     *//**
     * Get the autopause behavior for this player.
     *
     * @return {GetAutopausePromise}
     */getAutopause(){return this.get("autopause")}/**
     * A promise to set the autopause behavior of the video.
     *
     * @promise SetAutopausePromise
     * @fulfill {boolean} Whether autopause is turned on or off.
     * @reject {UnsupportedError} Autopause is not supported with the current
     *         player or browser.
     *//**
     * Enable or disable the autopause behavior of this player.
     *
     * By default, when another video is played in the same browser, this
     * player will automatically pause. Unless you have a specific reason
     * for doing so, we recommend that you leave autopause set to the
     * default (`true`).
     *
     * @param {boolean} autopause
     * @return {SetAutopausePromise}
     */setAutopause(e){return this.set("autopause",e)}/**
     * A promise to get the buffered property of the video.
     *
     * @promise GetBufferedPromise
     * @fulfill {Array} Buffered Timeranges converted to an Array.
     *//**
     * Get the buffered property of the video.
     *
     * @return {GetBufferedPromise}
     */getBuffered(){return this.get("buffered")}/**
     * @typedef {Object} CameraProperties
     * @prop {number} props.yaw - Number between 0 and 360.
     * @prop {number} props.pitch - Number between -90 and 90.
     * @prop {number} props.roll - Number between -180 and 180.
     * @prop {number} props.fov - The field of view in degrees.
     *//**
     * A promise to get the camera properties of the player.
     *
     * @promise GetCameraPromise
     * @fulfill {CameraProperties} The camera properties.
     *//**
     * For 360° videos get the camera properties for this player.
     *
     * @return {GetCameraPromise}
     */getCameraProps(){return this.get("cameraProps")}/**
     * A promise to set the camera properties of the player.
     *
     * @promise SetCameraPromise
     * @fulfill {Object} The camera was successfully set.
     * @reject {RangeError} The range was out of bounds.
     *//**
     * For 360° videos set the camera properties for this player.
     *
     * @param {CameraProperties} camera The camera properties
     * @return {SetCameraPromise}
     */setCameraProps(e){return this.set("cameraProps",e)}/**
     * A representation of a chapter.
     *
     * @typedef {Object} VimeoChapter
     * @property {number} startTime The start time of the chapter.
     * @property {object} title The title of the chapter.
     * @property {number} index The place in the order of Chapters. Starts at 1.
     *//**
     * A promise to get chapters for the video.
     *
     * @promise GetChaptersPromise
     * @fulfill {VimeoChapter[]} The chapters for the video.
     *//**
     * Get an array of all the chapters for the video.
     *
     * @return {GetChaptersPromise}
     */getChapters(){return this.get("chapters")}/**
     * A promise to get the currently active chapter.
     *
     * @promise GetCurrentChaptersPromise
     * @fulfill {VimeoChapter|undefined} The current chapter for the video.
     *//**
     * Get the currently active chapter for the video.
     *
     * @return {GetCurrentChaptersPromise}
     */getCurrentChapter(){return this.get("currentChapter")}/**
     * A promise to get the accent color of the player.
     *
     * @promise GetColorPromise
     * @fulfill {string} The hex color of the player.
     *//**
     * Get the accent color for this player. Note this is deprecated in place of `getColorTwo`.
     *
     * @return {GetColorPromise}
     */getColor(){return this.get("color")}/**
     * A promise to get all colors for the player in an array.
     *
     * @promise GetColorsPromise
     * @fulfill {string[]} The hex colors of the player.
     *//**
     * Get all the colors for this player in an array: [colorOne, colorTwo, colorThree, colorFour]
     *
     * @return {GetColorPromise}
     */getColors(){return /*@__PURE__*/e(p).all([this.get("colorOne"),this.get("colorTwo"),this.get("colorThree"),this.get("colorFour")])}/**
     * A promise to set the accent color of the player.
     *
     * @promise SetColorPromise
     * @fulfill {string} The color was successfully set.
     * @reject {TypeError} The string was not a valid hex or rgb color.
     * @reject {ContrastError} The color was set, but the contrast is
     *         outside of the acceptable range.
     * @reject {EmbedSettingsError} The owner of the player has chosen to
     *         use a specific color.
     *//**
     * Set the accent color of this player to a hex or rgb string. Setting the
     * color may fail if the owner of the video has set their embed
     * preferences to force a specific color.
     * Note this is deprecated in place of `setColorTwo`.
     *
     * @param {string} color The hex or rgb color string to set.
     * @return {SetColorPromise}
     */setColor(e){return this.set("color",e)}/**
     * A promise to set all colors for the player.
     *
     * @promise SetColorsPromise
     * @fulfill {string[]} The colors were successfully set.
     * @reject {TypeError} The string was not a valid hex or rgb color.
     * @reject {ContrastError} The color was set, but the contrast is
     *         outside of the acceptable range.
     * @reject {EmbedSettingsError} The owner of the player has chosen to
     *         use a specific color.
     *//**
     * Set the colors of this player to a hex or rgb string. Setting the
     * color may fail if the owner of the video has set their embed
     * preferences to force a specific color.
     * The colors should be passed in as an array: [colorOne, colorTwo, colorThree, colorFour].
     * If a color should not be set, the index in the array can be left as null.
     *
     * @param {string[]} colors Array of the hex or rgb color strings to set.
     * @return {SetColorsPromise}
     */setColors(t){if(!Array.isArray(t))return new/*@__PURE__*/(e(p))((e,t)=>t(TypeError("Argument must be an array.")));let r=new/*@__PURE__*/(e(p))(e=>e(null)),n=[t[0]?this.set("colorOne",t[0]):r,t[1]?this.set("colorTwo",t[1]):r,t[2]?this.set("colorThree",t[2]):r,t[3]?this.set("colorFour",t[3]):r];return /*@__PURE__*/e(p).all(n)}/**
     * A representation of a cue point.
     *
     * @typedef {Object} VimeoCuePoint
     * @property {number} time The time of the cue point.
     * @property {object} data The data passed when adding the cue point.
     * @property {string} id The unique id for use with removeCuePoint.
     *//**
     * A promise to get the cue points of a video.
     *
     * @promise GetCuePointsPromise
     * @fulfill {VimeoCuePoint[]} The cue points added to the video.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     *//**
     * Get an array of the cue points added to the video.
     *
     * @return {GetCuePointsPromise}
     */getCuePoints(){return this.get("cuePoints")}/**
     * A promise to get the current time of the video.
     *
     * @promise GetCurrentTimePromise
     * @fulfill {number} The current time in seconds.
     *//**
     * Get the current playback position in seconds.
     *
     * @return {GetCurrentTimePromise}
     */getCurrentTime(){return this.get("currentTime")}/**
     * A promise to set the current time of the video.
     *
     * @promise SetCurrentTimePromise
     * @fulfill {number} The actual current time that was set.
     * @reject {RangeError} the time was less than 0 or greater than the
     *         video’s duration.
     *//**
     * Set the current playback position in seconds. If the player was
     * paused, it will remain paused. Likewise, if the player was playing,
     * it will resume playing once the video has buffered.
     *
     * You can provide an accurate time and the player will attempt to seek
     * to as close to that time as possible. The exact time will be the
     * fulfilled value of the promise.
     *
     * @param {number} currentTime
     * @return {SetCurrentTimePromise}
     */setCurrentTime(e){return this.set("currentTime",e)}/**
     * A promise to get the duration of the video.
     *
     * @promise GetDurationPromise
     * @fulfill {number} The duration in seconds.
     *//**
     * Get the duration of the video in seconds. It will be rounded to the
     * nearest second before playback begins, and to the nearest thousandth
     * of a second after playback begins.
     *
     * @return {GetDurationPromise}
     */getDuration(){return this.get("duration")}/**
     * A promise to get the ended state of the video.
     *
     * @promise GetEndedPromise
     * @fulfill {boolean} Whether or not the video has ended.
     *//**
     * Get the ended state of the video. The video has ended if
     * `currentTime === duration`.
     *
     * @return {GetEndedPromise}
     */getEnded(){return this.get("ended")}/**
     * A promise to get the loop state of the player.
     *
     * @promise GetLoopPromise
     * @fulfill {boolean} Whether or not the player is set to loop.
     *//**
     * Get the loop state of the player.
     *
     * @return {GetLoopPromise}
     */getLoop(){return this.get("loop")}/**
     * A promise to set the loop state of the player.
     *
     * @promise SetLoopPromise
     * @fulfill {boolean} The loop state that was set.
     *//**
     * Set the loop state of the player. When set to `true`, the player
     * will start over immediately once playback ends.
     *
     * @param {boolean} loop
     * @return {SetLoopPromise}
     */setLoop(e){return this.set("loop",e)}/**
     * A promise to set the muted state of the player.
     *
     * @promise SetMutedPromise
     * @fulfill {boolean} The muted state that was set.
     *//**
     * Set the muted state of the player. When set to `true`, the player
     * volume will be muted.
     *
     * @param {boolean} muted
     * @return {SetMutedPromise}
     */setMuted(e){return this.set("muted",e)}/**
     * A promise to get the muted state of the player.
     *
     * @promise GetMutedPromise
     * @fulfill {boolean} Whether or not the player is muted.
     *//**
     * Get the muted state of the player.
     *
     * @return {GetMutedPromise}
     */getMuted(){return this.get("muted")}/**
     * A promise to get the paused state of the player.
     *
     * @promise GetLoopPromise
     * @fulfill {boolean} Whether or not the video is paused.
     *//**
     * Get the paused state of the player.
     *
     * @return {GetLoopPromise}
     */getPaused(){return this.get("paused")}/**
     * A promise to get the playback rate of the player.
     *
     * @promise GetPlaybackRatePromise
     * @fulfill {number} The playback rate of the player on a scale from 0 to 2.
     *//**
     * Get the playback rate of the player on a scale from `0` to `2`.
     *
     * @return {GetPlaybackRatePromise}
     */getPlaybackRate(){return this.get("playbackRate")}/**
     * A promise to set the playbackrate of the player.
     *
     * @promise SetPlaybackRatePromise
     * @fulfill {number} The playback rate was set.
     * @reject {RangeError} The playback rate was less than 0 or greater than 2.
     *//**
     * Set the playback rate of the player on a scale from `0` to `2`. When set
     * via the API, the playback rate will not be synchronized to other
     * players or stored as the viewer's preference.
     *
     * @param {number} playbackRate
     * @return {SetPlaybackRatePromise}
     */setPlaybackRate(e){return this.set("playbackRate",e)}/**
     * A promise to get the played property of the video.
     *
     * @promise GetPlayedPromise
     * @fulfill {Array} Played Timeranges converted to an Array.
     *//**
     * Get the played property of the video.
     *
     * @return {GetPlayedPromise}
     */getPlayed(){return this.get("played")}/**
     * A promise to get the qualities available of the current video.
     *
     * @promise GetQualitiesPromise
     * @fulfill {Array} The qualities of the video.
     *//**
     * Get the qualities of the current video.
     *
     * @return {GetQualitiesPromise}
     */getQualities(){return this.get("qualities")}/**
     * A promise to get the current set quality of the video.
     *
     * @promise GetQualityPromise
     * @fulfill {string} The current set quality.
     *//**
     * Get the current set quality of the video.
     *
     * @return {GetQualityPromise}
     */getQuality(){return this.get("quality")}/**
     * A promise to set the video quality.
     *
     * @promise SetQualityPromise
     * @fulfill {number} The quality was set.
     * @reject {RangeError} The quality is not available.
     *//**
     * Set a video quality.
     *
     * @param {string} quality
     * @return {SetQualityPromise}
     */setQuality(e){return this.set("quality",e)}/**
     * A promise to get the remote playback availability.
     *
     * @promise RemotePlaybackAvailabilityPromise
     * @fulfill {boolean} Whether remote playback is available.
     *//**
     * Get the availability of remote playback.
     *
     * @return {RemotePlaybackAvailabilityPromise}
     */getRemotePlaybackAvailability(){return this.get("remotePlaybackAvailability")}/**
     * A promise to get the current remote playback state.
     *
     * @promise RemotePlaybackStatePromise
     * @fulfill {string} The state of the remote playback: connecting, connected, or disconnected.
     *//**
     * Get the current remote playback state.
     *
     * @return {RemotePlaybackStatePromise}
     */getRemotePlaybackState(){return this.get("remotePlaybackState")}/**
     * A promise to get the seekable property of the video.
     *
     * @promise GetSeekablePromise
     * @fulfill {Array} Seekable Timeranges converted to an Array.
     *//**
     * Get the seekable property of the video.
     *
     * @return {GetSeekablePromise}
     */getSeekable(){return this.get("seekable")}/**
     * A promise to get the seeking property of the player.
     *
     * @promise GetSeekingPromise
     * @fulfill {boolean} Whether or not the player is currently seeking.
     *//**
     * Get if the player is currently seeking.
     *
     * @return {GetSeekingPromise}
     */getSeeking(){return this.get("seeking")}/**
     * A promise to get the text tracks of a video.
     *
     * @promise GetTextTracksPromise
     * @fulfill {VimeoTextTrack[]} The text tracks associated with the video.
     *//**
     * Get an array of the text tracks that exist for the video.
     *
     * @return {GetTextTracksPromise}
     */getTextTracks(){return this.get("textTracks")}/**
     * A promise to get the embed code for the video.
     *
     * @promise GetVideoEmbedCodePromise
     * @fulfill {string} The `<iframe>` embed code for the video.
     *//**
     * Get the `<iframe>` embed code for the video.
     *
     * @return {GetVideoEmbedCodePromise}
     */getVideoEmbedCode(){return this.get("videoEmbedCode")}/**
     * A promise to get the id of the video.
     *
     * @promise GetVideoIdPromise
     * @fulfill {number} The id of the video.
     *//**
     * Get the id of the video.
     *
     * @return {GetVideoIdPromise}
     */getVideoId(){return this.get("videoId")}/**
     * A promise to get the title of the video.
     *
     * @promise GetVideoTitlePromise
     * @fulfill {number} The title of the video.
     *//**
     * Get the title of the video.
     *
     * @return {GetVideoTitlePromise}
     */getVideoTitle(){return this.get("videoTitle")}/**
     * A promise to get the native width of the video.
     *
     * @promise GetVideoWidthPromise
     * @fulfill {number} The native width of the video.
     *//**
     * Get the native width of the currently‐playing video. The width of
     * the highest‐resolution available will be used before playback begins.
     *
     * @return {GetVideoWidthPromise}
     */getVideoWidth(){return this.get("videoWidth")}/**
     * A promise to get the native height of the video.
     *
     * @promise GetVideoHeightPromise
     * @fulfill {number} The native height of the video.
     *//**
     * Get the native height of the currently‐playing video. The height of
     * the highest‐resolution available will be used before playback begins.
     *
     * @return {GetVideoHeightPromise}
     */getVideoHeight(){return this.get("videoHeight")}/**
     * A promise to get the vimeo.com url for the video.
     *
     * @promise GetVideoUrlPromise
     * @fulfill {number} The vimeo.com url for the video.
     * @reject {PrivacyError} The url isn’t available because of the video’s privacy setting.
     *//**
     * Get the vimeo.com url for the video.
     *
     * @return {GetVideoUrlPromise}
     */getVideoUrl(){return this.get("videoUrl")}/**
     * A promise to get the volume level of the player.
     *
     * @promise GetVolumePromise
     * @fulfill {number} The volume level of the player on a scale from 0 to 1.
     *//**
     * Get the current volume level of the player on a scale from `0` to `1`.
     *
     * Most mobile devices do not support an independent volume from the
     * system volume. In those cases, this method will always return `1`.
     *
     * @return {GetVolumePromise}
     */getVolume(){return this.get("volume")}/**
     * A promise to set the volume level of the player.
     *
     * @promise SetVolumePromise
     * @fulfill {number} The volume was set.
     * @reject {RangeError} The volume was less than 0 or greater than 1.
     *//**
     * Set the volume of the player on a scale from `0` to `1`. When set
     * via the API, the volume level will not be synchronized to other
     * players or stored as the viewer’s preference.
     *
     * Most mobile devices do not support setting the volume. An error will
     * *not* be triggered in that situation.
     *
     * @param {number} volume
     * @return {SetVolumePromise}
     */setVolume(e){return this.set("volume",e)}/** @typedef {import('./lib/timing-object.types').TimingObject} TimingObject *//** @typedef {import('./lib/timing-src-connector.types').TimingSrcConnectorOptions} TimingSrcConnectorOptions *//** @typedef {import('./lib/timing-src-connector').TimingSrcConnector} TimingSrcConnector *//**
     * Connects a TimingObject to the video player (https://webtiming.github.io/timingobject/)
     *
     * @param {TimingObject} timingObject
     * @param {TimingSrcConnectorOptions} options
     *
     * @return {Promise<TimingSrcConnector>}
     */async setTimingSrc(e,t){if(!e)throw TypeError("A Timing Object must be provided.");await this.ready();let r=new _(this,e,t);return E(this,"notifyTimingObjectConnect"),r.addEventListener("disconnect",()=>E(this,"notifyTimingObjectDisconnect")),r}},A=a("kEUo3");const S=document.querySelector("iframe"),R=new N(S);let q=0;R.on("timeupdate",(0,A.throttle)(function(e){q=e.seconds,localStorage.setItem("videoplayer-current-time",q)},1e3)),R.setCurrentTime(localStorage.getItem("videoplayer-current-time"));//# sourceMappingURL=02-video.f798e062.js.map

//# sourceMappingURL=02-video.f798e062.js.map
