import{s as x,i as u,g as w,l as v}from"./assets/footer-bf064eb8.js";import{a as g,P as H}from"./assets/vendor-d873ffc3.js";function _(e){const s=[...e,"Show all"].map(r=>`<li class="filters-categories-item" data-category="${r}">${r}</li>`);document.querySelector(".filters-categories-list").insertAdjacentHTML("beforeend",s.join("").replaceAll("_"," ")),console.log("Rendered Category List:",s)}function k(e){const t=this.closest(".filters-wrap"),s=t.querySelector(".filters-down-svg");t.querySelector("ul").classList.toggle("list-active"),s.classList.toggle("rotate")}function F(e){this.classList.toggle("rotate");const t=this.previousElementSibling;t.classList.contains("list-active")?t.classList.remove("list-active"):t.classList.add("list-active")}function E(){const e=document.querySelector(".filters-search-btn");e&&e.click()}function O(e){const t=document.querySelector(".filters-categories"),s=document.querySelector(".filters-categories-list"),a=e.target.textContent;t.textContent=a,s.classList.remove("list-active"),s.nextElementSibling.classList.remove("rotate"),E(),B(queryParameters)}function R(e){const t=document.querySelector(".filters-allTypes"),s=document.querySelector(".filters-allTypes-list"),a=e.target.textContent;t.textContent=a,s.classList.remove("list-active"),s.nextElementSibling.classList.remove("rotate"),E(),B(queryParameters)}function T(){const e=document.querySelector(".filters-allTypes").textContent.split(" ").join(""),s=document.querySelector(".filters-categories").textContent.trim(),a=s.toLowerCase()==="all"?"":s.split(" ").join("_").replace("/","&"),r=document.querySelector(".filters-input").value,n={category:a,keyword:r,filterSearch:`by${e}`},o={category:a,keyword:r,filterSearch:`by${e}`,page:1,limit:9};return x("queryParams",o),n}function A(e){let t;switch(e){case"byAtoZ":t="byABC=true";break;case"byZtoA":t="byABC=false";break;case"byCheaperfirst":t="byPrice=true";break;case"byExpensivefirst":t="byPrice=false";break;case"byPopular":t="byPopularity=false";break;case"byNotpopular":t="byPopularity=true";break;case"Show all":t="";break;default:t="byABC=true";break}return t}async function B(e){try{const t=await g.get(`${P}?${new URLSearchParams(e)}`);console.log("Server response:",t.data)}catch(t){console.error("Error making server request:",t)}}const P="https://food-boutique.b.goit.study/api/products";async function W(){return(await g.get("https://food-boutique.b.goit.study/api/products/categories")).data}async function N(e){let{keyword:t,category:s,page:a,limit:r,filterSearch:n}=e;const o=window.innerWidth;o<768?r=6:o>=768&&o<1440?r=8:r=9;const c=new URLSearchParams({page:a,limit:r});return t!==""&&c.append("keyword",t),s!==""&&s!=="Show_all"&&s!=="Categories"&&c.append("category",s),(await g.get(`${P}?${c}&${A(n)}`)).data}async function U(){return(await g.get("https://food-boutique.b.goit.study/api/products/discount")).data}async function V(){return(await g.get("https://food-boutique.b.goit.study/api/products/popular")).data}async function M(e){let t,{keyword:s,category:a,page:r=1,limit:n,filterSearch:o}=e;const c=window.innerWidth;c<768?n=6:c>=768&&c<1440?n=8:n=9;const i=new URLSearchParams({limit:n,page:r});return s!==""&&i.append("keyword",s),a!==""&&a!=="Show_all"&&a!=="Categories"&&i.append("category",a),t=await g.get(`${P}?${i}&${A(o)}`),t.data}async function C(e){return(await g.get(`https://food-boutique.b.goit.study/api/products/${e}`)).data}function J(e){let{img:t,name:s,category:a,size:r,popularity:n,price:o,_id:c,is10PercentOff:i}=e;const l=d.some(p=>p.id===c);return`
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
              </div>
      </li>
      `}function Q(e){const{img:t,name:s,category:a,size:r,popularity:n,_id:o}=e,c=d.some(i=>i.id===o);return`
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
        `}function G(e){const{img:t,name:s,price:a,_id:r}=e,n=d.some(o=>o.id===r);return`
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
  </li>`}function y(e,t,s){let a;t==="general"?a=e.map(r=>J(r)):t==="popular"?a=e.map(r=>Q(r)):a=e.map(r=>G(r)),s.innerHTML=a.join("")}function $(){const e=document.querySelector(".modal-product-backdrop");e.remove(),e.classList.add("is-hidden"),document.body.classList.remove("is-overflow-hidden")}function Z(e){const t=document.querySelector(".modal-product-backdrop");e.key==="Escape"&&($(),t.classList.add("is-hidden"))}function Y(e){const t=document.querySelector(".modal-product-backdrop");e.target===t&&($(),t.classList.remove("is-hidden"))}function K(e){let{name:t,category:s,desc:a,img:r,price:n,size:o,popularity:c,_id:i}=e;const l=d.some(p=>p.id===i);return`
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
      `}async function f(e){if(e.target.closest(".js-addToCart-btn"))return;const a=e.target.closest("li").querySelector(".js-addToCart-btn").getAttribute("data-id"),r=await C(a);document.querySelector("body").insertAdjacentHTML("beforeend",K(r)),document.body.classList.add("is-overflow-hidden"),document.querySelector(".modal-btn-close").addEventListener("click",$),document.addEventListener("keydown",Z),document.addEventListener("click",Y),document.querySelector(".modal-product-btn-price").addEventListener("click",de)}async function q(e){const t=e.currentTarget.getAttribute("data-id");e.currentTarget.querySelector("use").setAttribute("href",`${u}#icon-checkmark`),e.currentTarget.setAttribute("disabled","true");const a={};try{const n=await C(t);console.log(n);const{category:o,size:c,_id:i,name:l,price:p,img:m}=n;a.category=o,a.size=c,a.id=i,a.name=l,a.price=p,a.img=m}catch(n){console.log(n)}const r=window.localStorage;d.push(a),r.setItem("product",JSON.stringify(d)),w()}function j(){return`
        <div class="sorry-wrapper">
            <span class="emoji-sorry">&#128561;</span>
            <h3 class="sorry-message-text"> Sorry, there are no items matching your filter request!</h3>
        </div> 
    `}const X=document.querySelector(".filters-form"),ee=document.querySelector(".filters-categories"),te=document.querySelector(".filters-allTypes"),se=document.querySelectorAll(".filters-down-svg"),ae=document.querySelectorAll(".filters-allTypes-item"),h=document.querySelector(".products-list-general"),re=document.querySelector(".products-list-discount"),oe=document.querySelector(".products-list-popular");let d=[];const ce=()=>{const e=v.load("product");if(e===void 0){document.querySelector("#header-length").innerHTML="0";return}document.querySelector("#header-length").innerHTML=e.length,d=e};ce();function ne(){v.load("queryParams")||v.save("queryParams",{keyword:"",category:"",page:1,limit:9})}ne();document.addEventListener("DOMContentLoaded",async()=>{try{const e=await W();_(e),document.querySelectorAll(".filters-categories-item").forEach(l=>{l.addEventListener("click",O)});const t=v.load("queryParams"),a=(await N(t)).results;y(a,"general",h),document.querySelectorAll(".product-card-general").forEach(l=>{l.addEventListener("click",f)});const n=await U();y(n,"discount",re),document.querySelectorAll(".discount-product-card").forEach(l=>{l.addEventListener("click",f)});const c=await V();y(c,"popular",oe),document.querySelectorAll(".popular-product-card").forEach(l=>{l.addEventListener("click",f),document.querySelectorAll(".js-addToCart-btn").forEach(m=>{m.addEventListener("click",q)})})}catch(e){console.log(e)}});ee.addEventListener("click",k);te.addEventListener("click",k);se.forEach(e=>{e.addEventListener("click",F)});ae.forEach(e=>{e.addEventListener("click",R)});X.addEventListener("submit",async e=>{e.preventDefault();try{const t=T(),a=(await M(t)).results;if(h.innerHTML="",a.length===0){const o=j();h.insertAdjacentHTML("beforeend",o)}else y(a,"general",h),ie()&&await le(t);document.querySelectorAll(".product-card-general").forEach(o=>{o.addEventListener("click",f)}),document.querySelectorAll(".js-addToCart-btn").forEach(o=>{o.addEventListener("click",q)})}catch(t){console.log(t)}});function ie(){return!0}async function le(e){try{console.log("Sending data to server:",e)}catch(t){console.error("Error sending data to server:",t)}}async function de(e){const t={},s=e.currentTarget.getAttribute("data-id"),a=d.some(r=>r.id===s);if(!a){e.currentTarget.innerHTML=`Remove from <svg class="modal-btn-svg" width="18" height="18">
                <use class="modal-icon-svg" href="${u}#icon-shopping-cart"></use>
                </svg>`,document.querySelectorAll(".js-addToCart-btn").forEach(o=>{let c=o.getAttribute("data-id");const i=o.querySelector("use");c===s&&(i.setAttribute("href",`${u}#icon-checkmark`),o.disabled=!0)});try{const o=await C(s),{category:c,size:i,_id:l,name:p,price:m,img:z}=o;t.category=c,t.size=i,t.id=l,t.name=p,t.price=m,t.img=z}catch(o){console.log(o)}const n=window.localStorage;d.push(t),n.setItem("product",JSON.stringify(d)),w()}if(a){e.currentTarget.innerHTML=`Add to <svg class="modal-btn-svg" width="18" height="18">
        <use class="modal-icon-svg" href="${u}#icon-shopping-cart"></use>
        </svg>`;const r=e.currentTarget.getAttribute("data-id");d=d.filter(o=>o.id!==r),document.querySelectorAll(".js-addToCart-btn").forEach(o=>{let c=o.getAttribute("data-id");const i=o.querySelector("use");c===s&&(i.setAttribute("href",`${u}#icon-shopping-cart`),o.disabled=!1)}),localStorage.setItem("product",JSON.stringify(d)),w()}}const S=document.querySelector(".products-list-general"),L=document.querySelector("#tui-pagination-container"),ue=()=>window.innerWidth<=767?2:4,D=()=>{const e={itemsPerPage:1,visiblePages:ue(),page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="icon tui-page-btn tui-{{type}}">
        <span class="tui-ico-{{type}}">{{type}}
        </span>
        </a>`,disabledMoveButton:`<span class="tui-page-btn tui-is-disabled tui-{{type}}">
        <span class="tui-ico-{{type}}">{{type}}
        </span>
        </span>`,moreButton:'<a href="#"  class="tui-page-btn-el tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};return new H(L,e)};let b=D();window.addEventListener("resize",()=>{b=D()});const pe=async e=>{const t=e.page;console.log(t);try{const s=T();s.page=t;const r=(await M(s)).results;if(S.innerHTML="",r.length===0){const c=j();S.insertAdjacentHTML("beforeend",c)}else y(r,"general",S);document.querySelectorAll(".product-card-general").forEach(c=>{c.addEventListener("click",f)}),document.querySelectorAll(".js-addToCart-btn").forEach(c=>{c.addEventListener("click",q)})}catch(s){console.log(s)}};b.on("afterMove",pe);const I=async e=>{try{response.totalPages===1?L.classList.add("is-hidden"):(b.setTotalItems(response.totalPages),L.classList.remove("is-hidden")),b.reset()}catch(t){console.log(t)}};document.addEventListener("DOMContentLoaded",I);const ge=document.querySelector(".filters-form");ge.addEventListener("submit",I);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".products-list-general");function t(){window.scrollY/(document.body.scrollHeight-window.innerHeight)*100>=30&&e.classList.add("animation")}window.addEventListener("scroll",t)});
//# sourceMappingURL=commonHelpers2.js.map
