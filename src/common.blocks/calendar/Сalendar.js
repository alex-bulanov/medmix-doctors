/* eslint-disable */

import moment from 'moment';

moment.updateLocale('ru', {
  monthsShort: {
    format: 'янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек'.split('_'),
    standalone: 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
  },
});

const week = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

class Calendar {
  constructor(index) {
    this._currentDate = new Date();
    this._resultDate = new Date().setDate(this._currentDate.getDate() + index);
  }

  get date() {
    return {
      dayOfTheWeek: week[moment(this._resultDate).weekday()],
      number: moment(this._resultDate).format('ll'),
      value: moment(this._resultDate).format('L'),
    };
  }
}

export default Calendar;
