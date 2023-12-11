import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { order } from './api.js';
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
  const orderForm = document.querySelector('.cart-form');

  orderForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    const mail = document.getElementById('mail').value;

    const orderData = {
      mail,
    };

    console.log(orderData);
    localStorageAPI.save('lastOrder', 'mail');

    try {
      // Виклик функції order для відправки замовлення на сервер
      const response = await order(orderData);
      console.log('Order sent successfully:', response);
    } catch (error) {
      console.error('Error sending order:', error);
    }
  });
});
