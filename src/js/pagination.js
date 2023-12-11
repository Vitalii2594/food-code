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
    firstButton: '<a href="#" class="tui-page-btn tui-first-child">[<]</a>',
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton: `<a href="#" class="icon tui-page-btn tui-{{type}}">
      <span class="tui-ico-{{type}}">{{type}}</span>
      </a>`,
    disabledMoveButton: `<span class="tui-page-btn tui-is-disabled tui-{{type}}">
      <span class="tui-ico-{{type}}">{{type}}</span>
      </span>`,
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
    lastButton: '<a href="#" class="tui-page-btn tui-last-child">[>]</a>',
  },
};

const pagination = new Pagination(container, options);

// Callback to switch between pages
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

// Callback to update pagination with new values
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

// елементи пагінації
const paginationElements = document.createElement('div');
paginationElements.classList.add('pagination-elements');

const prevPage = document.createElement('a');
prevPage.href = '#';
prevPage.classList.add('pagination-link');
prevPage.textContent = '<';
paginationElements.appendChild(prevPage);

const page1 = document.createElement('a');
page1.href = '#';
page1.classList.add('pagination-link');
page1.textContent = '1';
paginationElements.appendChild(page1);

const ellipsis1 = document.createElement('span');
ellipsis1.classList.add('pagination-ellipsis');
ellipsis1.textContent = '...';
paginationElements.appendChild(ellipsis1);

const page2 = document.createElement('a');
page2.href = '#';
page2.classList.add('pagination-link');
page2.textContent = '2';
paginationElements.appendChild(page2);

const ellipsis2 = document.createElement('span');
ellipsis2.classList.add('pagination-ellipsis');
ellipsis2.textContent = '...';
paginationElements.appendChild(ellipsis2);

const page3 = document.createElement('a');
page3.href = '#';
page3.classList.add('pagination-link');
page3.textContent = '3';
paginationElements.appendChild(page3);

const page4 = document.createElement('a');
page4.href = '#';
page4.classList.add('pagination-link');
page4.textContent = '4';
paginationElements.appendChild(page4);

const nextPage = document.createElement('a');
nextPage.href = '#';
nextPage.classList.add('pagination-link');
nextPage.textContent = '>';
paginationElements.appendChild(nextPage);

container.appendChild(paginationElements);
