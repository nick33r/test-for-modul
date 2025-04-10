import '../pages/index.css';

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider-parners');
  const sliderList = document.querySelector('.slider-parners__list');
  const partners = document.querySelectorAll('.slider-parners__item');

  if (slider.offsetWidth < sliderList.offsetWidth) {
    clonePartners();
  } else {
    sliderList.style.animation = 'none';
    slider.style.display = 'flex';
    slider.style.justifyContent = 'center';
  }

  function clonePartners() {
    const fragment = document.createDocumentFragment();
    
    partners.forEach(partner => {
      fragment.appendChild(partner.cloneNode(true));
    });
    
    sliderList.appendChild(fragment);
  }
});