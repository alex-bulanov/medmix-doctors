import popupOpen from '../popup/popup';

const inputs = document.querySelectorAll('.form__input');

inputs.forEach((input) => {
  input.addEventListener('change', () => {
    if (input.value.trim().length < 1) {
      input.value = null;
      input.classList.remove('form__input--filled');
    } else {
      input.classList.add('form__input--filled');
    }
  });
});

$(() => {
  $('#popup-from').on('submit', (event) => {
    event.preventDefault();
    const dataForm = new FormData(event.target);

    const request = new XMLHttpRequest();
    request.open('POST', '/api/landing/feedback/');
    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        popupOpen(document.getElementById('popup-2'));
      } else {
        popupOpen(document.getElementById('popup-3'));
      }
    };
    request.send(dataForm);
  });
});
