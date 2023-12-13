import axios from 'axios';
import * as localStorageAPI from './localStorage.js';
import { BASE_URL } from './api.js';

export function renderCategoryList(list) {
  const updatedList = [...list, 'Show all'];

  const listOfCategory = updatedList.map(item => {
    return `<li class="filters-categories-item" data-category="${item}">${item}</li>`;
  });

  const listElement = document.querySelector('.filters-categories-list');
  listElement.insertAdjacentHTML(
    'beforeend',
    listOfCategory.join('').replaceAll('_', ' ')
  );

  console.log('Rendered Category List:', listOfCategory);
}

export function openDropDown(event) {
  const parentElement = this.closest('.filters-wrap');
  const svgElement = parentElement.querySelector('.filters-down-svg');
  const list = parentElement.querySelector('ul');

  list.classList.toggle('list-active');
  svgElement.classList.toggle('rotate');
}

export function rotateButton(event) {
  this.classList.toggle('rotate');
  const list = this.previousElementSibling;

  if (list.classList.contains('list-active')) {
    list.classList.remove('list-active');
  } else {
    list.classList.add('list-active');
  }
}

function triggerSearchButton() {
  const searchButton = document.querySelector('.filters-search-btn');
  if (searchButton) {
    searchButton.click();
  }
}

export function changeCategoriesValue(event) {
  const input = document.querySelector('.filters-categories');
  const list = document.querySelector('.filters-categories-list');
  const newValue = event.target.textContent;

  input.textContent = newValue;
  list.classList.remove('list-active');
  list.nextElementSibling.classList.remove('rotate');
  triggerSearchButton();
  makeServerRequestAndUpdatePage(queryParameters);
}

export function changeTypesValue(event) {
  const input = document.querySelector('.filters-allTypes');
  const list = document.querySelector('.filters-allTypes-list');
  const newValue = event.target.textContent;

  input.textContent = newValue;
  list.classList.remove('list-active');
  list.nextElementSibling.classList.remove('rotate');
  triggerSearchButton();
  makeServerRequestAndUpdatePage(queryParameters);
}

export function collectQueryParameters() {
  const filterSearch = document
    .querySelector('.filters-allTypes')
    .textContent.split(' ')
    .join('');

  const categoryElement = document.querySelector('.filters-categories');
  const categoryText = categoryElement.textContent.trim();
  const category =
    categoryText.toLowerCase() === 'all'
      ? ''
      : categoryText.split(' ').join('_').replace('/', '&');

  const searchWord = document.querySelector('.filters-input').value;

  const queryParameters = {
    category,
    keyword: searchWord,
    filterSearch: `by${filterSearch}`,
  };

  const paramsForBack = {
    category,
    keyword: searchWord,
    filterSearch: `by${filterSearch}`,
    page: 1,
    limit: 9,
  };

  localStorageAPI.save('queryParams', paramsForBack);

  return queryParameters;
}

export function getFilter(arg) {
  let filter;
  switch (arg) {
    case 'byAtoZ':
      filter = 'byABC=true';
      break;
    case 'byZtoA':
      filter = 'byABC=false';
      break;
    case 'byCheaperfirst':
      filter = 'byPrice=true';
      break;
    case 'byExpensivefirst':
      filter = 'byPrice=false';
      break;
    case 'byPopular':
      filter = 'byPopularity=false';
      break;
    case 'byNotpopular':
      filter = 'byPopularity=true';
      break;
    case 'Show all':
      filter = '';
      break;
    default:
      filter = 'byABC=true';
      break;
  }

  return filter;
}

async function makeServerRequestAndUpdatePage(queryParameters) {
  try {
    const response = await axios.get(
      `${BASE_URL}?${new URLSearchParams(queryParameters)}`
    );

    console.log('Server response:', response.data);
    // Додайте код для оновлення вашої сторінки або відображення даних
  } catch (error) {
    console.error('Error making server request:', error);
  }
}

// Інші функції залишаються такими ж, які були у вашому оригінальному коді
