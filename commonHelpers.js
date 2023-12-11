import{l as n,g as p,i as y,o as v}from"./assets/footer-b6985027.js";import{f as L}from"./assets/vendor-d873ffc3.js";const m="/food-code/assets/yellow-shopping-basket-7c9e4c8c.webp",f="/food-code/assets/yellow-shopping-basket@2x-16bffe16.webp",S="/food-code/assets/yellow-shopping-basket_mob-d3bbad76.webp",M="/food-code/assets/yellow-shopping-basket_mob@2x-b0f89c1a.webp",w="/food-code/assets/yellow-shopping-basket-014cc855.png";function g(){const e=n.load("product");document.querySelector(".cart-number-purchases").innerHTML=`${e?e.length:"0"} `}g();const s=n.load("product");document.addEventListener("DOMContentLoaded",e=>{s.length===0&&(document.querySelector(".section-cart").innerHTML=a()),b()});function h(e){if(e){const t=e.map(r=>T(r)).join("");document.querySelector(".cart-shopping-list").innerHTML=t}else document.querySelector(".section-cart").innerHTML=a()}h(s);document.querySelector(".delete-all-box").addEventListener("click",()=>{n.remove("product"),p(),document.querySelector(".section-cart").innerHTML=a()});const i=document.querySelector(".cart-shopping-list ");i.addEventListener("click",q);function q(e){if(!e.target.closest(".cart-delete-icon"))return;localStorage.setItem("product",JSON.stringify());const r=e.target.closest("li").dataset.productId,o=s.findIndex(c=>c.id===r);o!==-1&&s.splice(o,1),localStorage.setItem("product",JSON.stringify(s)),h(s),d(),b(),g(),p(),s.length===0&&(document.querySelector(".section-cart").innerHTML=a())}function T(e){let{id:t,name:r,img:o,category:c,size:l,price:u}=e;return`
      <li class="cart-shopping-item" data-product-id=${t}>
      <img
        class="cart-shopping-img"
        src="${o}"
        alt="${r}"
      />
      <div class="cart-item-info">
        <div class="cart-info-top">
          <p class="cart-info-name-product">${r}</p>
          <svg class="cart-delete-icon">
              <use href="${y}#icon-close"></use>
          </svg>
        </div>
  
        <ul class="cart-properties-list">
          <li class="cart-properties-item">
            <h3 class="cart-properties-caption">Category:</h3>
            <p class="cart-properties-subtitle">${c}</p>
          </li>
          <li class="cart-properties-item">
            <h3 class="cart-properties-caption">Size:</h3>
            <p class="cart-properties-subtitle">${l}</p>
          </li>
        </ul>
  
        <div class="cart-info-bottom">
         <p class="cart-info-price">&#36;<span class="js-cart-info-price">${u}</span></p>
  
          <div class="cart-counter-wrapper">
            <button class="cart-counter-decrement" type="button" data-action="minus">-</button>
            <span class="cart-counter-value" data-counter>1</span>
            <button class="cart-counter-increment" type="button" data-action="plus">+</button>
          </div>
        </div>
      </div>
    </li>
      `}function a(){return`
  <div class="cart-empty">
  <picture class="cart-empty-retina">
        <source
          media="(min-width: 1440px)"
          srcset="
            ${m} 1x,
            ${f} 2x
          "
        />
        <source
          media="(min-width: 768px)"
          srcset="
          ${m} 1x,
          ${f} 2x
          "
        />
        <source
          media="(min-width: 320px)"
          srcset="
          ${S} 1x,
          ${M} 2x
          "
        />
  <img
    class="cart-empty-img"
    src="${w}"
    alt="Empty cart"
  />
  <p class="cart-empty-text">
    Your basket is <a href="#" class="cart-empty-link">empty...</a>
  </p>
  <p class="cart-empty-description">
    Go to the main page to select your favorite products and add them to the
    cart.
  </p>
</div>
      `}function d(){const e=document.querySelectorAll(".cart-shopping-item"),t=document.querySelector(".js-total-price");let r=0;e.forEach(o=>{const c=o.querySelector("[data-counter]"),l=o.querySelector(".js-cart-info-price"),u=Number(c.innerHTML)*Number(l.innerHTML);r+=u}),t.innerHTML=r.toFixed(2)}d();window.addEventListener("click",e=>{let t;(e.target.dataset.action==="plus"||e.target.dataset.action==="minus")&&(t=e.target.closest(".cart-counter-wrapper").querySelector("[data-counter]")),e.target.dataset.action==="plus"&&(t.innerHTML=++t.innerHTML,d()),e.target.dataset.action==="minus"&&(parseInt(t.innerHTML)>1&&(t.innerHTML=--t.innerHTML),d())});function b(){i.querySelectorAll(".cart-shopping-item").length>3?i.style.overflowY="scroll":i.style.overflowY="hidden"}const k=document.querySelector(".cart-form");k.addEventListener("submit",$);function $(e){e.preventDefault();let t=n.load("product");document.body.insertAdjacentHTML("afterbegin",x(t))}function x(e){return`
  <div class="order-backdrop">
  <div class="order-modal">
      <svg class="order-close-icon">
        <use href="${y}#icon-close"></use>
      </svg>
      <img class="order-image" src="${e[0].img}" alt="order-image" id="${e[0].id}">
      <h2 class="order-title">Order success</h2>
      <p class="order-text">Thank you for shopping at Food Boutique. Your order has been received and is now being freshly prepared just for you! Get ready to indulge in nourishing goodness, delivered right to your doorstep. We're thrilled to be part of your journey to better health and happiness.</p>
  </div>
  </div>
  `}document.body.addEventListener("click",E);function E(e){const t=document.querySelector(".order-backdrop");(e.target.closest(".order-close-icon")||e.target.classList.contains("order-backdrop"))&&(t.classList.add("is-hidden"),document.querySelector(".section-cart").innerHTML=a(),n.remove("product"),p())}const H=document.querySelector(".datetime"),C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1};L(H,C);document.addEventListener("DOMContentLoaded",function(){document.querySelector(".cart-form").addEventListener("submit",async function(t){t.preventDefault();const o={mail:document.getElementById("mail").value};console.log(o),n.save("lastOrder",o);try{const c=await v(o);console.log("Order sent successfully:",c)}catch(c){console.error("Error sending order:",c)}})});
//# sourceMappingURL=commonHelpers.js.map
