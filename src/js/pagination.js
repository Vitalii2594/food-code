import Pagination from 'tui-pagination';
import { getProductsByQuery } from './api.js';
import { renderMarkup } from './templates/cards.js';
import { collectQueryParameters } from './drop-downs.js';
import { renderSorryMessage } from './templates/renderSorryMessage.js';
import { openProductModal } from './card-button.js';
import { saveToLocalStorage } from './addToCart.js';

const productsListGeneral = document.querySelector('.products-list-general');
const container = document.querySelector('#tui-pagination-container');

const options = {
  itemsPerPage: 1,
  visiblePages: 4,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton: `<a href="#" class="icon tui-page-btn tui-{{type}}">
      <span class="tui-ico-{{type}}">{{type}}>
      </span>
      </a>`,
    disabledMoveButton: `<span class="tui-page-btn tui-is-disabled tui-{{type}}">
      <span class="tui-ico-{{type}}">{{type}}>
      </span>
      </span>`,
    moreButton:
      '<a href="#"  class="tui-page-btn-el tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination(container, options);

//Callback to switch between pages
const paginationClick = async event => {
  const currentPage = event.page;
  console.log(currentPage);

  try {
    const queryParameters = collectQueryParameters();
    queryParameters.page = currentPage;
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
  } catch (err) {
    console.log(err);
    // container.classList.add('is-hidden');
  }
};
pagination.on('afterMove', paginationClick);

//Callback to update pagination with new values
const paginationUpdate = async event => {
  try {
    const queryParameters = collectQueryParameters();
    const response = await getProductsByQuery(queryParameters);
    if (response.totalPages === 1) {
      container.classList.add('is-hidden');
    } else {
      pagination.setTotalItems(response.totalPages);
      container.classList.remove('is-hidden');
    }
    pagination.reset();
  } catch (err) {
    console.log(err);
  }
};
document.addEventListener('DOMContentLoaded', paginationUpdate);

const searchForm = document.querySelector('.filters-form');
searchForm.addEventListener('submit', paginationUpdate);
