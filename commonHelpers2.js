import{l as h,i as u,g as S}from"./assets/footer-a316bc8b.js";import{a as g,P as D}from"./assets/vendor-d873ffc3.js";function I(t){const e=t.map(s=>`<li class="filters-categories-item">${s}</li>`);document.querySelector(".filters-categories-list").insertAdjacentHTML("beforeend",e.join("").replaceAll("_"," "))}function T(t){const e=this.closest(".filters-wrap"),s=e.querySelector(".filters-down-svg"),a=e.querySelector("ul");a.classList.contains("list-active")?a.classList.remove("list-active"):a.classList.add("list-active"),s.classList.contains("rotate")?s.classList.remove("rotate"):s.classList.add("rotate")}function z(t){this.classList.contains("rotate")?this.classList.remove("rotate"):this.classList.add("rotate"),this.previousElementSibling.classList.contains("list-active")?this.previousElementSibling.classList.remove("list-active"):this.previousElementSibling.classList.add("list-active")}function H(t){const e=document.querySelector(".filters-categories"),s=document.querySelector(".filters-categories-list"),a=t.target.textContent;e.textContent=a,s.classList.remove("list-active"),s.nextElementSibling.classList.remove("rotate")}function _(t){const e=document.querySelector(".filters-allTypes"),s=document.querySelector(".filters-allTypes-list"),a=t.target.textContent;e.textContent=a,s.classList.remove("list-active"),s.nextElementSibling.classList.remove("rotate")}function C(){const t=document.querySelector(".filters-allTypes").textContent.split(" ").join(""),e=document.querySelector(".filters-categories").textContent.split(" ").join("_").replace("/","&"),s=document.querySelector(".filters-input").value,a={category:e,keyword:s,filterSearch:`by${t}`},r={category:e,keyword:s,filterSearch:`by${t}`,page:1,limit:9};return h.save("queryParams",r),a}function E(t){let e;switch(t){case"byAtoZ":e="byABC=true";break;case"byZtoA":e="byABC=false";break;case"byCheaperfirst":e="byPrice=true";break;case"byExpensivefirst":e="byPrice=false";break;case"byPopular":e="byPopularity=false";break;case"byNotpopular":e="byPopularity=true";break;default:e="byABC=true";break}return e}const A="https://food-boutique.b.goit.study/api/products";async function x(){return(await g.get("https://food-boutique.b.goit.study/api/products/categories")).data}async function F(t){let{keyword:e,category:s,page:a,limit:r,filterSearch:n}=t;const o=window.innerWidth;o<768?r=6:o>=768&&o<1440?r=8:r=9;const c=new URLSearchParams({page:a,limit:r});return e!==""&&c.append("keyword",e),s!==""&&s!=="Show_all"&&s!=="Categories"&&c.append("category",s),(await g.get(`${A}?${c}&${E(n)}`)).data}async function O(){return(await g.get("https://food-boutique.b.goit.study/api/products/discount")).data}async function R(){return(await g.get("https://food-boutique.b.goit.study/api/products/popular")).data}async function P(t){let e,{keyword:s,category:a,page:r=1,limit:n,filterSearch:o}=t;const c=window.innerWidth;c<768?n=6:c>=768&&c<1440?n=8:n=9;const i=new URLSearchParams({limit:n,page:r});return s!==""&&i.append("keyword",s),a!==""&&a!=="Show_all"&&a!=="Categories"&&i.append("category",a),e=await g.get(`${A}?${i}&${E(o)}`),e.data}async function $(t){return(await g.get(`https://food-boutique.b.goit.study/api/products/${t}`)).data}function N(t){let{img:e,name:s,category:a,size:r,popularity:n,price:o,_id:c,is10PercentOff:i}=t;const l=d.some(p=>p.id===c);return`
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

                  <span class="general-span-info">Popularity:<span class="span-info-value">${n}</span></span>
                  </div>
              </div>
    
              <div class="general-card-price">
                  <span class="general-span-price">&#36;${o}</span>
                  <button data-id=${c} type="submit" class="addToCart-btn js-addToCart-btn" ${l?"disabled":""}>
                      <svg class="cart-svg " width="18" height="18">
                          <use href="${u}${l?"#icon-checkmark":"#icon-shopping-cart"}"></use>
                         
                      </svg>  
                  </button>
              </div>
              <svg class="general-discount-svg ${i?"discount-label":""}" width="60" height="60">
                <use href="${u}#icon-discount"></use>
              </svg>
      </li>
      `}function W(t){const{img:e,name:s,category:a,size:r,popularity:n,_id:o}=t,c=d.some(i=>i.id===o);return`
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
                    <span class="popular-span-info">Popularity: <span class="span-info-value">${n}</span></span>
                    </div>
                </div>
                    
                <button data-id=${o} type="submit" class="popular-card-btn js-addToCart-btn" ${c?"disabled":""}>
                    <svg class="popular-cart-svg" width="12" height="12">
                        <use href="${u}${c?"#icon-checkmark":"#icon-shopping-cart"}"></use>
                    </svg>
                </button>
            
        </li>
        `}function U(t){const{img:e,name:s,price:a,_id:r}=t,n=d.some(o=>o.id===r);return`
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
              <button data-id=${r} type="submit" class="addToCart-btn js-addToCart-btn" ${n?"disabled":""}>
                  <svg class="cart-svg" width="18" height="18">
                      <use href="${u}${n?"#icon-checkmark":"#icon-shopping-cart"}"></use>
                  </svg>
              </button>
          </div>
      </div>
  </li>`}function y(t,e,s){let a;e==="general"?a=t.map(r=>N(r)):e==="popular"?a=t.map(r=>W(r)):a=t.map(r=>U(r)),s.innerHTML=a.join("")}function q(){const t=document.querySelector(".modal-product-backdrop");t.remove(),t.classList.add("is-hidden"),document.body.classList.remove("is-overflow-hidden")}function V(t){const e=document.querySelector(".modal-product-backdrop");t.key==="Escape"&&(q(),e.classList.add("is-hidden"))}function J(t){const e=document.querySelector(".modal-product-backdrop");t.target===e&&(q(),e.classList.remove("is-hidden"))}function Q(t){let{name:e,category:s,desc:a,img:r,price:n,size:o,popularity:c,_id:i}=t;const l=d.some(p=>p.id===i);return`
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
                              <p class="modal-product-content">${c}</p>
                          </li>
                      </ul>
      
                      <p class="modal-product-text">${a}</p>
                  </div>
              </div>
      
              <div class="modal-product-wrapper-price">
                  <p class="modal-product-price"><span>&#36;</span>${n}</p>
                  <button data-id=${i} type="submit" class="modal-product-btn-price">
                  ${l?"Remove from":"Add to"} 
                      <svg class="modal-btn-svg" width="18" height="18">
                          <use class="modal-icon-svg" href="${u}#icon-shopping-cart"></use>
                      </svg>
                  </button>
              </div>
          </div>
      </div>
      `}async function f(t){if(t.target.closest(".js-addToCart-btn"))return;const a=t.target.closest("li").querySelector(".js-addToCart-btn").getAttribute("data-id"),r=await $(a);document.querySelector("body").insertAdjacentHTML("beforeend",Q(r)),document.body.classList.add("is-overflow-hidden"),document.querySelector(".modal-btn-close").addEventListener("click",q),document.addEventListener("keydown",V),document.addEventListener("click",J),document.querySelector(".modal-product-btn-price").addEventListener("click",ot)}async function k(t){const e=t.currentTarget.getAttribute("data-id");t.currentTarget.querySelector("use").setAttribute("href",`${u}#icon-checkmark`),t.currentTarget.setAttribute("disabled","true");const a={};try{const n=await $(e);console.log(n);const{category:o,size:c,_id:i,name:l,price:p,img:m}=n;a.category=o,a.size=c,a.id=i,a.name=l,a.price=p,a.img=m}catch(n){console.log(n)}const r=window.localStorage;d.push(a),r.setItem("product",JSON.stringify(d)),S()}function B(){return`
        <div class="sorry-wrapper">
            <span class="emoji-sorry">&#128561;</span>
            <h3 class="sorry-message-text"> Sorry, there are no items matching your filter request!</h3>
        </div> 
    `}const G=document.querySelector(".filters-form"),Z=document.querySelector(".filters-categories"),Y=document.querySelector(".filters-allTypes"),K=document.querySelectorAll(".filters-down-svg"),X=document.querySelectorAll(".filters-allTypes-item"),v=document.querySelector(".products-list-general"),tt=document.querySelector(".products-list-discount"),et=document.querySelector(".products-list-popular");let d=[];const st=()=>{const t=h.load("product");if(t===void 0){document.querySelector("#header-length").innerHTML="0";return}document.querySelector("#header-length").innerHTML=t.length,d=t};st();function at(){h.load("queryParams")||h.save("queryParams",{keyword:"",category:"",page:1,limit:9})}at();document.addEventListener("DOMContentLoaded",async()=>{try{const t=await x();I(t),document.querySelectorAll(".filters-categories-item").forEach(l=>{l.addEventListener("click",H)});const e=h.load("queryParams"),a=(await F(e)).results;y(a,"general",v),document.querySelectorAll(".product-card-general").forEach(l=>{l.addEventListener("click",f)});const n=await O();y(n,"discount",tt),document.querySelectorAll(".discount-product-card").forEach(l=>{l.addEventListener("click",f)});const c=await R();y(c,"popular",et),document.querySelectorAll(".popular-product-card").forEach(l=>{l.addEventListener("click",f),document.querySelectorAll(".js-addToCart-btn").forEach(m=>{m.addEventListener("click",k)})})}catch(t){console.log(t)}});Z.addEventListener("click",T);Y.addEventListener("click",T);K.forEach(t=>{t.addEventListener("click",z)});X.forEach(t=>{t.addEventListener("click",_)});G.addEventListener("submit",async t=>{t.preventDefault();try{const e=C(),a=(await P(e)).results;if(v.innerHTML="",a.length===0){const o=B();v.insertAdjacentHTML("beforeend",o)}else y(a,"general",v);document.querySelectorAll(".product-card-general").forEach(o=>{o.addEventListener("click",f)}),document.querySelectorAll(".js-addToCart-btn").forEach(o=>{o.addEventListener("click",k)})}catch(e){console.log(e)}});async function ot(t){const e={},s=t.currentTarget.getAttribute("data-id"),a=d.some(r=>r.id===s);if(!a){t.currentTarget.innerHTML=`Remove from <svg class="modal-btn-svg" width="18" height="18">
                <use class="modal-icon-svg" href="${u}#icon-shopping-cart"></use>
                </svg>`,document.querySelectorAll(".js-addToCart-btn").forEach(o=>{let c=o.getAttribute("data-id");const i=o.querySelector("use");c===s&&(i.setAttribute("href",`${u}#icon-checkmark`),o.disabled=!0)});try{const o=await $(s),{category:c,size:i,_id:l,name:p,price:m,img:j}=o;e.category=c,e.size=i,e.id=l,e.name=p,e.price=m,e.img=j}catch(o){console.log(o)}const n=window.localStorage;d.push(e),n.setItem("product",JSON.stringify(d)),S()}if(a){t.currentTarget.innerHTML=`Add to <svg class="modal-btn-svg" width="18" height="18">
        <use class="modal-icon-svg" href="${u}#icon-shopping-cart"></use>
        </svg>`;const r=t.currentTarget.getAttribute("data-id");d=d.filter(o=>o.id!==r),document.querySelectorAll(".js-addToCart-btn").forEach(o=>{let c=o.getAttribute("data-id");const i=o.querySelector("use");c===s&&(i.setAttribute("href",`${u}#icon-shopping-cart`),o.disabled=!1)}),localStorage.setItem("product",JSON.stringify(d)),S()}}const b=document.querySelector(".products-list-general"),L=document.querySelector("#tui-pagination-container"),rt={itemsPerPage:1,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="icon tui-page-btn tui-{{type}}">
      <span class="tui-ico-{{type}}">{{type}}>
      </span>
      </a>`,disabledMoveButton:`<span class="tui-page-btn tui-is-disabled tui-{{type}}">
      <span class="tui-ico-{{type}}">{{type}}>
      </span>
      </span>`,moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},w=new D(L,rt),ct=async t=>{const e=t.page;console.log(e);try{const s=C();s.page=e;const r=(await P(s)).results;if(b.innerHTML="",r.length===0){const c=B();b.insertAdjacentHTML("beforeend",c)}else y(r,"general",b);document.querySelectorAll(".product-card-general").forEach(c=>{c.addEventListener("click",f)}),document.querySelectorAll(".js-addToCart-btn").forEach(c=>{c.addEventListener("click",k)})}catch(s){console.log(s)}};w.on("afterMove",ct);const M=async t=>{try{const e=C(),s=await P(e);s.totalPages===1?L.classList.add("is-hidden"):(w.setTotalItems(s.totalPages),L.classList.remove("is-hidden")),w.reset()}catch(e){console.log(e)}};document.addEventListener("DOMContentLoaded",M);const nt=document.querySelector(".filters-form");nt.addEventListener("submit",M);document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".products-list-general");function e(){window.scrollY/(document.body.scrollHeight-window.innerHeight)*100>=30&&t.classList.add("animation")}window.addEventListener("scroll",e)});
//# sourceMappingURL=commonHelpers2.js.map
