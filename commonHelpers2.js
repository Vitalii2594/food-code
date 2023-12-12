import{l as g,i as u,g as w}from"./assets/footer-30a1dc53.js";import{a as m,P as z}from"./assets/vendor-d873ffc3.js";function x(t){const s=[...t,"Show all"].map(r=>`<li class="filters-categories-item" data-category="${r}">${r}</li>`);document.querySelector(".filters-categories-list").insertAdjacentHTML("beforeend",s.join("").replaceAll("_"," ")),console.log("Rendered Category List:",s)}function E(t){const e=this.closest(".filters-wrap"),s=e.querySelector(".filters-down-svg");e.querySelector("ul").classList.toggle("list-active"),s.classList.toggle("rotate")}function H(t){this.classList.toggle("rotate");const e=this.previousElementSibling;e.classList.contains("list-active")?e.classList.remove("list-active"):e.classList.add("list-active")}function T(){const t=document.querySelector(".filters-search-btn");t&&t.click()}function _(t){const e=document.querySelector(".filters-categories"),s=document.querySelector(".filters-categories-list"),a=t.target.textContent;e.textContent=a,s.classList.remove("list-active"),s.nextElementSibling.classList.remove("rotate"),T()}function F(t){const e=document.querySelector(".filters-allTypes"),s=document.querySelector(".filters-allTypes-list"),a=t.target.textContent;e.textContent=a,s.classList.remove("list-active"),s.nextElementSibling.classList.remove("rotate"),T()}function P(){const t=document.querySelector(".filters-allTypes").textContent.split(" ").join(""),s=document.querySelector(".filters-categories").textContent.trim(),a=s.toLowerCase()==="all"?"":s.split(" ").join("_").replace("/","&"),r=document.querySelector(".filters-input").value,c={category:a,keyword:r,filterSearch:`by${t}`},o=g.load("queryParams");if(o&&o.category===c.category&&o.keyword===c.keyword&&o.filterSearch===c.filterSearch)return null;const n={category:a,keyword:r,filterSearch:`by${t}`,page:1,limit:9};return g.save("queryParams",n),c}function A(t){let e;switch(t){case"byAtoZ":e="byABC=true";break;case"byZtoA":e="byABC=false";break;case"byCheaperfirst":e="byPrice=true";break;case"byExpensivefirst":e="byPrice=false";break;case"byPopular":e="byPopularity=false";break;case"byNotpopular":e="byPopularity=true";break;case"Show all":e="";break;default:e="byABC=true";break}return e}const B="https://food-boutique.b.goit.study/api/products";async function O(){return(await m.get("https://food-boutique.b.goit.study/api/products/categories")).data}async function R(t){let{keyword:e,category:s,page:a,limit:r,filterSearch:c}=t;const o=window.innerWidth;o<768?r=6:o>=768&&o<1440?r=8:r=9;const n=new URLSearchParams({page:a,limit:r});return e!==""&&n.append("keyword",e),s!==""&&s!=="Show_all"&&s!=="Categories"&&n.append("category",s),(await m.get(`${B}?${n}&${A(c)}`)).data}async function W(){return(await m.get("https://food-boutique.b.goit.study/api/products/discount")).data}async function N(){return(await m.get("https://food-boutique.b.goit.study/api/products/popular")).data}async function C(t){let e,{keyword:s,category:a,page:r=1,limit:c,filterSearch:o}=t;const n=window.innerWidth;n<768?c=6:n>=768&&n<1440?c=8:c=9;const i=new URLSearchParams({limit:c,page:r});return s!==""&&i.append("keyword",s),a!==""&&a!=="Show_all"&&a!=="Categories"&&i.append("category",a),e=await m.get(`${B}?${i}&${A(o)}`),e.data}async function $(t){return(await m.get(`https://food-boutique.b.goit.study/api/products/${t}`)).data}function V(t){let{img:e,name:s,category:a,size:r,popularity:c,price:o,_id:n,is10PercentOff:i}=t;const l=d.some(p=>p.id===n);return`
      <li class="product-card-general">
          <div class="img-wrapper">
            <img
              class="card-img"
              src="${e}"
              alt="${s}"
              loading="lazy"
            />
          </div>
  
              <div class="general-card-info">
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
              </div>
      </li>
      `}function U(t){const{img:e,name:s,category:a,size:r,popularity:c,_id:o}=t,n=d.some(i=>i.id===o);return`
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
        `}function J(t){const{img:e,name:s,price:a,_id:r}=t,c=d.some(o=>o.id===r);return`
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
  </li>`}function f(t,e,s){let a;e==="general"?a=t.map(r=>V(r)):e==="popular"?a=t.map(r=>U(r)):a=t.map(r=>J(r)),s.innerHTML=a.join("")}function q(){const t=document.querySelector(".modal-product-backdrop");t.remove(),t.classList.add("is-hidden"),document.body.classList.remove("is-overflow-hidden")}function Q(t){const e=document.querySelector(".modal-product-backdrop");t.key==="Escape"&&(q(),e.classList.add("is-hidden"))}function G(t){const e=document.querySelector(".modal-product-backdrop");t.target===e&&(q(),e.classList.remove("is-hidden"))}function Z(t){let{name:e,category:s,desc:a,img:r,price:c,size:o,popularity:n,_id:i}=t;const l=d.some(p=>p.id===i);return`
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
      `}async function h(t){if(t.target.closest(".js-addToCart-btn"))return;const a=t.target.closest("li").querySelector(".js-addToCart-btn").getAttribute("data-id"),r=await $(a);document.querySelector("body").insertAdjacentHTML("beforeend",Z(r)),document.body.classList.add("is-overflow-hidden"),document.querySelector(".modal-btn-close").addEventListener("click",q),document.addEventListener("keydown",Q),document.addEventListener("click",G),document.querySelector(".modal-product-btn-price").addEventListener("click",ct)}async function k(t){const e=t.currentTarget.getAttribute("data-id");t.currentTarget.querySelector("use").setAttribute("href",`${u}#icon-checkmark`),t.currentTarget.setAttribute("disabled","true");const a={};try{const c=await $(e);console.log(c);const{category:o,size:n,_id:i,name:l,price:p,img:y}=c;a.category=o,a.size=n,a.id=i,a.name=l,a.price=p,a.img=y}catch(c){console.log(c)}const r=window.localStorage;d.push(a),r.setItem("product",JSON.stringify(d)),w()}function M(){return`
        <div class="sorry-wrapper">
            <span class="emoji-sorry">&#128561;</span>
            <h3 class="sorry-message-text"> Sorry, there are no items matching your filter request!</h3>
        </div> 
    `}const Y=document.querySelector(".filters-form"),K=document.querySelector(".filters-categories"),X=document.querySelector(".filters-allTypes"),tt=document.querySelectorAll(".filters-down-svg"),et=document.querySelectorAll(".filters-allTypes-item"),v=document.querySelector(".products-list-general"),st=document.querySelector(".products-list-discount"),at=document.querySelector(".products-list-popular");let d=[];const ot=()=>{const t=g.load("product");if(t===void 0){document.querySelector("#header-length").innerHTML="0";return}document.querySelector("#header-length").innerHTML=t.length,d=t};ot();function rt(){g.load("queryParams")||g.save("queryParams",{keyword:"",category:"",page:1,limit:9})}rt();document.addEventListener("DOMContentLoaded",async()=>{try{const t=await O();x(t),document.querySelectorAll(".filters-categories-item").forEach(l=>{l.addEventListener("click",_)});const e=g.load("queryParams"),a=(await R(e)).results;f(a,"general",v),document.querySelectorAll(".product-card-general").forEach(l=>{l.addEventListener("click",h)});const c=await W();f(c,"discount",st),document.querySelectorAll(".discount-product-card").forEach(l=>{l.addEventListener("click",h)});const n=await N();f(n,"popular",at),document.querySelectorAll(".popular-product-card").forEach(l=>{l.addEventListener("click",h),document.querySelectorAll(".js-addToCart-btn").forEach(y=>{y.addEventListener("click",k)})})}catch(t){console.log(t)}});K.addEventListener("click",E);X.addEventListener("click",E);tt.forEach(t=>{t.addEventListener("click",H)});et.forEach(t=>{t.addEventListener("click",F)});Y.addEventListener("submit",async t=>{t.preventDefault();try{const e=P(),a=(await C(e)).results;if(v.innerHTML="",a.length===0){const o=M();v.insertAdjacentHTML("beforeend",o)}else f(a,"general",v);document.querySelectorAll(".product-card-general").forEach(o=>{o.addEventListener("click",h)}),document.querySelectorAll(".js-addToCart-btn").forEach(o=>{o.addEventListener("click",k)})}catch(e){console.log(e)}});async function ct(t){const e={},s=t.currentTarget.getAttribute("data-id"),a=d.some(r=>r.id===s);if(!a){t.currentTarget.innerHTML=`Remove from <svg class="modal-btn-svg" width="18" height="18">
                <use class="modal-icon-svg" href="${u}#icon-shopping-cart"></use>
                </svg>`,document.querySelectorAll(".js-addToCart-btn").forEach(o=>{let n=o.getAttribute("data-id");const i=o.querySelector("use");n===s&&(i.setAttribute("href",`${u}#icon-checkmark`),o.disabled=!0)});try{const o=await $(s),{category:n,size:i,_id:l,name:p,price:y,img:I}=o;e.category=n,e.size=i,e.id=l,e.name=p,e.price=y,e.img=I}catch(o){console.log(o)}const c=window.localStorage;d.push(e),c.setItem("product",JSON.stringify(d)),w()}if(a){t.currentTarget.innerHTML=`Add to <svg class="modal-btn-svg" width="18" height="18">
        <use class="modal-icon-svg" href="${u}#icon-shopping-cart"></use>
        </svg>`;const r=t.currentTarget.getAttribute("data-id");d=d.filter(o=>o.id!==r),document.querySelectorAll(".js-addToCart-btn").forEach(o=>{let n=o.getAttribute("data-id");const i=o.querySelector("use");n===s&&(i.setAttribute("href",`${u}#icon-shopping-cart`),o.disabled=!1)}),localStorage.setItem("product",JSON.stringify(d)),w()}}const S=document.querySelector(".products-list-general"),L=document.querySelector("#tui-pagination-container"),nt=()=>window.innerWidth<=767?2:4,j=()=>{const t={itemsPerPage:1,visiblePages:nt(),page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="icon tui-page-btn tui-{{type}}">
        <span class="tui-ico-{{type}}">{{type}}
        </span>
        </a>`,disabledMoveButton:`<span class="tui-page-btn tui-is-disabled tui-{{type}}">
        <span class="tui-ico-{{type}}">{{type}}
        </span>
        </span>`,moreButton:'<a href="#"  class="tui-page-btn-el tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};return new z(L,t)};let b=j();window.addEventListener("resize",()=>{b=j()});const it=async t=>{const e=t.page;console.log(e);try{const s=P();s.page=e;const r=(await C(s)).results;if(S.innerHTML="",r.length===0){const n=M();S.insertAdjacentHTML("beforeend",n)}else f(r,"general",S);document.querySelectorAll(".product-card-general").forEach(n=>{n.addEventListener("click",h)}),document.querySelectorAll(".js-addToCart-btn").forEach(n=>{n.addEventListener("click",k)})}catch(s){console.log(s)}};b.on("afterMove",it);const D=async t=>{try{const e=P(),s=await C(e);s.totalPages===1?L.classList.add("is-hidden"):(b.setTotalItems(s.totalPages),L.classList.remove("is-hidden")),b.reset()}catch(e){console.log(e)}};document.addEventListener("DOMContentLoaded",D);const lt=document.querySelector(".filters-form");lt.addEventListener("submit",D);document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".products-list-general");function e(){window.scrollY/(document.body.scrollHeight-window.innerHeight)*100>=30&&t.classList.add("animation")}window.addEventListener("scroll",e)});
//# sourceMappingURL=commonHelpers2.js.map
