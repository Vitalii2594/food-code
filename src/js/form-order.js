import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import localStorageAPI from './localStorage.js';

const input = document.querySelector('.datetime');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
};

flatpickr(input, options);

document.addEventListener('DOMContentLoaded', function () {
  const orderButton = document.querySelector('.cart-order-info-btn');

  orderButton.addEventListener('submit', function (event) {
    event.preventDefault();
    const mail = document.getElementById('mail').value;

    const order = {
      mail,
    };

    console.log(order);
    localStorageAPI.save('lastOrder', order);
  });
});

// const orderButton = document.querySelector('.cart-order-info-btn');
// const modale = document.querySelector('.order-backdrop');
// const isHidden = document.querySelector('.is-hidden');
// isHidden.style.display = 'none';

// orderButton.addEventListener('click', () => {
//     modale.classList.toggle('is-hidden');
// });
