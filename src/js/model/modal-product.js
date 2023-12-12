// import { getProducttById } from '../api.js';
// import { save, load, remove } from '../localStorage.js';
// import {firstLoad, saveToLocalStorage} from '../add-to-the-cart.js';
import { arrProducts } from '../homePage.js';

import pathToSvg from '../../images/icons.svg';

export function onClickCloseModal() {
  const modalProductBackdrop = document.querySelector(
    '.modal-product-backdrop'
  );
  modalProductBackdrop.remove();
  modalProductBackdrop.classList.add('is-hidden');
  document.body.classList.remove('is-overflow-hidden');
}

export function onEscapeCloseModal(event) {
  const modalProductBackdrop = document.querySelector(
    '.modal-product-backdrop'
  );
  if (event.key === 'Escape') {
    onClickCloseModal();
    modalProductBackdrop.classList.add('is-hidden');
  }
}

export function onClickOutModalProduct(event) {
  const modalProductBackdrop = document.querySelector(
    '.modal-product-backdrop'
  );
  if (event.target === modalProductBackdrop) {
    onClickCloseModal();
    modalProductBackdrop.classList.remove('is-hidden');
  }
}

export function onRenderModalProduct(product) {
  let { name, category, desc, img, price, size, popularity, _id } = product;
  const isInCart = arrProducts.some(product => product.id === _id);

  return `
          <div class="modal-product-backdrop" data-modal>
          <div class="modal-product">
              <button type="button" class="modal-btn-close" data-modal-close>
                  <svg class="modal-svg-close" width="28" height="28">
                      <use href="${pathToSvg}#icon-close"></use>
                  </svg>
              </button>
      
              <div class="modal-product-info">
                  <div class="modal-product-img-wrapper">
                    
                      <img class="modal-product-img" src="${img}" alt="${name}" width="1660">
        
                  </div>
      
                  <div class="modal-product-description">
                      <h2 class="modal-title">${name}</h2>
      
                      <ul class="modal-product-list">
                          <li class="modal-product-item">
                              <h3 class="modal-product-caption">Category:</h3>
                              <p class="modal-product-content">${category}</p>
                          </li>
                          <li class="modal-product-item">
                              <h3 class="modal-product-caption">Size:</h3>
                              <p class="modal-product-content">${size}</p>
                          </li>
                          <li class="modal-product-item">
                              <h3 class="modal-product-caption">Popularity:</h3>
                              <p class="modal-product-content">${popularity}</p>
                          </li>
                      </ul>
      
                      <p class="modal-product-text">${desc}</p>
                  </div>
              </div>
      
              <div class="modal-product-wrapper-price">
                  <p class="modal-product-price"><span>&#36;</span>${price}</p>
                  <button data-id=${_id} type="submit" class="modal-product-btn-price">
                  ${isInCart ? 'Remove from' : 'Add to'} 
                      <svg class="modal-btn-svg" width="18" height="18">
                          <use class="modal-icon-svg" href="${pathToSvg}#icon-shopping-cart"></use>
                      </svg>
                  </button>
              </div>
          </div>
      </div>
      `;
}
