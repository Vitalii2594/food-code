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
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: createPageLink,
    currentPage: createCurrentPage,
    moveButton: createMoveButton,
    disabledMoveButton: createDisabledMoveButton,
    moreButton: createMoreButton,
  },
};

const pagination = new Pagination(container, options);

function createPageLink(page) {
  const link = document.createElement('a');
  link.href = '#';
  link.classList.add('tui-page-btn');
  link.textContent = page;
  return link;
}

function createCurrentPage(page) {
  const strong = document.createElement('strong');
  strong.classList.add('tui-page-btn', 'tui-is-selected');
  strong.textContent = page;
  return strong;
}

function createMoveButton(type) {
  const link = document.createElement('a');
  link.href = '#';
  link.classList.add('icon', 'tui-page-btn', `tui-${type}`);

  const span = document.createElement('span');
  span.classList.add(`tui-ico-${type}`);
  span.textContent = type;

  link.appendChild(span);
  return link;
}

function createDisabledMoveButton(type) {
  const span = document.createElement('span');
  span.classList.add('tui-page-btn', 'tui-is-disabled', `tui-${type}`);

  const innerSpan = document.createElement('span');
  innerSpan.classList.add(`tui-ico-${type}`);
  innerSpan.textContent = type;

  span.appendChild(innerSpan);
  return span;
}

function createMoreButton(type) {
  const span = document.createElement('span');
  span.classList.add('tui-ico-ellip');
  span.textContent = '...';

  const link = document.createElement('a');
  link.href = '#';
  link.classList.add('tui-page-btn', `tui-${type}-is-ellip`);
  link.appendChild(span);

  return link;
}

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
