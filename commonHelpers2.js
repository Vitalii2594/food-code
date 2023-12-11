import{i as u,a as P,g as b,b as M,r as B,c as D,l as v,d as I,e as j,f as z,h as k,j as H,k as O,m as $,n as C}from"./assets/footer-b6985027.js";import{P as F}from"./assets/vendor-d873ffc3.js";function _(t){let{img:e,name:o,category:s,size:r,popularity:n,price:a,_id:c,is10PercentOff:i}=t;const d=l.some(p=>p.id===c);return`
      <li class="product-card-general">
          <div class="img-wrapper">
            <img
              class="card-img"
              src="${e}"
              alt="${o}"
              loading="lazy"
            />
          </div>
  
              <div class="general-card-container" >
                  <h3 class="general-card-title">${o}</h3>
                  <div class="general-span-container">
                  <span class="general-span-info">Category:<span class="span-info-value">${s}</span></span>

                  <span class="general-span-info">Size:<span class="span-info-value">${r}</span></span>

                  <span class="general-span-info">Popularity:<span class="span-info-value">${n}</span></span>
                  </div>
              </div>
    
              <div class="general-card-price">
                  <span class="general-span-price">&#36;${a}</span>
                  <button data-id=${c} type="submit" class="addToCart-btn js-addToCart-btn" ${d?"disabled":""}>
                      <svg class="cart-svg " width="18" height="18">
                          <use href="${u}${d?"#icon-checkmark":"#icon-shopping-cart"}"></use>
                         
                      </svg>  
                  </button>
              </div>
              <svg class="general-discount-svg ${i?"discount-label":""}" width="60" height="60">
                <use href="${u}#icon-discount"></use>
              </svg>
      </li>
      `}function N(t){const{img:e,name:o,category:s,size:r,popularity:n,_id:a}=t,c=l.some(i=>i.id===a);return`
        <li class="popular-product-card">
            <div class="poppular-img-wrapper">
              <img
                class="popular-card-img"
                src="${e}"
                alt="${o}"
                loading="lazy"
              />
            </div>
    
                <div class="popular-card-info" >
                    <h3 class="popular-card-title">${o}</h3>
                    <div class="popular-span-container">
                    <span class="popular-span-info">Category: <span class="span-info-value">${s}</span></span>
                    <span class="popular-span-info">Size: <span class="span-info-value">${r}</span></span>
                    <span class="popular-span-info">Popularity: <span class="span-info-value">${n}</span></span>
                    </div>
                </div>
                    
                <button data-id=${a} type="submit" class="popular-card-btn js-addToCart-btn" ${c?"disabled":""}>
                    <svg class="popular-cart-svg" width="12" height="12">
                        <use href="${u}${c?"#icon-checkmark":"#icon-shopping-cart"}"></use>
                    </svg>
                </button>
            
        </li>
        `}function R(t){const{img:e,name:o,price:s,_id:r}=t,n=l.some(a=>a.id===r);return`
      <li class="discount-product-card">
      <div class="discount-img-wrapper">
        <img
          class="discount-card-img"
          src="${e}"
          alt="${o}"
          loading="lazy"
        />
        <svg class="discount-svg-icon" width="60" height="60">
          <use href="${u}#icon-discount"></use>
        </svg>

      </div>

      <div class="discount-card-info" >
          <h3 class="discount-card-title">${o}</h3>

          <div class="discount-card-price">
              <span class="span-price">&#36;${s}</span>
              <button data-id=${r} type="submit" class="addToCart-btn js-addToCart-btn" ${n?"disabled":""}>
                  <svg class="cart-svg" width="18" height="18">
                      <use href="${u}${n?"#icon-checkmark":"#icon-shopping-cart"}"></use>
                  </svg>
              </button>
          </div>
      </div>
  </li>`}function m(t,e,o){let s;e==="general"?s=t.map(r=>_(r)):e==="popular"?s=t.map(r=>N(r)):s=t.map(r=>R(r)),o.innerHTML=s.join("")}function T(){const t=document.querySelector(".modal-product-backdrop");t.remove(),t.classList.add("is-hidden"),document.body.classList.remove("is-overflow-hidden")}function J(t){const e=document.querySelector(".modal-product-backdrop");t.key==="Escape"&&(T(),e.classList.add("is-hidden"))}function Q(t){const e=document.querySelector(".modal-product-backdrop");t.target===e&&(T(),e.classList.remove("is-hidden"))}function x(t){let{name:e,category:o,desc:s,img:r,price:n,size:a,popularity:c,_id:i}=t;const d=l.some(p=>p.id===i);return`
          <div class="modal-product-backdrop" data-modal>
          <div class="modal-product">
              <button type="button" class="modal-btn-close" data-modal-close>
                  <svg class="modal-svg-close" width="28" height="28">
                      <use href="${u}#icon-close"></use>
                  </svg>
              </button>
      
              <div class="modal-product-info">
                  <div class="modal-product-img-wrapper">
                    
                      <img class="modal-product-img" src="${r}" alt="${e}" width="1660">
        
                  </div>
      
                  <div class="modal-product-description">
                      <h2 class="modal-title">${e}</h2>
      
                      <ul class="modal-product-list">
                          <li class="modal-product-item">
                              <h3 class="modal-product-caption">Category:</h3>
                              <p class="modal-product-content">${o}</p>
                          </li>
                          <li class="modal-product-item">
                              <h3 class="modal-product-caption">Size:</h3>
                              <p class="modal-product-content">${a}</p>
                          </li>
                          <li class="modal-product-item">
                              <h3 class="modal-product-caption">Popularity:</h3>
                              <p class="modal-product-content">${c}</p>
                          </li>
                      </ul>
      
                      <p class="modal-product-text">${s}</p>
                  </div>
              </div>
      
              <div class="modal-product-wrapper-price">
                  <p class="modal-product-price"><span>&#36;</span>${n}</p>
                  <button data-id=${i} type="submit" class="modal-product-btn-price">
                  ${d?"Remove from":"Add to"} 
                      <svg class="modal-btn-svg" width="18" height="18">
                          <use class="modal-icon-svg" href="${u}#icon-shopping-cart"></use>
                      </svg>
                  </button>
              </div>
          </div>
      </div>
      `}async function h(t){if(t.target.closest(".js-addToCart-btn"))return;const s=t.target.closest("li").querySelector(".js-addToCart-btn").getAttribute("data-id"),r=await P(s);document.querySelector("body").insertAdjacentHTML("beforeend",x(r)),document.body.classList.add("is-overflow-hidden"),document.querySelector(".modal-btn-close").addEventListener("click",T),document.addEventListener("keydown",J),document.addEventListener("click",Q),document.querySelector(".modal-product-btn-price").addEventListener("click",et)}async function w(t){const e=t.currentTarget.getAttribute("data-id");t.currentTarget.querySelector("use").setAttribute("href",`${u}#icon-checkmark`),t.currentTarget.setAttribute("disabled","true");const s={};try{const n=await P(e);console.log(n);const{category:a,size:c,_id:i,name:d,price:p,img:g}=n;s.category=a,s.size=c,s.id=i,s.name=d,s.price=p,s.img=g}catch(n){console.log(n)}const r=window.localStorage;l.push(s),r.setItem("product",JSON.stringify(l)),b()}function q(){return`
        <div class="sorry-wrapper">
            <span class="emoji-sorry">&#128561;</span>
            <h3 class="sorry-message-text"> Sorry, there are no items matching your filter request!</h3>
        </div> 
    `}const G=document.querySelector(".filters-form"),V=document.querySelector(".filters-categories"),U=document.querySelector(".filters-allTypes"),Y=document.querySelectorAll(".filters-down-svg"),K=document.querySelectorAll(".filters-allTypes-item"),y=document.querySelector(".products-list-general"),W=document.querySelector(".products-list-discount"),X=document.querySelector(".products-list-popular");let l=[];const Z=()=>{const t=v.load("product");if(t===void 0){document.querySelector("#header-length").innerHTML="0";return}document.querySelector("#header-length").innerHTML=t.length,l=t};Z();function tt(){v.load("queryParams")||v.save("queryParams",{keyword:"",category:"",page:1,limit:9})}tt();document.addEventListener("DOMContentLoaded",async()=>{try{const t=await M();B(t),document.querySelectorAll(".filters-categories-item").forEach(d=>{d.addEventListener("click",D)});const e=v.load("queryParams"),s=(await I(e)).results;m(s,"general",y),document.querySelectorAll(".product-card-general").forEach(d=>{d.addEventListener("click",h)});const n=await j();m(n,"discount",W),document.querySelectorAll(".discount-product-card").forEach(d=>{d.addEventListener("click",h)});const c=await z();m(c,"popular",X),document.querySelectorAll(".popular-product-card").forEach(d=>{d.addEventListener("click",h),document.querySelectorAll(".js-addToCart-btn").forEach(g=>{g.addEventListener("click",w)})})}catch(t){console.log(t)}});V.addEventListener("click",k);U.addEventListener("click",k);Y.forEach(t=>{t.addEventListener("click",H)});K.forEach(t=>{t.addEventListener("click",O)});G.addEventListener("submit",async t=>{t.preventDefault();try{const e=$(),s=(await C(e)).results;if(y.innerHTML="",s.length===0){const a=q();y.insertAdjacentHTML("beforeend",a)}else m(s,"general",y);document.querySelectorAll(".product-card-general").forEach(a=>{a.addEventListener("click",h)}),document.querySelectorAll(".js-addToCart-btn").forEach(a=>{a.addEventListener("click",w)})}catch(e){console.log(e)}});async function et(t){const e={},o=t.currentTarget.getAttribute("data-id"),s=l.some(r=>r.id===o);if(!s){t.currentTarget.innerHTML=`Remove from <svg class="modal-btn-svg" width="18" height="18">
                <use class="modal-icon-svg" href="${u}#icon-shopping-cart"></use>
                </svg>`,document.querySelectorAll(".js-addToCart-btn").forEach(a=>{let c=a.getAttribute("data-id");const i=a.querySelector("use");c===o&&(i.setAttribute("href",`${u}#icon-checkmark`),a.disabled=!0)});try{const a=await P(o),{category:c,size:i,_id:d,name:p,price:g,img:A}=a;e.category=c,e.size=i,e.id=d,e.name=p,e.price=g,e.img=A}catch(a){console.log(a)}const n=window.localStorage;l.push(e),n.setItem("product",JSON.stringify(l)),b()}if(s){t.currentTarget.innerHTML=`Add to <svg class="modal-btn-svg" width="18" height="18">
        <use class="modal-icon-svg" href="${u}#icon-shopping-cart"></use>
        </svg>`;const r=t.currentTarget.getAttribute("data-id");l=l.filter(a=>a.id!==r),document.querySelectorAll(".js-addToCart-btn").forEach(a=>{let c=a.getAttribute("data-id");const i=a.querySelector("use");c===o&&(i.setAttribute("href",`${u}#icon-shopping-cart`),a.disabled=!1)}),localStorage.setItem("product",JSON.stringify(l)),b()}}const f=document.querySelector(".products-list-general"),S=document.querySelector("#tui-pagination-container"),at={itemsPerPage:1,visiblePages:4,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="icon tui-page-btn tui-{{type}}">
      <span class="tui-ico-{{type}}">{{type}}>
      </span>
      </a>`,disabledMoveButton:`<span class="tui-page-btn tui-is-disabled tui-{{type}}">
      <span class="tui-ico-{{type}}">{{type}}>
      </span>
      </span>`,moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},L=new F(S,at),st=async t=>{const e=t.page;console.log(e);try{const o=$();o.page=e;const r=(await C(o)).results;if(f.innerHTML="",r.length===0){const c=q();f.insertAdjacentHTML("beforeend",c)}else m(r,"general",f);document.querySelectorAll(".product-card-general").forEach(c=>{c.addEventListener("click",h)}),document.querySelectorAll(".js-addToCart-btn").forEach(c=>{c.addEventListener("click",w)})}catch(o){console.log(o)}};L.on("afterMove",st);const E=async t=>{try{const e=$(),o=await C(e);o.totalPages===1?S.classList.add("is-hidden"):(L.setTotalItems(o.totalPages),S.classList.remove("is-hidden")),L.reset()}catch(e){console.log(e)}};document.addEventListener("DOMContentLoaded",E);const ot=document.querySelector(".filters-form");ot.addEventListener("submit",E);document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".products-list-general");function e(){window.scrollY/(document.body.scrollHeight-window.innerHeight)*100>=30&&t.classList.add("animation")}window.addEventListener("scroll",e)});
//# sourceMappingURL=commonHelpers2.js.map
