import localStorageAPI from './localStorage.js';

// Відмалювання списку категорій
export function renderCategoryList(list) {
  // Додаємо категорію "Show all" до списку
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
// Функція для автоматичного натискання кнопки пошуку
/* Цю функцію можна перенести до іншого файлу і зробити експорт та імпорт */
function triggerSearchButton() {
  // Знаходження кнопки пошуку натискання на неї
  const searchButton = document.querySelector('.filters-search-btn');
  if (searchButton) {
    searchButton.click();
  }
}
/* Кінець функції */

export function changeCategoriesValue(event) {
  const input = document.querySelector('.filters-categories');
  const list = document.querySelector('.filters-categories-list');
  const newValue = event.target.textContent;

  // Зміна значення введення та деактивація списку та стрілки
  input.textContent = newValue;
  list.classList.remove('list-active');
  list.nextElementSibling.classList.remove('rotate');

  // Автоматично натискати кнопку пошуку
  triggerSearchButton();
}

export function changeTypesValue(event) {
  // Отримання елементів та нового значення типу
  const input = document.querySelector('.filters-allTypes');
  const list = document.querySelector('.filters-allTypes-list');
  const newValue = event.target.textContent;

  // Зміна значення введення та деактивація списку та стрілки
  input.textContent = newValue;
  list.classList.remove('list-active');
  list.nextElementSibling.classList.remove('rotate');

  // Автоматично натискати кнопку пошуку
  triggerSearchButton();
}

// Збір параметрів запиту
export function collectQueryParameters() {
  // Отримання значень фільтрів, категорій та ключового слова
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

  // Формування об'єкту з параметрами запиту
  const queryParameters = {
    category,
    keyword: searchWord,
    filterSearch: `by${filterSearch}`,
  };

  // Перевірка, чи поточні параметри відмінні від збережених
  const savedParams = localStorageAPI.load('queryParams');
  if (
    savedParams &&
    savedParams.category === queryParameters.category &&
    savedParams.keyword === queryParameters.keyword &&
    savedParams.filterSearch === queryParameters.filterSearch
  ) {
    // Повернення null, якщо параметри збігаються
    return null;
  }

  // Формування об'єкту для збереження у локальне сховище
  const paramsForBack = {
    category,
    keyword: searchWord,
    filterSearch: `by${filterSearch}`,
    page: 1,
    limit: 9,
  };

  // Збереження параметрів у локальне сховище
  localStorageAPI.save('queryParams', paramsForBack);

  // Повернення об'єкту параметрів
  return queryParameters;
}

// Визначення фільтра
export function getFilter(arg) {
  // Визначення фільтра залежно від отриманого аргументу
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

  // Повернення значення фільтра
  return filter;
}
