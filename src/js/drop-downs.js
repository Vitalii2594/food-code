import localStorageAPI from './localStorage.js';

// Відмалювання списку категорій
export function renderCategoryList(list) {
  // Додаємо категорію "AllProducts" до списку
  const updatedList = [...list, 'All'];

  const listOfCategory = updatedList.map(item => {
    return `<li class="filters-categories-item" data-category="${item}">${item}</li>`;
  });

  document
    .querySelector('.filters-categories-list')
    .insertAdjacentHTML(
      'beforeend',
      listOfCategory.join('').replaceAll('_', ' ')
    );
}

// Управління дропдаунами
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

export function changeCategoriesValue(event) {
  const input = document.querySelector('.filters-categories');
  const list = document.querySelector('.filters-categories-list');
  const newValue = event.target.textContent;

  input.textContent = newValue;
  list.classList.remove('list-active');
  list.nextElementSibling.classList.remove('rotate');
}

export function changeTypesValue(event) {
  const input = document.querySelector('.filters-allTypes');
  const list = document.querySelector('.filters-allTypes-list');
  const newValue = event.target.textContent;

  input.textContent = newValue;
  list.classList.remove('list-active');
  list.nextElementSibling.classList.remove('rotate');
}

// Збір параметрів запиту
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

// Визначення фільтра
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
    default:
      filter = 'byABC=true';
      break;
  }

  return filter;
}
