import{a as l,n as i}from"./vendor-d873ffc3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u=(o,t)=>{try{const s=JSON.stringify(t);localStorage.setItem(o,s)}catch(s){console.error("Set state error: ",s.message)}},f=o=>{try{const t=localStorage.getItem(o);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}};function d(o){localStorage.removeItem(o)}const m={save:u,load:f,remove:d};function g(){const o=m.load("product");document.querySelector("#header-length").innerHTML=`${o?o.length:"0"}`}g();const S="/food-code/assets/icons-400335bf.svg",p=document.querySelector(".footer-form");p.addEventListener("submit",y);const c=document.querySelector("#user-email");function y(o){o.preventDefault();const t=c.value;l.post("https://food-boutique.b.goit.study/api/subscription",{email:t}).then(s=>{s.status===201?i.Notify.success("Welcome to the Food Boutique! 🥦🍓 With Food Boutique, you are not just subscribing to food, you are signing up for a fresher, fitter, and happier you. Get ready to elevate your wellness journey, one bite at a time!"):i.Notify.failure("Oops, something went wrong...")}).catch(s=>{i.Notify.warning("Subscription already exists!")}),c.value=""}export{g,S as i,m as l};
//# sourceMappingURL=footer-a316bc8b.js.map
