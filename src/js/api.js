

//запит на бекенд про категорії товарів
import axios from 'axios';
import { getFilter } from './filters.js';
import storage from './local storage.js';

export const BASE_URL = 'https://food-boutique.b.goit.study/api/products';
const CACHE_KEY = 'cachedProductsResponse';

export async function getCategories() {
  const response = await axios.get(
    `https://food-boutique.b.goit.study/api/products/categories`
  );
  return response.data;
}

// отримання усіх продуктів при першому завантаженні
export async function getAllProducts(queryParams) {
  let { keyword, category, page, limit, filterSearch } = queryParams;

  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    limit = 6;
  } else if (screenWidth >= 768 && screenWidth < 1440) {
    limit = 8;
  } else {
    limit = 9;
  }

  const params = new URLSearchParams({
    page,
    limit,
  });
  if (keyword !== '') {
    params.append('keyword', keyword);
  }

  if (category !== '' && category !== 'Show_all' && category !== 'Categories') {
    params.append('category', category);
  }

  const response = await axios.get(
    `${BASE_URL}?${params}&${getFilter(filterSearch)}`
  );
  return response.data;
}

export async function getDiscountProducts() {
  const response = await axios.get(
    `https://food-boutique.b.goit.study/api/products/discount`
  );
  return response.data;
}

export async function getPopularProducts() {
  const response = await axios.get(
    `https://food-boutique.b.goit.study/api/products/popular`
  );
  return response.data;
}

import axios from 'axios';
import { getFilter } from './filters.js';
import storage from './local storage.js';

export const BASE_URL = 'https://food-boutique.b.goit.study/api/products';
const CACHE_KEY = 'cachedProductsResponse';

export async function getProductsByQuery(queryParams) {
  try {
    // Attempt to load from local storage
    const cachedProductsResponse = storage.loadFromLocalStorage(CACHE_KEY);

    if (cachedProductsResponse) {
      return cachedProductsResponse;
    }

    const { keyword, category, page = 1, filterSearch } = queryParams;
    const limit = determineLimit();

    const params = new URLSearchParams({ limit, page });

    if (keyword) {
      params.append('keyword', keyword);
    }

    if (category && category !== 'Show_all' && category !== 'Categories') {
      params.append('category', category);
    }

    const response = await axios.get(`${BASE_URL}?${params}&${getFilter(filterSearch)}`);

    // Save to local storage
    storage.saveToLocalStorage(CACHE_KEY, response.data);

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Rest of the code...


export async function getProducttById(id) {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
}

function determineLimit() {
  const screenWidth = window.innerWidth;
  return screenWidth < 768 ? 6 : screenWidth < 1440 ? 8 : 9;
}


// POST
export async function registrSubscription(client) {
  const response = await axios.post(
    `https://food-boutique.b.goit.study/api/subscription`,
    client,
    {
      headers: {
        'content-type': 'application/json',
      },
    }
  );
  return response.data;
}

export async function order(order) {
  const response = await axios.post(
    `https://food-boutique.b.goit.study/api/orders`,
    order,
    {
      headers: {
        'content-type': 'application/json',
      },
    }
  );
  return response.data;
}
