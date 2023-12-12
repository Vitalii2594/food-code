import{l as h,i as u,g as L}from"./assets/footer-4718609f.js";import{a as g}from"./assets/vendor-50c9aa1c.js";function j(t){const e=t.map(s=>`<li class="filters-categories-item">${s}</li>`);document.querySelector(".filters-categories-list").insertAdjacentHTML("beforeend",e.join("").replaceAll("_"," "))}function k(t){const e=this.closest(".filters-wrap"),s=e.querySelector(".filters-down-svg"),a=e.querySelector("ul");a.classList.contains("list-active")?a.classList.remove("list-active"):a.classList.add("list-active"),s.classList.contains("rotate")?s.classList.remove("rotate"):s.classList.add("rotate")}function I(t){this.classList.contains("rotate")?this.classList.remove("rotate"):this.classList.add("rotate"),this.previousElementSibling.classList.contains("list-active")?this.previousElementSibling.classList.remove("list-active"):this.previousElementSibling.classList.add("list-active")}function D(t){const e=document.querySelector(".filters-categories"),s=document.querySelector(".filters-categories-list"),a=t.target.textContent;e.textContent=a,s.classList.remove("list-active"),s.nextElementSibling.classList.remove("rotate")}function z(t){const e=document.querySelector(".filters-allTypes"),s=document.querySelector(".filters-allTypes-list"),a=t.target.textContent;e.textContent=a,s.classList.remove("list-active"),s.nextElementSibling.classList.remove("rotate")}function w(){const t=document.querySelector(".filters-allTypes").textContent.split(" ").join(""),e=document.querySelector(".filters-categories").textContent.split(" ").join("_").replace("/","&"),s=document.querySelector(".filters-input").value,a={category:e,keyword:s,filterSearch:`by${t}`},r={category:e,keyword:s,filterSearch:`by${t}`,page:1,limit:9};return h.save("queryParams",r),a}function T(t){let e;switch(t){case"byAtoZ":e="byABC=true";break;case"byZtoA":e="byABC=false";break;case"byCheaperfirst":e="byPrice=true";break;case"byExpensivefirst":e="byPrice=false";break;case"byPopular":e="byPopularity=false";break;case"byNotpopular":e="byPopularity=true";break;default:e="byABC=true";break}return e}const E="https://food-boutique.b.goit.study/api/products";async function H(){return(await g.get("https://food-boutique.b.goit.study/api/products/categories")).data}async function _(t){let{keyword:e,category:s,page:a,limit:r,filterSearch:n}=t;const o=window.innerWidth;o<768?r=6:o>=768&&o<1440?r=8:r=9;const c=new URLSearchParams({page:a,limit:r});return e!==""&&c.append("keyword",e),s!==""&&s!=="Show_all"&&s!=="Categories"&&c.append("category",s),(await g.get(`${E}?${c}&${T(n)}`)).data}async function x(){return(await g.get("https://food-boutique.b.goit.study/api/products/discount")).data}async function F(){return(await g.get("https://food-boutique.b.goit.study/api/products/popular")).data}async function C(t){let e,{keyword:s,category:a,page:r=1,limit:n,filterSearch:o}=t;const c=window.innerWidth;c<768?n=6:c>=768&&c<1440?n=8:n=9;const i=new URLSearchParams({limit:n,page:r});return s!==""&&i.append("keyword",s),a!==""&&a!=="Show_all"&&a!=="Categories"&&i.append("category",a),e=await g.get(`${E}?${i}&${T(o)}`),e.data}async function P(t){return(await g.get(`https://food-boutique.b.goit.study/api/products/${t}`)).data}function O(t){let{img:e,name:s,category:a,size:r,popularity:n,price:o,_id:c,is10PercentOff:i}=t;const l=d.some(p=>p.id===c);return`
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
      `}function R(t){const{img:e,name:s,category:a,size:r,popularity:n,_id:o}=t,c=d.some(i=>i.id===o);return`
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
        `}function N(t){const{img:e,name:s,price:a,_id:r}=t,n=d.some(o=>o.id===r);return`
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
  </li>`}function y(t,e,s){let a;e==="general"?a=t.map(r=>O(r)):e==="popular"?a=t.map(r=>R(r)):a=t.map(r=>N(r)),s.innerHTML=a.join("")}function $(){const t=document.querySelector(".modal-product-backdrop");t.remove(),t.classList.add("is-hidden"),document.body.classList.remove("is-overflow-hidden")}function W(t){const e=document.querySelector(".modal-product-backdrop");t.key==="Escape"&&($(),e.classList.add("is-hidden"))}function U(t){const e=document.querySelector(".modal-product-backdrop");t.target===e&&($(),e.classList.remove("is-hidden"))}function V(t){let{name:e,category:s,desc:a,img:r,price:n,size:o,popularity:c,_id:i}=t;const l=d.some(p=>p.id===i);return`
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
      `}async function f(t){if(t.target.closest(".js-addToCart-btn"))return;const a=t.target.closest("li").querySelector(".js-addToCart-btn").getAttribute("data-id"),r=await P(a);document.querySelector("body").insertAdjacentHTML("beforeend",V(r)),document.body.classList.add("is-overflow-hidden"),document.querySelector(".modal-btn-close").addEventListener("click",$),document.addEventListener("keydown",W),document.addEventListener("click",U),document.querySelector(".modal-product-btn-price").addEventListener("click",st)}async function q(t){const e=t.currentTarget.getAttribute("data-id");t.currentTarget.querySelector("use").setAttribute("href",`${u}#icon-checkmark`),t.currentTarget.setAttribute("disabled","true");const a={};try{const n=await P(e);console.log(n);const{category:o,size:c,_id:i,name:l,price:p,img:m}=n;a.category=o,a.size=c,a.id=i,a.name=l,a.price=p,a.img=m}catch(n){console.log(n)}const r=window.localStorage;d.push(a),r.setItem("product",JSON.stringify(d)),L()}function A(){return`
        <div class="sorry-wrapper">
            <span class="emoji-sorry">&#128561;</span>
            <h3 class="sorry-message-text"> Sorry, there are no items matching your filter request!</h3>
        </div> 
    `}const J=document.querySelector(".filters-form"),Q=document.querySelector(".filters-categories"),G=document.querySelector(".filters-allTypes"),Z=document.querySelectorAll(".filters-down-svg"),Y=document.querySelectorAll(".filters-allTypes-item"),v=document.querySelector(".products-list-general"),K=document.querySelector(".products-list-discount"),X=document.querySelector(".products-list-popular");let d=[];const tt=()=>{const t=h.load("product");if(t===void 0){document.querySelector("#header-length").innerHTML="0";return}document.querySelector("#header-length").innerHTML=t.length,d=t};tt();function et(){h.load("queryParams")||h.save("queryParams",{keyword:"",category:"",page:1,limit:9})}et();document.addEventListener("DOMContentLoaded",async()=>{try{const t=await H();j(t),document.querySelectorAll(".filters-categories-item").forEach(l=>{l.addEventListener("click",D)});const e=h.load("queryParams"),a=(await _(e)).results;y(a,"general",v),document.querySelectorAll(".product-card-general").forEach(l=>{l.addEventListener("click",f)});const n=await x();y(n,"discount",K),document.querySelectorAll(".discount-product-card").forEach(l=>{l.addEventListener("click",f)});const c=await F();y(c,"popular",X),document.querySelectorAll(".popular-product-card").forEach(l=>{l.addEventListener("click",f),document.querySelectorAll(".js-addToCart-btn").forEach(m=>{m.addEventListener("click",q)})})}catch(t){console.log(t)}});Q.addEventListener("click",k);G.addEventListener("click",k);Z.forEach(t=>{t.addEventListener("click",I)});Y.forEach(t=>{t.addEventListener("click",z)});J.addEventListener("submit",async t=>{t.preventDefault();try{const e=w(),a=(await C(e)).results;if(v.innerHTML="",a.length===0){const o=A();v.insertAdjacentHTML("beforeend",o)}else y(a,"general",v);document.querySelectorAll(".product-card-general").forEach(o=>{o.addEventListener("click",f)}),document.querySelectorAll(".js-addToCart-btn").forEach(o=>{o.addEventListener("click",q)})}catch(e){console.log(e)}});async function st(t){const e={},s=t.currentTarget.getAttribute("data-id"),a=d.some(r=>r.id===s);if(!a){t.currentTarget.innerHTML=`Remove from <svg class="modal-btn-svg" width="18" height="18">
                <use class="modal-icon-svg" href="${u}#icon-shopping-cart"></use>
                </svg>`,document.querySelectorAll(".js-addToCart-btn").forEach(o=>{let c=o.getAttribute("data-id");const i=o.querySelector("use");c===s&&(i.setAttribute("href",`${u}#icon-checkmark`),o.disabled=!0)});try{const o=await P(s),{category:c,size:i,_id:l,name:p,price:m,img:M}=o;e.category=c,e.size=i,e.id=l,e.name=p,e.price=m,e.img=M}catch(o){console.log(o)}const n=window.localStorage;d.push(e),n.setItem("product",JSON.stringify(d)),L()}if(a){t.currentTarget.innerHTML=`Add to <svg class="modal-btn-svg" width="18" height="18">
        <use class="modal-icon-svg" href="${u}#icon-shopping-cart"></use>
        </svg>`;const r=t.currentTarget.getAttribute("data-id");d=d.filter(o=>o.id!==r),document.querySelectorAll(".js-addToCart-btn").forEach(o=>{let c=o.getAttribute("data-id");const i=o.querySelector("use");c===s&&(i.setAttribute("href",`${u}#icon-shopping-cart`),o.disabled=!1)}),localStorage.setItem("product",JSON.stringify(d)),L()}}const S=document.querySelector(".products-list-general"),at={itemsPerPage:1,visiblePages:4,page:2,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="icon tui-page-btn tui-{{type}}">
      <span class="tui-ico-{{type}}">{{type}}>
      </span>
      </a>`,disabledMoveButton:`<span class="tui-page-btn tui-is-disabled tui-{{type}}">
      <span class="tui-ico-{{type}}">{{type}}>
      </span>
      </span>`,moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},events:{afterMove:function(t){t.page-t.oldPage>0&&b.movePageTo(2)}}},b=new tui.Pagination(container,at),ot=async t=>{const e=t.page;console.log(e);try{const s=w();s.page=e;const r=(await C(s)).results;if(S.innerHTML="",r.length===0){const c=A();S.insertAdjacentHTML("beforeend",c)}else y(r,"general",S);document.querySelectorAll(".product-card-general").forEach(c=>{c.addEventListener("click",f)}),document.querySelectorAll(".js-addToCart-btn").forEach(c=>{c.addEventListener("click",q)})}catch(s){console.log(s)}};b.on("afterMove",ot);const B=async t=>{try{const e=w(),s=await C(e);s.totalPages===1?container.classList.add("is-hidden"):(b.setTotalItems(s.totalPages),container.classList.remove("is-hidden")),b.reset()}catch(e){console.log(e)}};document.addEventListener("DOMContentLoaded",B);const rt=document.querySelector(".filters-form");rt.addEventListener("submit",B);document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".products-list-general");function e(){window.scrollY/(document.body.scrollHeight-window.innerHeight)*100>=30&&t.classList.add("animation")}window.addEventListener("scroll",e)});
//# sourceMappingURL=commonHelpers2.js.map
