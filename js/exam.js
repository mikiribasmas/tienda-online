let items = document.querySelectorAll('.faq-content-item');

items.forEach(item => {
  let title = item.querySelector('.faq-content-item-title');

  title.addEventListener('click', () => {
    items.forEach(otherItem => {
      if (otherItem != item) {
        otherItem.classList.remove('active');
      }
    });

    item.classList.toggle('active');
  });
});
