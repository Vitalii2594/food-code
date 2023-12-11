import { getProducttById } from './api.js';
import { onRenderModalProduct, onClickCloseModal, onClickOutModalProduct, onEscapeCloseModal, closeModal, addToCartTheProduct } from './templates/modal-product.js';
import { addToCartFromModal } from './homePage.js';

export async function openProductModal(event) {

  if (event.target.closest('.js-addToCart-btn')) {
      return;
  }
  // отримали інформацію по продукту
  const ParentElement = event.target.closest('li');
  const cardButton = ParentElement.querySelector('.js-addToCart-btn');
  const productId = cardButton.getAttribute('data-id');
  const productInfo = await getProducttById(productId);

  // відмалювали модальне вікно, повісили слухачі подій
  document.querySelector('body').insertAdjacentHTML('beforeend', onRenderModalProduct(productInfo));
  document.body.classList.add('is-overflow-hidden');
  const closeModalButton = document.querySelector('.modal-btn-close');
  closeModalButton.addEventListener('click', onClickCloseModal);
  document.addEventListener('keydown', onEscapeCloseModal);
  document.addEventListener('click', onClickOutModalProduct);
  document.querySelector('.modal-product-btn-price').addEventListener('click', addToCartFromModal);
}
