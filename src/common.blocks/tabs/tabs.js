document.querySelectorAll('.tabs__triggers-item').forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('href').replace('#', '');

    document.querySelectorAll('.tabs__triggers-item').forEach((child) => {
      child.classList.remove('tabs__triggers-item--active');
    });

    document.querySelectorAll('.tabs__content-item').forEach((child) => {
      child.classList.remove('tabs__content-item--active');
    });

    item.classList.add('tabs__triggers-item--active');
    document.getElementById(id).classList.add('tabs__content-item--active');
  });
});

document.querySelector('.tabs__triggers-item').click();
