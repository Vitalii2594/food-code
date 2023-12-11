import axios from 'axios';
import {getFilter} from './drop-downs.js';
const BASE_URL = 'https://food-boutique.b.goit.study/api/products';

//запит на бекенд про категорії товарів


export async  function getCategories() {
  const response = await axios.get(`https://food-boutique.b.goit.study/api/products/categories`);
  return response.data;
}

// отримання усіх продуктів при першому завантаженні
export async function getAllProducts(queryParams) {
  let {keyword, category, page, limit, filterSearch} =  queryParams

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
  })
  if (keyword !== '') {
    params.append('keyword', keyword);
}

if ((category !== '') && (category !== 'Show_all') && (category !== 'Categories')) {
  params.append('category', category);
}

    const response = await axios.get(`${BASE_URL}?${params}&${getFilter(filterSearch)}`);
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

export async function getProductsByQuery(queryParams) {
  let response;
  let { keyword, category, page = 1, limit, filterSearch } = queryParams;
  
// визначення кількості карток в залежності від ширини екрану

  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    limit = 6; 
  } else if (screenWidth >= 768 && screenWidth < 1440) {
    limit = 8; 
  } else {
    limit = 9;
  }

  const params = new URLSearchParams({
    limit,
    page,
  });

  if (keyword !== '') {
    params.append('keyword', keyword);
}

if ((category !== '') && (category !== 'Show_all') && (category !== 'Categories')) {
    params.append('category', category);
}

 response = await axios.get(`${BASE_URL}?${params}&${getFilter(filterSearch)}`);
 
  return response.data;
}

// get
export async function getProducttById(id) {
  const response = await axios.get(
    `https://food-boutique.b.goit.study/api/products/${id}`
  );
  return response.data;
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

