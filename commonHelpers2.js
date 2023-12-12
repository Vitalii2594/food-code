import{l as h,i as u,g as w}from"./assets/footer-736c3e6d.js";import{a as g,P as z}from"./assets/vendor-d873ffc3.js";function x(t){const s=[...t,"Show all"].map(o=>`<li class="filters-categories-item" data-category="${o}">${o}</li>`);document.querySelector(".filters-categories-list").insertAdjacentHTML("beforeend",s.join("").replaceAll("_"," ")),console.log("Rendered Category List:",s)}function E(t){const e=this.closest(".filters-wrap"),s=e.querySelector(".filters-down-svg");e.querySelector("ul").classList.toggle("list-active"),s.classList.toggle("rotate")}function H(t){this.classList.toggle("rotate");const e=this.previousElementSibling;e.classList.contains("list-active")?e.classList.remove("list-active"):e.classList.add("list-active")}function T(){const t=document.querySelector(".filters-search-btn");t&&t.click()}function _(t){const e=document.querySelector(".filters-categories"),s=document.querySelector(".filters-categories-list"),a=t.target.textContent;e.textContent=a,s.classList.remove("list-active"),s.nextElementSibling.classList.remove("rotate"),T()}function F(t){const e=document.querySelector(".filters-allTypes"),s=document.querySelector(".filters-allTypes-list"),a=t.target.textContent;e.textContent=a,s.classList.remove("list-active"),s.nextElementSibling.classList.remove("rotate"),T()}function C(){const t=document.querySelector(".filters-allTypes").textContent.split(" ").join(""),s=document.querySelector(".filters-categories").textContent.trim(),a=s.toLowerCase()==="all"?"":s.split(" ").join("_").replace("/","&"),o=document.querySelector(".filters-input").value,n={category:a,keyword:o,filterSearch:`by${t}`},r={category:a,keyword:o,filterSearch:`by${t}`,page:1,limit:9};return h.save("queryParams",r),n}function A(t){let e;switch(t){case"byAtoZ":e="byABC=true";break;case"byZtoA":e="byABC=false";break;case"byCheaperfirst":e="byPrice=true";break;case"byExpensivefirst":e="byPrice=false";break;case"byPopular":e="byPopularity=false";break;case"byNotpopular":e="byPopularity=true";break;case"Show all":e="";break;default:e="byABC=true";break}return e}const B="https://food-boutique.b.goit.study/api/products";async function O(){return(await g.get("https://food-boutique.b.goit.study/api/products/categories")).data}async function R(t){let{keyword:e,category:s,page:a,limit:o,filterSearch:n}=t;const r=window.innerWidth;r<768?o=6:r>=768&&r<1440?o=8:o=9;const c=new URLSearchParams({page:a,limit:o});return e!==""&&c.append("keyword",e),s!==""&&s!=="Show_all"&&s!=="Categories"&&c.append("category",s),(await g.get(`${B}?${c}&${A(n)}`)).data}async function W(){return(await g.get("https://food-boutique.b.goit.study/api/products/discount")).data}async function N(){return(await g.get("https://food-boutique.b.goit.study/api/products/popular")).data}async function P(t){let e,{keyword:s,category:a,page:o=1,limit:n,filterSearch:r}=t;const c=window.innerWidth;c<768?n=6:c>=768&&c<1440?n=8:n=9;const i=new URLSearchParams({limit:n,page:o});return s!==""&&i.append("keyword",s),a!==""&&a!=="Show_all"&&a!=="Categories"&&i.append("category",a),e=await g.get(`${B}?${i}&${A(r)}`),e.data}async function $(t){return(await g.get(`https://food-boutique.b.goit.study/api/products/${t}`)).data}function V(t){let{img:e,name:s,category:a,size:o,popularity:n,price:r,_id:c,is10PercentOff:i}=t;const l=d.some(p=>p.id===c);return`
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
      </li>
      `}function U(t){const{img:e,name:s,category:a,size:o,popularity:n,_id:r}=t,c=d.some(i=>i.id===r);return`
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
        `}function J(t){const{img:e,name:s,price:a,_id:o}=t,n=d.some(r=>r.id===o);return`
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
              <button data-id=${o} type="submit" class="addToCart-btn js-addToCart-btn" ${n?"disabled":""}>
                  <svg class="cart-svg" width="18" height="18">
                      <use href="${u}${n?"#icon-checkmark":"#icon-shopping-cart"}"></use>
                  </svg>
              </button>
          </div>
      </div>
  </li>`}function y(t,e,s){let a;e==="general"?a=t.map(o=>V(o)):e==="popular"?a=t.map(o=>U(o)):a=t.map(o=>J(o)),s.innerHTML=a.join("")}function q(){const t=document.querySelector(".modal-product-backdrop");t.remove(),t.classList.add("is-hidden"),document.body.classList.remove("is-overflow-hidden")}function Q(t){const e=document.querySelector(".modal-product-backdrop");t.key==="Escape"&&(q(),e.classList.add("is-hidden"))}function G(t){const e=document.querySelector(".modal-product-backdrop");t.target===e&&(q(),e.classList.remove("is-hidden"))}function Z(t){let{name:e,category:s,desc:a,img:o,price:n,size:r,popularity:c,_id:i}=t;const l=d.some(p=>p.id===i);return`
          <div class="modal-product-backdrop" data-modal>
          <div class="modal-product">
              <button type="button" class="modal-btn-close" data-modal-close>
                  <svg class="modal-svg-close" width="28" height="28">
                      <use href="${u}#icon-close"></use>
                  </svg>
              </button>
      
              <div class="modal-product-info">
                  <div class="modal-product-img-wrapper">
                    
                      <img class="modal-product-img" src="${o}" alt="${e}" width="1660">
        
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
      `}async function f(t){if(t.target.closest(".js-addToCart-btn"))return;const a=t.target.closest("li").querySelector(".js-addToCart-btn").getAttribute("data-id"),o=await $(a);document.querySelector("body").insertAdjacentHTML("beforeend",Z(o)),document.body.classList.add("is-overflow-hidden"),document.querySelector(".modal-btn-close").addEventListener("click",q),document.addEventListener("keydown",Q),document.addEventListener("click",G),document.querySelector(".modal-product-btn-price").addEventListener("click",ct)}async function k(t){const e=t.currentTarget.getAttribute("data-id");t.currentTarget.querySelector("use").setAttribute("href",`${u}#icon-checkmark`),t.currentTarget.setAttribute("disabled","true");const a={};try{const n=await $(e);console.log(n);const{category:r,size:c,_id:i,name:l,price:p,img:m}=n;a.category=r,a.size=c,a.id=i,a.name=l,a.price=p,a.img=m}catch(n){console.log(n)}const o=window.localStorage;d.push(a),o.setItem("product",JSON.stringify(d)),w()}function M(){return`
        <div class="sorry-wrapper">
            <span class="emoji-sorry">&#128561;</span>
            <h3 class="sorry-message-text"> Sorry, there are no items matching your filter request!</h3>
        </div> 
    `}const Y=document.querySelector(".filters-form"),K=document.querySelector(".filters-categories"),X=document.querySelector(".filters-allTypes"),tt=document.querySelectorAll(".filters-down-svg"),et=document.querySelectorAll(".filters-allTypes-item"),b=document.querySelector(".products-list-general"),st=document.querySelector(".products-list-discount"),at=document.querySelector(".products-list-popular");let d=[];const ot=()=>{const t=h.load("product");if(t===void 0){document.querySelector("#header-length").innerHTML="0";return}document.querySelector("#header-length").innerHTML=t.length,d=t};ot();function rt(){h.load("queryParams")||h.save("queryParams",{keyword:"",category:"",page:1,limit:9})}rt();document.addEventListener("DOMContentLoaded",async()=>{try{const t=await O();x(t),document.querySelectorAll(".filters-categories-item").forEach(l=>{l.addEventListener("click",_)});const e=h.load("queryParams"),a=(await R(e)).results;y(a,"general",b),document.querySelectorAll(".product-card-general").forEach(l=>{l.addEventListener("click",f)});const n=await W();y(n,"discount",st),document.querySelectorAll(".discount-product-card").forEach(l=>{l.addEventListener("click",f)});const c=await N();y(c,"popular",at),document.querySelectorAll(".popular-product-card").forEach(l=>{l.addEventListener("click",f),document.querySelectorAll(".js-addToCart-btn").forEach(m=>{m.addEventListener("click",k)})})}catch(t){console.log(t)}});K.addEventListener("click",E);X.addEventListener("click",E);tt.forEach(t=>{t.addEventListener("click",H)});et.forEach(t=>{t.addEventListener("click",F)});Y.addEventListener("submit",async t=>{t.preventDefault();try{const e=C(),a=(await P(e)).results;if(b.innerHTML="",a.length===0){const r=M();b.insertAdjacentHTML("beforeend",r)}else y(a,"general",b);document.querySelectorAll(".product-card-general").forEach(r=>{r.addEventListener("click",f)}),document.querySelectorAll(".js-addToCart-btn").forEach(r=>{r.addEventListener("click",k)})}catch(e){console.log(e)}});async function ct(t){const e={},s=t.currentTarget.getAttribute("data-id"),a=d.some(o=>o.id===s);if(!a){t.currentTarget.innerHTML=`Remove from <svg class="modal-btn-svg" width="18" height="18">
                <use class="modal-icon-svg" href="${u}#icon-shopping-cart"></use>
                </svg>`,document.querySelectorAll(".js-addToCart-btn").forEach(r=>{let c=r.getAttribute("data-id");const i=r.querySelector("use");c===s&&(i.setAttribute("href",`${u}#icon-checkmark`),r.disabled=!0)});try{const r=await $(s),{category:c,size:i,_id:l,name:p,price:m,img:I}=r;e.category=c,e.size=i,e.id=l,e.name=p,e.price=m,e.img=I}catch(r){console.log(r)}const n=window.localStorage;d.push(e),n.setItem("product",JSON.stringify(d)),w()}if(a){t.currentTarget.innerHTML=`Add to <svg class="modal-btn-svg" width="18" height="18">
        <use class="modal-icon-svg" href="${u}#icon-shopping-cart"></use>
        </svg>`;const o=t.currentTarget.getAttribute("data-id");d=d.filter(r=>r.id!==o),document.querySelectorAll(".js-addToCart-btn").forEach(r=>{let c=r.getAttribute("data-id");const i=r.querySelector("use");c===s&&(i.setAttribute("href",`${u}#icon-shopping-cart`),r.disabled=!1)}),localStorage.setItem("product",JSON.stringify(d)),w()}}const S=document.querySelector(".products-list-general"),L=document.querySelector("#tui-pagination-container"),nt=()=>window.innerWidth<=767?2:4,j=()=>{const t={itemsPerPage:1,visiblePages:nt(),page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="icon tui-page-btn tui-{{type}}">
        <span class="tui-ico-{{type}}">{{type}}
        </span>
        </a>`,MoveButton:`<span class="tui-page-btn  tui-{{type}}">
        <span class="tui-ico-{{type}}">{{type}}
        </span>
        </span>`,moreButton:'<a href="#"  class="tui-page-btn-el tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};return new z(L,t)};let v=j();window.addEventListener("resize",()=>{v.destroy(),v=j()});const it=async t=>{const e=t.page;console.log(e);try{const s=C();s.page=e;const o=(await P(s)).results;if(S.innerHTML="",o.length===0){const c=M();S.insertAdjacentHTML("beforeend",c)}else y(o,"general",S);document.querySelectorAll(".product-card-general").forEach(c=>{c.addEventListener("click",f)}),document.querySelectorAll(".js-addToCart-btn").forEach(c=>{c.addEventListener("click",k)})}catch(s){console.log(s)}};v.on("afterMove",it);const D=async t=>{try{const e=C(),s=await P(e);s.totalPages===1?L.classList.add("is-hidden"):(v.setTotalItems(s.totalPages),L.classList.remove("is-hidden")),v.reset()}catch(e){console.log(e)}};document.addEventListener("DOMContentLoaded",D);const lt=document.querySelector(".filters-form");lt.addEventListener("submit",D);document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".products-list-general");function e(){window.scrollY/(document.body.scrollHeight-window.innerHeight)*100>=30&&t.classList.add("animation")}window.addEventListener("scroll",e)});
//# sourceMappingURL=commonHelpers2.js.map
