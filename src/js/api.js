import axios from 'axios';
import { getFilter } from './filters.js';
import storage from './local storage.js';

export const BASE_URL = 'https://food-boutique.b.goit.study/api/products';
export const CACHE_KEY = 'cachedProductsResponse';

export async function getCategories() {
  const response = await axios.get(`${BASE_URL}/categories`);
  return response.data;
}

export async function getAllProducts(queryParams) {
  let { keyword, category, page, limit, filterSearch } = queryParams;

  const params = new URLSearchParams({
    page,
    limit: determineLimit(),
  });

  if (keyword !== '') {
    params.append('keyword', keyword);
  }

  if (category !== '' && category !== 'Show_all' && category !== 'Categories') {
    params.append('category', category);
  }

  const response = await axios.get(`${BASE_URL}?${params}&${getFilter(filterSearch)}`);
  return response.data;
}

export async function getDiscountProducts() {
  const response = await axios.get(`${BASE_URL}/discount`);
  return response.data;
}

export async function getPopularProducts() {
  const response = await axios.get(`${BASE_URL}/popular`);
  return response.data;
}

export async function getProductsByQuery(queryParams) {
  try {
    // Spróbuj wczytać z local storage
    const cachedProductsResponse = storage.load(CACHE_KEY);

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

    // Zapisz do local storage
    storage.save(CACHE_KEY, response.data);

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getProductById(id) {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
}

export async function registerSubscription(client) {
  const response = await axios.post(`${BASE_URL}/subscription`, client, {
    headers: {
      'content-type': 'application/json',
    },
  });
  return response.data;
}

export async function createOrder(order) {
  const response = await axios.post(`${BASE_URL}/orders`, order, {
    headers: {
      'content-type': 'application/json',
    },
  });
  return response.data;
}

function determineLimit() {
  const screenWidth = window.innerWidth;
  return screenWidth < 768 ? 6 : screenWidth < 1440 ? 8 : 9;
}
