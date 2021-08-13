export default class Tabs {
  constructor(tabContainer) {
    this.tabContainer = tabContainer;
    this.triggers = Array.from(tabContainer.children[0].children);
    this.content = Array.from(tabContainer.children[1].children);
    this.tabIndex = '';
    this.selectTab = this.selectTab.bind(this);
    this.selectContent = this.selectContent.bind(this);
  }

  selectTab(evt) {
    this.triggers.forEach((triggerItem) => {
      triggerItem.classList.remove('is-active');
    });
    evt.target.classList.add('is-active');
    this.tabIndex = Number(evt.target.dataset.tab);
    this.selectContent(this.tabIndex);
  }

  selectContent(itemIndex) {
    this.content.forEach((item, index) => {
      if (index === itemIndex) {
        item.classList.add('is-active');
      } else {
        item.classList.remove('is-active');
      }
    });
  }

  init() {
    this.tabContainer.classList.add('tab-initialized');
    this.triggers.forEach((triggerItem, index) => {
      triggerItem.dataset.tab = index;
      if (index === 0) {
        triggerItem.classList.add('is-active');
      } else {
        triggerItem.classList.remove('is-active');
      }

      triggerItem.addEventListener('click', this.selectTab);
    });

    this.content.forEach((contentItem, index) => {
      contentItem.classList.add('is-initialized');
      if (index === 0) {
        contentItem.classList.add('is-active');
      } else {
        contentItem.classList.remove('is-active');
      }
    });
  }

  destroy() {
    this.tabContainer.classList.remove('tab-initialized');
    this.triggers.forEach((triggerItem) => {
      triggerItem.removeAttribute('data-tab');
      triggerItem.classList.remove('is-active');
      triggerItem.removeEventListener('click', this.selectTab);
    });

    this.content.forEach((contentItem) => {
      contentItem.classList.remove('is-active', 'is-initialized');
    });
  }
}
