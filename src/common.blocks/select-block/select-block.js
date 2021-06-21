import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.min.css';

/* eslint-disable */

const initializeSelects = () => {
  const selectElements = document.querySelectorAll('.select-block__select');

  selectElements.forEach((element) => {
    const choices = new Choices(element, {
      itemSelectText: '',
      searchEnabled: false,
      shouldSort: false,
    });


    choices.init();
  });
};

initializeSelects();
