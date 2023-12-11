import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { order } from './api.js'; // Імпорт функції order для відправки замовлення на сервер
import localStorageAPI from './localStorage.js';

document.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('.datetime'); // Вибір елементу для ініціалізації flatpickr
  const orderForm = document.querySelector('.cart-form'); // Вибір форми замовлення

  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
  };

  flatpickr(input, options); // Ініціалізація flatpickr для вибору дати та часу

  orderForm.addEventListener('submit', async function (event) {
    event.preventDefault(); // Заборона стандартної поведінки форми

    const mail = document.getElementById('mail').value; // Отримання значення електронної пошти з поля вводу

    const orderData = {
      mail,
    };

    console.log(orderData); // Виведення даних замовлення в консоль для перевірки

    try {
      // Виклик функції order для відправки замовлення на сервер
      const response = await order(orderData);
      console.log('Order sent successfully:', response);

      // Збереження email в localStorage після відправки замовлення
      localStorageAPI.save('lastOrder', orderData);
    } catch (error) {
      console.error('Error sending order:', error);
    }
  });
});
