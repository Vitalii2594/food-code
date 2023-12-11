import localStorageAPI from './localStorage.js';

export function getLength() {
    const arrFromLS = localStorageAPI.load('product');
    document.querySelector('#header-length').innerHTML = `${arrFromLS ? arrFromLS.length : '0'}`;
}
getLength();


