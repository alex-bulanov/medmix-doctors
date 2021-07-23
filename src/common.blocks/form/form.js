import popupOpen from '../popup/popup';

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
