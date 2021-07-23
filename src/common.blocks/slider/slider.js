/* eslint-disable */

import { Swiper, Navigation } from 'swiper';
import Calendar from '../calendar/Сalendar';

Swiper.use([Navigation]);

function createSlide(index) {
  const calendar = new Calendar(index);
  const abbreviations = ['Сегодня', 'Завтра'];
  const { dayOfTheWeek, number, value } = calendar.date;
  const currentDate = index < 2 ? abbreviations[index] : number.substr(0, number.length - 8);

  return `
    <div class="calendar__item slider__slide swiper-slide">
    <input class="calendar__input visually-hidden" type="radio" name="date" data-value="${value}" id="date-${index}">
    <label class="calendar__label" for="date-${index}">
      <span class="calendar__date">${currentDate}</span>
      <span class="calendar__day">${dayOfTheWeek}</span>
    </label>
    </div>
  `;
}

function initializedSlides() {
  for (let index = 0; index < 7; index++) {
    this.appendSlide(createSlide(index));
  }
}

const swiper = new Swiper('.slider__container', {
  on: {
    init: initializedSlides,
  },
  wrapperClass: 'slider__wrapper',
  slideNextClass: 'slider__slide--next',
  slidesPerView: 3,
  spaceBetween: 16,
  navigation: {
    nextEl: '.slider__button--next',
    prevEl: '.slider__button--prev',
    disabledClass: 'slider__button--disabled',
  },
  breakpoints: {
    768: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
  },
});

swiper.on('slideChange', () => {
  if (swiper.realIndex > swiper.previousIndex) {

    swiper.appendSlide(createSlide(swiper.slides.length));
  }
});
