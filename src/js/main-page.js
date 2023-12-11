import iconsPath from '../images/icons.svg';
import pathToSvg from '../images/icons.svg';
import { getLength } from './header.js';
import {
  openDropDown,
  rotateButton,
  changeCategoriesValue,
  changeTypesValue,
  collectQueryParameters,
  renderCategoryList,
} from './filters.js';
import {
  getProductsByQuery,
  getAllProducts,
  getDiscountProducts,
  getPopularProducts,
  getProducttById,
  getCategories,
} from './api.js';
import { renderMarkup } from './model/cards.js';
import { openProductModal } from './button-cart.js';
import { saveToLocalStorage } from './add-to-the-cart.js';
import localStorageAPI from './localStorage.js';
import { renderSorryMessage } from './model/sorry.js';

const searchForm = document.querySelector('.filters-form');
const categoriesInput = document.querySelector('.filters-categories');
const allSearchInput = document.querySelector('.filters-allTypes');
const downBtn = document.querySelectorAll('.filters-down-svg');
const allTypesItem = document.querySelectorAll('.filters-allTypes-item');
const productsListGeneral = document.querySelector('.products-list-general');
const productListDiscount = document.querySelector('.products-list-discount');
const productListPopular = document.querySelector('.products-list-popular');

export let arrProducts = [];

const fillarrProducts = () => {
  const dataFromLS = localStorageAPI.load('product');

  if (dataFromLS === undefined) {
    document.querySelector('#header-length').innerHTML = '0';
    return;
  }
  document.querySelector('#header-length').innerHTML = dataFromLS.length;
  arrProducts = dataFromLS;
};
fillarrProducts();

function loadQueryParamsFromLS() {
  const paramsFromLS = localStorageAPI.load('queryParams');
  if (!paramsFromLS) {
    localStorageAPI.save('queryParams', {
      keyword: '',
      category: '',
      page: 1,
      limit: 9,
    });
  }
}
loadQueryParamsFromLS();

//ДЕФОЛТНИЙ РЕНДЕР ТОВАРІВ ПРИ ПЕРШОМУ ЗАВАНТАЖЕННІ САЙТУ

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const listOfCategories = await getCategories();
    renderCategoryList(listOfCategories);
    document.querySelectorAll('.filters-categories-item').forEach(item => {
      item.addEventListener('click', changeCategoriesValue);
    });

    const paramsFromLS = localStorageAPI.load('queryParams');
    const allProduct = await getAllProducts(paramsFromLS);
    const arrOfAllProducts = allProduct.results;
    renderMarkup(arrOfAllProducts, 'general', productsListGeneral);

    let cards = document.querySelectorAll('.product-card-general');
    cards.forEach(card => {
      card.addEventListener('click', openProductModal);
    });

    const arrOfDiscountProducts = await getDiscountProducts();
    renderMarkup(arrOfDiscountProducts, 'discount', productListDiscount);
    let cardsDisc = document.querySelectorAll('.discount-product-card');
    cardsDisc.forEach(card => {
      card.addEventListener('click', openProductModal);
    });

    const arrOfPopularProducts = await getPopularProducts();
    renderMarkup(arrOfPopularProducts, 'popular', productListPopular);
    let cardsPop = document.querySelectorAll('.popular-product-card');
    cardsPop.forEach(card => {
      card.addEventListener('click', openProductModal);

      const addToCartBtn = document.querySelectorAll('.js-addToCart-btn');
      addToCartBtn.forEach(btn => {
        btn.addEventListener('click', saveToLocalStorage);
      });
    });
  } catch (error) {
    console.log(error);
  }
});

// РОБОТА ДРОПДАУНІВ + ІНПУТ

categoriesInput.addEventListener('click', openDropDown);
allSearchInput.addEventListener('click', openDropDown);
downBtn.forEach(btn => {
  btn.addEventListener('click', rotateButton);
});

allTypesItem.forEach(item => {
  item.addEventListener('click', changeTypesValue);
});

// ФІЛЬТРАЦІЯ ТОВАРІВ

searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  try {
    const queryParameters = collectQueryParameters();
    const response = await getProductsByQuery(queryParameters);
    const productForRender = response.results;
    productsListGeneral.innerHTML = '';
    if (productForRender.length === 0) {
      const sorryMessage = renderSorryMessage();
      productsListGeneral.insertAdjacentHTML('beforeend', sorryMessage);
    } else {
      renderMarkup(productForRender, 'general', productsListGeneral);
    }
    let cardsDisc = document.querySelectorAll('.product-card-general');
    cardsDisc.forEach(card => {
      card.addEventListener('click', openProductModal);
    });

    const addToCartBtn = document.querySelectorAll('.js-addToCart-btn');
    addToCartBtn.forEach(btn => {
      btn.addEventListener('click', saveToLocalStorage);
    });
  } catch (error) {
    console.log(error);
  }
});

// ДОДАВАННЯ ТОВАРУ В КОРЗИНУ З МОДАЛЬНОГО ВІКНА

export async function addToCartFromModal(event) {
  const productData = {};
  const id = event.currentTarget.getAttribute('data-id');
  const isInCart = arrProducts.some(product => product.id === id);

  if (!isInCart) {
    event.currentTarget.innerHTML = `Remove from <svg class="modal-btn-svg" width="18" height="18">
                <use class="modal-icon-svg" href="${pathToSvg}#icon-shopping-cart"></use>
                </svg>`;

    const addToCartBtn = document.querySelectorAll('.js-addToCart-btn');
    addToCartBtn.forEach(btn => {
      let _id = btn.getAttribute('data-id');
      const passSvg = btn.querySelector('use');

      if (_id === id) {
        passSvg.setAttribute('href', `${iconsPath}#icon-checkmark`);
        btn.disabled = true;
      }
    });

    try {
      const product = await getProducttById(id);
      const { category, size, _id, name, price, img } = product;
      productData.category = category;
      productData.size = size;
      productData.id = _id;
      productData.name = name;
      productData.price = price;
      productData.img = img;
    } catch (error) {
      console.log(error);
    }

    const localStorage = window.localStorage;

    arrProducts.push(productData);

    localStorage.setItem('product', JSON.stringify(arrProducts));

    getLength();
  }

  if (isInCart) {
    event.currentTarget.innerHTML = `Add to <svg class="modal-btn-svg" width="18" height="18">
        <use class="modal-icon-svg" href="${pathToSvg}#icon-shopping-cart"></use>
        </svg>`;
    // Видаляємо продукт з arrProducts

    const idCard = event.currentTarget.getAttribute('data-id');
    arrProducts = arrProducts.filter(item => item.id !== idCard);

    const addToCartBtn = document.querySelectorAll('.js-addToCart-btn');
    addToCartBtn.forEach(btn => {
      let _id = btn.getAttribute('data-id');
      const passSvg = btn.querySelector('use');

      if (_id === id) {
        passSvg.setAttribute('href', `${iconsPath}#icon-shopping-cart`);
        btn.disabled = false;
      }
    });

    // Оновлюємо локалсторідж
    localStorage.setItem('product', JSON.stringify(arrProducts));

    getLength();
  }
}
