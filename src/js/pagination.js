// import 'tui-pagination/dist/tui-pagination.css';
import Pagination from 'tui-pagination';
import { fetchAndRender } from '/js/products.js';
import { filterProductsByCategory } from './';

export { funcPagination, loadMoreTrendMoves, pages };

const FILTER = 'filter';

const refs = {
  paginationDop: document.querySelector('.your-custom-paginationDop-class'),
  pagination: document.querySelector('.your-custom-tui-pagination-class'),
  list: document.querySelector('.your-custom-product-list-class'),
  // select: document.querySelector('.your-custom-select-class'),
  search: document.querySelector('#your-custom-search-id'),
};

const container = document.getElementById(
  'your-custom-pagination-container-id'
);

let totalPage;
let itemsPerPage;
let visiblePage = 3;
let pageOrigin;

// витягуємо з localStorage номер сторінки - якщо сторінка була перезавантажена, то потрібно витягнути номер, який був до перезавантаження і
// активувати пагінацію на цій же сторінці
function storeData() {
  const storedData = localStorage.getItem(FILTER);
  if (storedData) {
    try {
      const parsedData = JSON.parse(storedData);
      pageOrigin = parsedData.page;
      itemsPerPage = parsedData.limit;
    } catch (error) {
      console.error('Error updating localStorage:', error);
    }
  }

  // funcPagination(totalPage);

  // if (totalPage > itemsPerPage) {
  //   funcPagination(totalPage, pageOrigin);
  // }
}

// створення пагінації
function funcPagination(totalPage) {
  // console.log(totalPage);
  let options = {
    totalItems: totalPage,
    itemsPerPage: itemsPerPage,
    visiblePages: visiblePage,
    page: pageOrigin,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const pagination = new Pagination(container, options);
  pagination.on('beforeMove', loadMoreTrendMoves);
}

// в localStorage змінюємо номер сторінки на обраний номер в пагінації. Очищує картки і знову відтворює нові (нова партія)
function loadMoreTrendMoves(event) {
  const storedData = localStorage.getItem(FILTER);
  if (storedData) {
    try {
      const parsedData = JSON.parse(storedData);
      parsedData.page = Number(`${event.page}`);
      localStorage.setItem('filter', JSON.stringify(parsedData));
    } catch (error) {
      console.error('Error updating localStorage:', error);
    }
  }
  refs.list.innerHTML = '';
  fetchAndRender();
}

// визначаємо, скільки всього буде товарів і викликаємо пагінацію передаючи цей параметр
async function pages(totalPage) {
  // let response = await fetchFoodCategory();
  // totalPage = response.data.totalPages * response.data.perPage;
  if (totalPage <= Number(itemsPerPage)) {
    refs.pagination.classList.replace('tui-pagination', 'paginationDop');
  } else {
    storeData();
    refs.pagination.classList.replace('paginationDop', 'tui-pagination');
  }
}
