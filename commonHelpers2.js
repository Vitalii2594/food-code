import{s as x,i as u,g as L,l as v}from"./assets/footer-bf064eb8.js";import{a as g,P as H}from"./assets/vendor-d873ffc3.js";function _(e){const s=[...e,"Show all"].map(o=>`<li class="filters-categories-item" data-category="${o}">${o}</li>`);document.querySelector(".filters-categories-list").insertAdjacentHTML("beforeend",s.join("").replaceAll("_"," ")),console.log("Rendered Category List:",s)}function T(e){const t=this.closest(".filters-wrap"),s=t.querySelector(".filters-down-svg");t.querySelector("ul").classList.toggle("list-active"),s.classList.toggle("rotate")}function F(e){this.classList.toggle("rotate");const t=this.previousElementSibling;t.classList.contains("list-active")?t.classList.remove("list-active"):t.classList.add("list-active")}function A(){const e=document.querySelector(".filters-search-btn");e&&e.click()}function O(e){const t=document.querySelector(".filters-categories"),s=document.querySelector(".filters-categories-list"),a=e.target.textContent;t.textContent=a,s.classList.remove("list-active"),s.nextElementSibling.classList.remove("rotate"),A(),M(queryParameters)}function R(e){const t=document.querySelector(".filters-allTypes"),s=document.querySelector(".filters-allTypes-list"),a=e.target.textContent;t.textContent=a,s.classList.remove("list-active"),s.nextElementSibling.classList.remove("rotate"),A(),M(queryParameters)}function $(){const e=document.querySelector(".filters-allTypes").textContent.split(" ").join(""),s=document.querySelector(".filters-categories").textContent.trim(),a=s.toLowerCase()==="all"?"":s.split(" ").join("_").replace("/","&"),o=document.querySelector(".filters-input").value,n={category:a,keyword:o,filterSearch:`by${e}`},r={category:a,keyword:o,filterSearch:`by${e}`,page:1,limit:9};return x("queryParams",r),n}function B(e){let t;switch(e){case"byAtoZ":t="byABC=true";break;case"byZtoA":t="byABC=false";break;case"byCheaperfirst":t="byPrice=true";break;case"byExpensivefirst":t="byPrice=false";break;case"byPopular":t="byPopularity=false";break;case"byNotpopular":t="byPopularity=true";break;case"Show all":t="";break;default:t="byABC=true";break}return t}async function M(e){try{const t=await g.get(`${S}?${new URLSearchParams(e)}`);console.log("Server response:",t.data)}catch(t){console.error("Error making server request:",t)}}const S="https://food-boutique.b.goit.study/api/products";async function W(){return(await g.get("https://food-boutique.b.goit.study/api/products/categories")).data}async function N(e){let{keyword:t,category:s,page:a,limit:o,filterSearch:n}=e;const r=window.innerWidth;r<768?o=6:r>=768&&r<1440?o=8:o=9;const c=new URLSearchParams({page:a,limit:o});return t!==""&&c.append("keyword",t),s!==""&&s!=="Show_all"&&s!=="Categories"&&c.append("category",s),(await g.get(`${S}?${c}&${B(n)}`)).data}async function U(){return(await g.get("https://food-boutique.b.goit.study/api/products/discount")).data}async function V(){return(await g.get("https://food-boutique.b.goit.study/api/products/popular")).data}async function C(e){try{const{keyword:t,category:s,page:a=1,filterSearch:o}=e,n=J(),r=new URLSearchParams({limit:n,page:a});return t&&r.append("keyword",t),s&&s!=="Show_all"&&s!=="Categories"&&r.append("category",s),(await g.get(`${S}?${r}&${B(o)}`)).data}catch(t){throw console.error(t),t}}async function q(e){return(await g.get(`${S}/${e}`)).data}function J(){const e=window.innerWidth;return e<768?6:e<1440?8:9}function Q(e){let{img:t,name:s,category:a,size:o,popularity:n,price:r,_id:c,is10PercentOff:i}=e;const l=d.some(p=>p.id===c);return`
      <li class="product-card-general">
          <div class="img-wrapper">
            <img
              class="card-img"
              src="${t}"
              alt="${s}"
              loading="lazy"
            />
          </div>
  
              <div class="general-card-info">
                <div class="general-card-container" >
                    <h3 class="general-card-title">${s}</h3>
                    <div class="general-span-container">
                    <span class="general-span-info">Category:<span class="span-info-value">${a}</span></span>
                    <span class="general-span-info">Size:<span class="span-info-value">${o}</span></span>
                    <span class="general-span-info">Popularity:<span class="span-info-value">${n}</span></span>
                    </div>
                </div>
                <div class="general-card-price">
                    <span class="general-span-price">&#36;${r}</span>
                    <button data-id=${c} type="submit" class="addToCart-btn js-addToCart-btn" ${l?"disabled":""}>
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
      `}function G(e){const{img:t,name:s,category:a,size:o,popularity:n,_id:r}=e,c=d.some(i=>i.id===r);return`
        <li class="popular-product-card">
            <div class="poppular-img-wrapper">
              <img
                class="popular-card-img"
                src="${t}"
                alt="${s}"
                loading="lazy"
              />
            </div>
    
                <div class="popular-card-info" >
                    <h3 class="popular-card-title">${s}</h3>
                    <div class="popular-span-container">
                    <span class="popular-span-info">Category: <span class="span-info-value">${a}</span></span>
                    <span class="popular-span-info">Size: <span class="span-info-value">${o}</span></span>
                    <span class="popular-span-info">Popularity: <span class="span-info-value">${n}</span></span>
                    </div>
                </div>
                    
                <button data-id=${r} type="submit" class="popular-card-btn js-addToCart-btn" ${c?"disabled":""}>
                    <svg class="popular-cart-svg" width="12" height="12">
                        <use href="${u}${c?"#icon-checkmark":"#icon-shopping-cart"}"></use>
                    </svg>
                </button>
            
        </li>
        `}function Z(e){const{img:t,name:s,price:a,_id:o}=e,n=d.some(r=>r.id===o);return`
      <li class="discount-product-card">
      <div class="discount-img-wrapper">
        <img
          class="discount-card-img"
          src="${t}"
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
              <button data-id=${o} type="submit" class="addToCart-btn js-addToCart-btn" ${n?"disabled":""}>
                  <svg class="cart-svg" width="18" height="18">
                      <use href="${u}${n?"#icon-checkmark":"#icon-shopping-cart"}"></use>
                  </svg>
              </button>
          </div>
      </div>
  </li>`}function y(e,t,s){let a;t==="general"?a=e.map(o=>Q(o)):t==="popular"?a=e.map(o=>G(o)):a=e.map(o=>Z(o)),s.innerHTML=a.join("")}function k(){const e=document.querySelector(".modal-product-backdrop");e.remove(),e.classList.add("is-hidden"),document.body.classList.remove("is-overflow-hidden")}function Y(e){const t=document.querySelector(".modal-product-backdrop");e.key==="Escape"&&(k(),t.classList.add("is-hidden"))}function K(e){const t=document.querySelector(".modal-product-backdrop");e.target===t&&(k(),t.classList.remove("is-hidden"))}function X(e){let{name:t,category:s,desc:a,img:o,price:n,size:r,popularity:c,_id:i}=e;const l=d.some(p=>p.id===i);return`
          <div class="modal-product-backdrop" data-modal>
          <div class="modal-product">
              <button type="button" class="modal-btn-close" data-modal-close>
                  <svg class="modal-svg-close" width="28" height="28">
                      <use href="${u}#icon-close"></use>
                  </svg>
              </button>
      
              <div class="modal-product-info">
                  <div class="modal-product-img-wrapper">
                    
                      <img class="modal-product-img" src="${o}" alt="${t}" width="1660">
        
                  </div>
      
                  <div class="modal-product-description">
                      <h2 class="modal-title">${t}</h2>
      
                      <ul class="modal-product-list">
                          <li class="modal-product-item">
                              <h3 class="modal-product-caption">Category:</h3>
                              <p class="modal-product-content">${s}</p>
                          </li>
                          <li class="modal-product-item">
                              <h3 class="modal-product-caption">Size:</h3>
                              <p class="modal-product-content">${r}</p>
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
      `}async function f(e){if(e.target.closest(".js-addToCart-btn"))return;const a=e.target.closest("li").querySelector(".js-addToCart-btn").getAttribute("data-id"),o=await q(a);document.querySelector("body").insertAdjacentHTML("beforeend",X(o)),document.body.classList.add("is-overflow-hidden"),document.querySelector(".modal-btn-close").addEventListener("click",k),document.addEventListener("keydown",Y),document.addEventListener("click",K),document.querySelector(".modal-product-btn-price").addEventListener("click",ue)}async function E(e){const t=e.currentTarget.getAttribute("data-id");e.currentTarget.querySelector("use").setAttribute("href",`${u}#icon-checkmark`),e.currentTarget.setAttribute("disabled","true");const a={};try{const n=await q(t);console.log(n);const{category:r,size:c,_id:i,name:l,price:p,img:m}=n;a.category=r,a.size=c,a.id=i,a.name=l,a.price=p,a.img=m}catch(n){console.log(n)}const o=window.localStorage;d.push(a),o.setItem("product",JSON.stringify(d)),L()}function j(){return`
        <div class="sorry-wrapper">
            <span class="emoji-sorry">&#128561;</span>
            <h3 class="sorry-message-text"> Sorry, there are no items matching your filter request!</h3>
        </div> 
    `}const ee=document.querySelector(".filters-form"),te=document.querySelector(".filters-categories"),se=document.querySelector(".filters-allTypes"),ae=document.querySelectorAll(".filters-down-svg"),re=document.querySelectorAll(".filters-allTypes-item"),h=document.querySelector(".products-list-general"),oe=document.querySelector(".products-list-discount"),ce=document.querySelector(".products-list-popular");let d=[];const ne=()=>{const e=v.load("product");if(e===void 0){document.querySelector("#header-length").innerHTML="0";return}document.querySelector("#header-length").innerHTML=e.length,d=e};ne();function ie(){v.load("queryParams")||v.save("queryParams",{keyword:"",category:"",page:1,limit:9})}ie();document.addEventListener("DOMContentLoaded",async()=>{try{const e=await W();_(e),document.querySelectorAll(".filters-categories-item").forEach(l=>{l.addEventListener("click",O)});const t=v.load("queryParams"),a=(await N(t)).results;y(a,"general",h),document.querySelectorAll(".product-card-general").forEach(l=>{l.addEventListener("click",f)});const n=await U();y(n,"discount",oe),document.querySelectorAll(".discount-product-card").forEach(l=>{l.addEventListener("click",f)});const c=await V();y(c,"popular",ce),document.querySelectorAll(".popular-product-card").forEach(l=>{l.addEventListener("click",f),document.querySelectorAll(".js-addToCart-btn").forEach(m=>{m.addEventListener("click",E)})})}catch(e){console.log(e)}});te.addEventListener("click",T);se.addEventListener("click",T);ae.forEach(e=>{e.addEventListener("click",F)});re.forEach(e=>{e.addEventListener("click",R)});ee.addEventListener("submit",async e=>{e.preventDefault();try{const t=$(),a=(await C(t)).results;if(h.innerHTML="",a.length===0){const r=j();h.insertAdjacentHTML("beforeend",r)}else y(a,"general",h),le()&&await de(t);document.querySelectorAll(".product-card-general").forEach(r=>{r.addEventListener("click",f)}),document.querySelectorAll(".js-addToCart-btn").forEach(r=>{r.addEventListener("click",E)})}catch(t){console.log(t)}});function le(){return!0}async function de(e){try{console.log("Sending data to server:",e)}catch(t){console.error("Error sending data to server:",t)}}async function ue(e){const t={},s=e.currentTarget.getAttribute("data-id"),a=d.some(o=>o.id===s);if(!a){e.currentTarget.innerHTML=`Remove from <svg class="modal-btn-svg" width="18" height="18">
                <use class="modal-icon-svg" href="${u}#icon-shopping-cart"></use>
                </svg>`,document.querySelectorAll(".js-addToCart-btn").forEach(r=>{let c=r.getAttribute("data-id");const i=r.querySelector("use");c===s&&(i.setAttribute("href",`${u}#icon-checkmark`),r.disabled=!0)});try{const r=await q(s),{category:c,size:i,_id:l,name:p,price:m,img:z}=r;t.category=c,t.size=i,t.id=l,t.name=p,t.price=m,t.img=z}catch(r){console.log(r)}const n=window.localStorage;d.push(t),n.setItem("product",JSON.stringify(d)),L()}if(a){e.currentTarget.innerHTML=`Add to <svg class="modal-btn-svg" width="18" height="18">
        <use class="modal-icon-svg" href="${u}#icon-shopping-cart"></use>
        </svg>`;const o=e.currentTarget.getAttribute("data-id");d=d.filter(r=>r.id!==o),document.querySelectorAll(".js-addToCart-btn").forEach(r=>{let c=r.getAttribute("data-id");const i=r.querySelector("use");c===s&&(i.setAttribute("href",`${u}#icon-shopping-cart`),r.disabled=!1)}),localStorage.setItem("product",JSON.stringify(d)),L()}}const w=document.querySelector(".products-list-general"),P=document.querySelector("#tui-pagination-container"),pe=()=>window.innerWidth<=767?2:4,D=()=>{const e={itemsPerPage:1,visiblePages:pe(),page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="icon tui-page-btn tui-{{type}}">
        <span class="tui-ico-{{type}}">{{type}}
        </span>
        </a>`,disabledMoveButton:`<span class="tui-page-btn tui-is-disabled tui-{{type}}">
        <span class="tui-ico-{{type}}">{{type}}
        </span>
        </span>`,moreButton:'<a href="#"  class="tui-page-btn-el tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};return new H(P,e)};let b=D();window.addEventListener("resize",()=>{b=D()});const ge=async e=>{const t=e.page;console.log(t);try{const s=$();s.page=t;const o=(await C(s)).results;if(w.innerHTML="",o.length===0){const c=j();w.insertAdjacentHTML("beforeend",c)}else y(o,"general",w);document.querySelectorAll(".product-card-general").forEach(c=>{c.addEventListener("click",f)}),document.querySelectorAll(".js-addToCart-btn").forEach(c=>{c.addEventListener("click",E)})}catch(s){console.log(s)}};b.on("afterMove",ge);const I=async e=>{try{const t=$(),s=await C(t);s.totalPages===1?P.classList.add("is-hidden"):(b.setTotalItems(s.totalPages),P.classList.remove("is-hidden")),b.reset()}catch(t){console.log(t)}};document.addEventListener("DOMContentLoaded",I);const me=document.querySelector(".filters-form");me.addEventListener("submit",I);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".products-list-general");function t(){window.scrollY/(document.body.scrollHeight-window.innerHeight)*100>=30&&e.classList.add("animation")}window.addEventListener("scroll",t)});
//# sourceMappingURL=commonHelpers2.js.map
