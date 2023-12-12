import{l as h,i as u,g as S}from"./assets/footer-a316bc8b.js";import{a as m,P as D}from"./assets/vendor-d873ffc3.js";function I(e){const t=e.map(s=>`<li class="filters-categories-item">${s}</li>`);document.querySelector(".filters-categories-list").insertAdjacentHTML("beforeend",t.join("").replaceAll("_"," "))}function E(e){const t=this.closest(".filters-wrap"),s=t.querySelector(".filters-down-svg"),a=t.querySelector("ul");a.classList.contains("list-active")?a.classList.remove("list-active"):a.classList.add("list-active"),s.classList.contains("rotate")?s.classList.remove("rotate"):s.classList.add("rotate")}function x(e){this.classList.contains("rotate")?this.classList.remove("rotate"):this.classList.add("rotate"),this.previousElementSibling.classList.contains("list-active")?this.previousElementSibling.classList.remove("list-active"):this.previousElementSibling.classList.add("list-active")}function z(e){const t=document.querySelector(".filters-categories"),s=document.querySelector(".filters-categories-list"),a=e.target.textContent;t.textContent=a,s.classList.remove("list-active"),s.nextElementSibling.classList.remove("rotate")}function H(e){const t=document.querySelector(".filters-allTypes"),s=document.querySelector(".filters-allTypes-list"),a=e.target.textContent;t.textContent=a,s.classList.remove("list-active"),s.nextElementSibling.classList.remove("rotate")}function w(){const e=document.querySelector(".filters-allTypes").textContent.split(" ").join(""),t=document.querySelector(".filters-categories").textContent.split(" ").join("_").replace("/","&"),s=document.querySelector(".filters-input").value,a={category:t,keyword:s,filterSearch:`by${e}`},r={category:t,keyword:s,filterSearch:`by${e}`,page:1,limit:9};return h.save("queryParams",r),a}function T(e){let t;switch(e){case"byAtoZ":t="byABC=true";break;case"byZtoA":t="byABC=false";break;case"byCheaperfirst":t="byPrice=true";break;case"byExpensivefirst":t="byPrice=false";break;case"byPopular":t="byPopularity=false";break;case"byNotpopular":t="byPopularity=true";break;default:t="byABC=true";break}return t}const A="https://food-boutique.b.goit.study/api/products";async function _(){return(await m.get("https://food-boutique.b.goit.study/api/products/categories")).data}async function F(e){let{keyword:t,category:s,page:a,limit:r,filterSearch:n}=e;const o=window.innerWidth;o<768?r=6:o>=768&&o<1440?r=8:r=9;const c=new URLSearchParams({page:a,limit:r});return t!==""&&c.append("keyword",t),s!==""&&s!=="Show_all"&&s!=="Categories"&&c.append("category",s),(await m.get(`${A}?${c}&${T(n)}`)).data}async function O(){return(await m.get("https://food-boutique.b.goit.study/api/products/discount")).data}async function R(){return(await m.get("https://food-boutique.b.goit.study/api/products/popular")).data}async function $(e){let t,{keyword:s,category:a,page:r=1,limit:n,filterSearch:o}=e;const c=window.innerWidth;c<768?n=6:c>=768&&c<1440?n=8:n=9;const i=new URLSearchParams({limit:n,page:r});return s!==""&&i.append("keyword",s),a!==""&&a!=="Show_all"&&a!=="Categories"&&i.append("category",a),t=await m.get(`${A}?${i}&${T(o)}`),t.data}async function P(e){return(await m.get(`https://food-boutique.b.goit.study/api/products/${e}`)).data}function N(e){let{img:t,name:s,category:a,size:r,popularity:n,price:o,_id:c,is10PercentOff:i}=e;const l=d.some(p=>p.id===c);return`
      <li class="product-card-general">
          <div class="img-wrapper">
            <img
              class="card-img"
              src="${t}"
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
      `}function W(e){const{img:t,name:s,category:a,size:r,popularity:n,_id:o}=e,c=d.some(i=>i.id===o);return`
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
        `}function U(e){const{img:t,name:s,price:a,_id:r}=e,n=d.some(o=>o.id===r);return`
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
              <button data-id=${r} type="submit" class="addToCart-btn js-addToCart-btn" ${n?"disabled":""}>
                  <svg class="cart-svg" width="18" height="18">
                      <use href="${u}${n?"#icon-checkmark":"#icon-shopping-cart"}"></use>
                  </svg>
              </button>
          </div>
      </div>
  </li>`}function f(e,t,s){let a;t==="general"?a=e.map(r=>N(r)):t==="popular"?a=e.map(r=>W(r)):a=e.map(r=>U(r)),s.innerHTML=a.join("")}function k(){const e=document.querySelector(".modal-product-backdrop");e.remove(),e.classList.add("is-hidden"),document.body.classList.remove("is-overflow-hidden")}function V(e){const t=document.querySelector(".modal-product-backdrop");e.key==="Escape"&&(k(),t.classList.add("is-hidden"))}function J(e){const t=document.querySelector(".modal-product-backdrop");e.target===t&&(k(),t.classList.remove("is-hidden"))}function Q(e){let{name:t,category:s,desc:a,img:r,price:n,size:o,popularity:c,_id:i}=e;const l=d.some(p=>p.id===i);return`
          <div class="modal-product-backdrop" data-modal>
          <div class="modal-product">
              <button type="button" class="modal-btn-close" data-modal-close>
                  <svg class="modal-svg-close" width="28" height="28">
                      <use href="${u}#icon-close"></use>
                  </svg>
              </button>
      
              <div class="modal-product-info">
                  <div class="modal-product-img-wrapper">
                    
                      <img class="modal-product-img" src="${r}" alt="${t}" width="1660">
        
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
      `}async function y(e){if(e.target.closest(".js-addToCart-btn"))return;const a=e.target.closest("li").querySelector(".js-addToCart-btn").getAttribute("data-id"),r=await P(a);document.querySelector("body").insertAdjacentHTML("beforeend",Q(r)),document.body.classList.add("is-overflow-hidden"),document.querySelector(".modal-btn-close").addEventListener("click",k),document.addEventListener("keydown",V),document.addEventListener("click",J),document.querySelector(".modal-product-btn-price").addEventListener("click",ot)}async function q(e){const t=e.currentTarget.getAttribute("data-id");e.currentTarget.querySelector("use").setAttribute("href",`${u}#icon-checkmark`),e.currentTarget.setAttribute("disabled","true");const a={};try{const n=await P(t);console.log(n);const{category:o,size:c,_id:i,name:l,price:p,img:g}=n;a.category=o,a.size=c,a.id=i,a.name=l,a.price=p,a.img=g}catch(n){console.log(n)}const r=window.localStorage;d.push(a),r.setItem("product",JSON.stringify(d)),S()}function B(){return`
        <div class="sorry-wrapper">
            <span class="emoji-sorry">&#128561;</span>
            <h3 class="sorry-message-text"> Sorry, there are no items matching your filter request!</h3>
        </div> 
    `}const G=document.querySelector(".filters-form"),Z=document.querySelector(".filters-categories"),Y=document.querySelector(".filters-allTypes"),K=document.querySelectorAll(".filters-down-svg"),X=document.querySelectorAll(".filters-allTypes-item"),v=document.querySelector(".products-list-general"),tt=document.querySelector(".products-list-discount"),et=document.querySelector(".products-list-popular");let d=[];const st=()=>{const e=h.load("product");if(e===void 0){document.querySelector("#header-length").innerHTML="0";return}document.querySelector("#header-length").innerHTML=e.length,d=e};st();function at(){h.load("queryParams")||h.save("queryParams",{keyword:"",category:"",page:1,limit:9})}at();document.addEventListener("DOMContentLoaded",async()=>{try{const e=await _();I(e),document.querySelectorAll(".filters-categories-item").forEach(l=>{l.addEventListener("click",z)});const t=h.load("queryParams"),a=(await F(t)).results;f(a,"general",v),document.querySelectorAll(".product-card-general").forEach(l=>{l.addEventListener("click",y)});const n=await O();f(n,"discount",tt),document.querySelectorAll(".discount-product-card").forEach(l=>{l.addEventListener("click",y)});const c=await R();f(c,"popular",et),document.querySelectorAll(".popular-product-card").forEach(l=>{l.addEventListener("click",y),document.querySelectorAll(".js-addToCart-btn").forEach(g=>{g.addEventListener("click",q)})})}catch(e){console.log(e)}});Z.addEventListener("click",E);Y.addEventListener("click",E);K.forEach(e=>{e.addEventListener("click",x)});X.forEach(e=>{e.addEventListener("click",H)});G.addEventListener("submit",async e=>{e.preventDefault();try{const t=w(),a=(await $(t)).results;if(v.innerHTML="",a.length===0){const o=B();v.insertAdjacentHTML("beforeend",o)}else f(a,"general",v);document.querySelectorAll(".product-card-general").forEach(o=>{o.addEventListener("click",y)}),document.querySelectorAll(".js-addToCart-btn").forEach(o=>{o.addEventListener("click",q)})}catch(t){console.log(t)}});async function ot(e){const t={},s=e.currentTarget.getAttribute("data-id"),a=d.some(r=>r.id===s);if(!a){e.currentTarget.innerHTML=`Remove from <svg class="modal-btn-svg" width="18" height="18">
                <use class="modal-icon-svg" href="${u}#icon-shopping-cart"></use>
                </svg>`,document.querySelectorAll(".js-addToCart-btn").forEach(o=>{let c=o.getAttribute("data-id");const i=o.querySelector("use");c===s&&(i.setAttribute("href",`${u}#icon-checkmark`),o.disabled=!0)});try{const o=await P(s),{category:c,size:i,_id:l,name:p,price:g,img:j}=o;t.category=c,t.size=i,t.id=l,t.name=p,t.price=g,t.img=j}catch(o){console.log(o)}const n=window.localStorage;d.push(t),n.setItem("product",JSON.stringify(d)),S()}if(a){e.currentTarget.innerHTML=`Add to <svg class="modal-btn-svg" width="18" height="18">
        <use class="modal-icon-svg" href="${u}#icon-shopping-cart"></use>
        </svg>`;const r=e.currentTarget.getAttribute("data-id");d=d.filter(o=>o.id!==r),document.querySelectorAll(".js-addToCart-btn").forEach(o=>{let c=o.getAttribute("data-id");const i=o.querySelector("use");c===s&&(i.setAttribute("href",`${u}#icon-shopping-cart`),o.disabled=!1)}),localStorage.setItem("product",JSON.stringify(d)),S()}}const b=document.querySelector(".products-list-general"),L=document.querySelector("#tui-pagination-container"),rt={itemsPerPage:1,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:ct,currentPage:nt,moveButton:it,disabledMoveButton:lt,moreButton:dt}},C=new D(L,rt);function ct(e){const t=document.createElement("a");return t.href="#",t.classList.add("tui-page-btn"),t.textContent=e,t}function nt(e){const t=document.createElement("strong");return t.classList.add("tui-page-btn","tui-is-selected"),t.textContent=e,t}function it(e){const t=document.createElement("a");t.href="#",t.classList.add("icon","tui-page-btn",`tui-${e}`);const s=document.createElement("span");return s.classList.add(`tui-ico-${e}`),s.textContent=e,t.appendChild(s),t}function lt(e){const t=document.createElement("span");t.classList.add("tui-page-btn","tui-is-disabled",`tui-${e}`);const s=document.createElement("span");return s.classList.add(`tui-ico-${e}`),s.textContent=e,t.appendChild(s),t}function dt(e){const t=document.createElement("span");t.classList.add("tui-ico-ellip"),t.textContent="...";const s=document.createElement("a");return s.href="#",s.classList.add("tui-page-btn",`tui-${e}-is-ellip`),s.appendChild(t),s}const ut=async e=>{const t=e.page;console.log(t);try{const s=w();s.page=t;const r=(await $(s)).results;if(b.innerHTML="",r.length===0){const c=B();b.insertAdjacentHTML("beforeend",c)}else f(r,"general",b);document.querySelectorAll(".product-card-general").forEach(c=>{c.addEventListener("click",y)}),document.querySelectorAll(".js-addToCart-btn").forEach(c=>{c.addEventListener("click",q)})}catch(s){console.log(s)}};C.on("afterMove",ut);const M=async e=>{try{const t=w(),s=await $(t);s.totalPages===1?L.classList.add("is-hidden"):(C.setTotalItems(s.totalPages),L.classList.remove("is-hidden")),C.reset()}catch(t){console.log(t)}};document.addEventListener("DOMContentLoaded",M);const pt=document.querySelector(".filters-form");pt.addEventListener("submit",M);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".products-list-general");function t(){window.scrollY/(document.body.scrollHeight-window.innerHeight)*100>=30&&e.classList.add("animation")}window.addEventListener("scroll",t)});
//# sourceMappingURL=commonHelpers2.js.map
