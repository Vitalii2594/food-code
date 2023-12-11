import{l as v,i as u,g as E}from"./assets/footer-4787357d.js";import{a as m,P as N}from"./assets/vendor-d873ffc3.js";function W(t){const e=t.map(s=>`<li class="filters-categories-item">${s}</li>`);document.querySelector(".filters-categories-list").insertAdjacentHTML("beforeend",e.join("").replaceAll("_"," "))}function z(t){const e=this.closest(".filters-wrap"),s=e.querySelector(".filters-down-svg"),a=e.querySelector("ul");a.classList.contains("list-active")?a.classList.remove("list-active"):a.classList.add("list-active"),s.classList.contains("rotate")?s.classList.remove("rotate"):s.classList.add("rotate")}function U(t){this.classList.contains("rotate")?this.classList.remove("rotate"):this.classList.add("rotate"),this.previousElementSibling.classList.contains("list-active")?this.previousElementSibling.classList.remove("list-active"):this.previousElementSibling.classList.add("list-active")}function V(t){const e=document.querySelector(".filters-categories"),s=document.querySelector(".filters-categories-list"),a=t.target.textContent;e.textContent=a,s.classList.remove("list-active"),s.nextElementSibling.classList.remove("rotate")}function J(t){const e=document.querySelector(".filters-allTypes"),s=document.querySelector(".filters-allTypes-list"),a=t.target.textContent;e.textContent=a,s.classList.remove("list-active"),s.nextElementSibling.classList.remove("rotate")}function A(){const t=document.querySelector(".filters-allTypes").textContent.split(" ").join(""),e=document.querySelector(".filters-categories").textContent.split(" ").join("_").replace("/","&"),s=document.querySelector(".filters-input").value,a={category:e,keyword:s,filterSearch:`by${t}`},r={category:e,keyword:s,filterSearch:`by${t}`,page:1,limit:9};return v.save("queryParams",r),a}function H(t){let e;switch(t){case"byAtoZ":e="byABC=true";break;case"byZtoA":e="byABC=false";break;case"byCheaperfirst":e="byPrice=true";break;case"byExpensivefirst":e="byPrice=false";break;case"byPopular":e="byPopularity=false";break;case"byNotpopular":e="byPopularity=true";break;default:e="byABC=true";break}return e}const _="https://food-boutique.b.goit.study/api/products";async function Q(){return(await m.get("https://food-boutique.b.goit.study/api/products/categories")).data}async function G(t){let{keyword:e,category:s,page:a,limit:r,filterSearch:c}=t;const o=window.innerWidth;o<768?r=6:o>=768&&o<1440?r=8:r=9;const n=new URLSearchParams({page:a,limit:r});return e!==""&&n.append("keyword",e),s!==""&&s!=="Show_all"&&s!=="Categories"&&n.append("category",s),(await m.get(`${_}?${n}&${H(c)}`)).data}async function Z(){return(await m.get("https://food-boutique.b.goit.study/api/products/discount")).data}async function Y(){return(await m.get("https://food-boutique.b.goit.study/api/products/popular")).data}async function B(t){let e,{keyword:s,category:a,page:r=1,limit:c,filterSearch:o}=t;const n=window.innerWidth;n<768?c=6:n>=768&&n<1440?c=8:c=9;const i=new URLSearchParams({limit:c,page:r});return s!==""&&i.append("keyword",s),a!==""&&a!=="Show_all"&&a!=="Categories"&&i.append("category",a),e=await m.get(`${_}?${i}&${H(o)}`),e.data}async function M(t){return(await m.get(`https://food-boutique.b.goit.study/api/products/${t}`)).data}function K(t){let{img:e,name:s,category:a,size:r,popularity:c,price:o,_id:n,is10PercentOff:i}=t;const l=d.some(g=>g.id===n);return`
      <li class="product-card-general">
          <div class="img-wrapper">
            <img
              class="card-img"
              src="${e}"
              alt="${s}"
              loading="lazy"
            />
          </div>
  
              <div class="general-card-container" >
                  <h3 class="general-card-title">${s}</h3>
                  <div class="general-span-container">
                  <span class="general-span-info">Category:<span class="span-info-value">${a}</span></span>

                  <span class="general-span-info">Size:<span class="span-info-value">${r}</span></span>

                  <span class="general-span-info">Popularity:<span class="span-info-value">${c}</span></span>
                  </div>
              </div>
    
              <div class="general-card-price">
                  <span class="general-span-price">&#36;${o}</span>
                  <button data-id=${n} type="submit" class="addToCart-btn js-addToCart-btn" ${l?"disabled":""}>
                      <svg class="cart-svg " width="18" height="18">
                          <use href="${u}${l?"#icon-checkmark":"#icon-shopping-cart"}"></use>
                         
                      </svg>  
                  </button>
              </div>
              <svg class="general-discount-svg ${i?"discount-label":""}" width="60" height="60">
                <use href="${u}#icon-discount"></use>
              </svg>
      </li>
      `}function X(t){const{img:e,name:s,category:a,size:r,popularity:c,_id:o}=t,n=d.some(i=>i.id===o);return`
        <li class="popular-product-card">
            <div class="poppular-img-wrapper">
              <img
                class="popular-card-img"
                src="${e}"
                alt="${s}"
                loading="lazy"
              />
            </div>
    
                <div class="popular-card-info" >
                    <h3 class="popular-card-title">${s}</h3>
                    <div class="popular-span-container">
                    <span class="popular-span-info">Category: <span class="span-info-value">${a}</span></span>
                    <span class="popular-span-info">Size: <span class="span-info-value">${r}</span></span>
                    <span class="popular-span-info">Popularity: <span class="span-info-value">${c}</span></span>
                    </div>
                </div>
                    
                <button data-id=${o} type="submit" class="popular-card-btn js-addToCart-btn" ${n?"disabled":""}>
                    <svg class="popular-cart-svg" width="12" height="12">
                        <use href="${u}${n?"#icon-checkmark":"#icon-shopping-cart"}"></use>
                    </svg>
                </button>
            
        </li>
        `}function tt(t){const{img:e,name:s,price:a,_id:r}=t,c=d.some(o=>o.id===r);return`
      <li class="discount-product-card">
      <div class="discount-img-wrapper">
        <img
          class="discount-card-img"
          src="${e}"
          alt="${s}"
          loading="lazy"
        />
        <svg class="discount-svg-icon" width="60" height="60">
          <use href="${u}#icon-discount"></use>
        </svg>

      </div>

      <div class="discount-card-info" >
          <h3 class="discount-card-title">${s}</h3>

          <div class="discount-card-price">
              <span class="span-price">&#36;${a}</span>
              <button data-id=${r} type="submit" class="addToCart-btn js-addToCart-btn" ${c?"disabled":""}>
                  <svg class="cart-svg" width="18" height="18">
                      <use href="${u}${c?"#icon-checkmark":"#icon-shopping-cart"}"></use>
                  </svg>
              </button>
          </div>
      </div>
  </li>`}function y(t,e,s){let a;e==="general"?a=t.map(r=>K(r)):e==="popular"?a=t.map(r=>X(r)):a=t.map(r=>tt(r)),s.innerHTML=a.join("")}function x(){const t=document.querySelector(".modal-product-backdrop");t.remove(),t.classList.add("is-hidden"),document.body.classList.remove("is-overflow-hidden")}function et(t){const e=document.querySelector(".modal-product-backdrop");t.key==="Escape"&&(x(),e.classList.add("is-hidden"))}function st(t){const e=document.querySelector(".modal-product-backdrop");t.target===e&&(x(),e.classList.remove("is-hidden"))}function at(t){let{name:e,category:s,desc:a,img:r,price:c,size:o,popularity:n,_id:i}=t;const l=d.some(g=>g.id===i);return`
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
                              <p class="modal-product-content">${s}</p>
                          </li>
                          <li class="modal-product-item">
                              <h3 class="modal-product-caption">Size:</h3>
                              <p class="modal-product-content">${o}</p>
                          </li>
                          <li class="modal-product-item">
                              <h3 class="modal-product-caption">Popularity:</h3>
                              <p class="modal-product-content">${n}</p>
                          </li>
                      </ul>
      
                      <p class="modal-product-text">${a}</p>
                  </div>
              </div>
      
              <div class="modal-product-wrapper-price">
                  <p class="modal-product-price"><span>&#36;</span>${c}</p>
                  <button data-id=${i} type="submit" class="modal-product-btn-price">
                  ${l?"Remove from":"Add to"} 
                      <svg class="modal-btn-svg" width="18" height="18">
                          <use class="modal-icon-svg" href="${u}#icon-shopping-cart"></use>
                      </svg>
                  </button>
              </div>
          </div>
      </div>
      `}async function h(t){if(t.target.closest(".js-addToCart-btn"))return;const a=t.target.closest("li").querySelector(".js-addToCart-btn").getAttribute("data-id"),r=await M(a);document.querySelector("body").insertAdjacentHTML("beforeend",at(r)),document.body.classList.add("is-overflow-hidden"),document.querySelector(".modal-btn-close").addEventListener("click",x),document.addEventListener("keydown",et),document.addEventListener("click",st),document.querySelector(".modal-product-btn-price").addEventListener("click",gt)}async function j(t){const e=t.currentTarget.getAttribute("data-id");t.currentTarget.querySelector("use").setAttribute("href",`${u}#icon-checkmark`),t.currentTarget.setAttribute("disabled","true");const a={};try{const c=await M(e);console.log(c);const{category:o,size:n,_id:i,name:l,price:g,img:f}=c;a.category=o,a.size=n,a.id=i,a.name=l,a.price=g,a.img=f}catch(c){console.log(c)}const r=window.localStorage;d.push(a),r.setItem("product",JSON.stringify(d)),E()}function F(){return`
        <div class="sorry-wrapper">
            <span class="emoji-sorry">&#128561;</span>
            <h3 class="sorry-message-text"> Sorry, there are no items matching your filter request!</h3>
        </div> 
    `}const ot=document.querySelector(".filters-form"),rt=document.querySelector(".filters-categories"),nt=document.querySelector(".filters-allTypes"),ct=document.querySelectorAll(".filters-down-svg"),it=document.querySelectorAll(".filters-allTypes-item"),b=document.querySelector(".products-list-general"),lt=document.querySelector(".products-list-discount"),dt=document.querySelector(".products-list-popular");let d=[];const ut=()=>{const t=v.load("product");if(t===void 0){document.querySelector("#header-length").innerHTML="0";return}document.querySelector("#header-length").innerHTML=t.length,d=t};ut();function pt(){v.load("queryParams")||v.save("queryParams",{keyword:"",category:"",page:1,limit:9})}pt();document.addEventListener("DOMContentLoaded",async()=>{try{const t=await Q();W(t),document.querySelectorAll(".filters-categories-item").forEach(l=>{l.addEventListener("click",V)});const e=v.load("queryParams"),a=(await G(e)).results;y(a,"general",b),document.querySelectorAll(".product-card-general").forEach(l=>{l.addEventListener("click",h)});const c=await Z();y(c,"discount",lt),document.querySelectorAll(".discount-product-card").forEach(l=>{l.addEventListener("click",h)});const n=await Y();y(n,"popular",dt),document.querySelectorAll(".popular-product-card").forEach(l=>{l.addEventListener("click",h),document.querySelectorAll(".js-addToCart-btn").forEach(f=>{f.addEventListener("click",j)})})}catch(t){console.log(t)}});rt.addEventListener("click",z);nt.addEventListener("click",z);ct.forEach(t=>{t.addEventListener("click",U)});it.forEach(t=>{t.addEventListener("click",J)});ot.addEventListener("submit",async t=>{t.preventDefault();try{const e=A(),a=(await B(e)).results;if(b.innerHTML="",a.length===0){const o=F();b.insertAdjacentHTML("beforeend",o)}else y(a,"general",b);document.querySelectorAll(".product-card-general").forEach(o=>{o.addEventListener("click",h)}),document.querySelectorAll(".js-addToCart-btn").forEach(o=>{o.addEventListener("click",j)})}catch(e){console.log(e)}});async function gt(t){const e={},s=t.currentTarget.getAttribute("data-id"),a=d.some(r=>r.id===s);if(!a){t.currentTarget.innerHTML=`Remove from <svg class="modal-btn-svg" width="18" height="18">
                <use class="modal-icon-svg" href="${u}#icon-shopping-cart"></use>
                </svg>`,document.querySelectorAll(".js-addToCart-btn").forEach(o=>{let n=o.getAttribute("data-id");const i=o.querySelector("use");n===s&&(i.setAttribute("href",`${u}#icon-checkmark`),o.disabled=!0)});try{const o=await M(s),{category:n,size:i,_id:l,name:g,price:f,img:R}=o;e.category=n,e.size=i,e.id=l,e.name=g,e.price=f,e.img=R}catch(o){console.log(o)}const c=window.localStorage;d.push(e),c.setItem("product",JSON.stringify(d)),E()}if(a){t.currentTarget.innerHTML=`Add to <svg class="modal-btn-svg" width="18" height="18">
        <use class="modal-icon-svg" href="${u}#icon-shopping-cart"></use>
        </svg>`;const r=t.currentTarget.getAttribute("data-id");d=d.filter(o=>o.id!==r),document.querySelectorAll(".js-addToCart-btn").forEach(o=>{let n=o.getAttribute("data-id");const i=o.querySelector("use");n===s&&(i.setAttribute("href",`${u}#icon-shopping-cart`),o.disabled=!1)}),localStorage.setItem("product",JSON.stringify(d)),E()}}const q=document.querySelector(".products-list-general"),S=document.querySelector("#tui-pagination-container"),mt={itemsPerPage:1,visiblePages:4,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{firstButton:'<a href="#" class="tui-page-btn tui-first-child">[<]</a>',page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="icon tui-page-btn tui-{{type}}">
      <span class="tui-ico-{{type}}">{{type}}</span>
      </a>`,disabledMoveButton:`<span class="tui-page-btn tui-is-disabled tui-{{type}}">
      <span class="tui-ico-{{type}}">{{type}}</span>
      </span>`,moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>',lastButton:'<a href="#" class="tui-page-btn tui-last-child">[>]</a>'}},T=new N(S,mt),ft=async t=>{const e=t.page;console.log(e);try{const s=A();s.page=e;const r=(await B(s)).results;if(q.innerHTML="",r.length===0){const n=F();q.insertAdjacentHTML("beforeend",n)}else y(r,"general",q);document.querySelectorAll(".product-card-general").forEach(n=>{n.addEventListener("click",h)}),document.querySelectorAll(".js-addToCart-btn").forEach(n=>{n.addEventListener("click",j)})}catch(s){console.log(s)}};T.on("afterMove",ft);const O=async t=>{try{const e=A(),s=await B(e);s.totalPages===1?S.classList.add("is-hidden"):(T.setTotalItems(s.totalPages),S.classList.remove("is-hidden")),T.reset()}catch(e){console.log(e)}};document.addEventListener("DOMContentLoaded",O);const yt=document.querySelector(".filters-form");yt.addEventListener("submit",O);const p=document.createElement("div");p.classList.add("pagination-elements");const L=document.createElement("a");L.href="#";L.classList.add("pagination-link");L.textContent="<";p.appendChild(L);const C=document.createElement("a");C.href="#";C.classList.add("pagination-link");C.textContent="1";p.appendChild(C);const D=document.createElement("span");D.classList.add("pagination-ellipsis");D.textContent="...";p.appendChild(D);const w=document.createElement("a");w.href="#";w.classList.add("pagination-link");w.textContent="2";p.appendChild(w);const I=document.createElement("span");I.classList.add("pagination-ellipsis");I.textContent="...";p.appendChild(I);const P=document.createElement("a");P.href="#";P.classList.add("pagination-link");P.textContent="3";p.appendChild(P);const k=document.createElement("a");k.href="#";k.classList.add("pagination-link");k.textContent="4";p.appendChild(k);const $=document.createElement("a");$.href="#";$.classList.add("pagination-link");$.textContent=">";p.appendChild($);S.appendChild(p);document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".products-list-general");function e(){window.scrollY/(document.body.scrollHeight-window.innerHeight)*100>=30&&t.classList.add("animation")}window.addEventListener("scroll",e)});
//# sourceMappingURL=commonHelpers2.js.map
