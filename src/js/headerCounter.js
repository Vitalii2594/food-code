import localStorageAPI from './localStorage.js';

export let arrProducts = [];

export const fillarrProducts = () => {
  const dataFromLS = localStorageAPI.load('product');

  if (dataFromLS === undefined) {
    document.querySelector('#header-length').innerHTML = '0';
    return;
  }
  document.querySelector('#header-length').innerHTML = dataFromLS.length;
  arrProducts = dataFromLS;
};