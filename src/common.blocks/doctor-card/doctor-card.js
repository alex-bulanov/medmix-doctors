import Tabs from '../tabs/tabs';

const doctorTabsContainer = document.querySelectorAll('.doctor-card__tabs');

doctorTabsContainer.forEach((item) => {
  const doctorTabs = new Tabs(item);
  doctorTabs.init();
});
