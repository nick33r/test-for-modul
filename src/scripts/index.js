import '../pages/index.css';

document.addEventListener('DOMContentLoaded', () => {
  const sliderList = document.querySelector('.slider-parners__list');
  const partners = document.querySelectorAll('.slider-parners__item');

  if (partners.length === 0) return;

  const cloneCount = calculateCloneCount(partners.length);
  clonePartners(cloneCount);

  function calculateCloneCount(itemsCount) {
    if (itemsCount <= 3) return 5;
    if (itemsCount <= 6) return 3;
    if (itemsCount >= 12) return 0;
    return 1;
  }

  function clonePartners(cycles) {
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < cycles; i++) {
      partners.forEach(partner => {
        fragment.appendChild(partner.cloneNode(true));
      });
    }
    
    sliderList.appendChild(fragment);
  }
});