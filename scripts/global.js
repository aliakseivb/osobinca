(() => {
  const afterCommercialPopup = document.querySelector('.after-commercial-popup');
  const commercialOffer = document.querySelector('.commercial-offer');
  const sendCommercialBtn = document.querySelector('.commercial-button');
  const orderBtn = document.querySelector('.order-button');
  const closeCommercial = document.querySelector('.commercial-close');
  const afterCommercialCloseBtn = document.querySelector('.after-commercial-close');
  const select = document.querySelector('.status-select');
  const closeAfterOffer = document.querySelector('#after-commercial-close');

  if (closeAfterOffer) {
    closeAfterOffer.addEventListener('click', () => {
      afterCommercialPopup.classList.remove('show');
      document.body.style.overflow = 'unset';
    });
  }

  if (afterCommercialCloseBtn) {
    afterCommercialCloseBtn.addEventListener('click', () => {
      afterCommercialPopup.classList.remove('show');
      document.body.style.overflow = 'unset';
    });
  }
  if (closeCommercial) {
    closeCommercial.addEventListener('click', () => {
      commercialOffer.classList.remove('show');
      document.body.style.overflow = 'unset';
      select.style.color = '#A3A3A3';
      select.innerText = 'Выберите из списка';
      below.style.maxHeight = `0`;
      select.classList.remove('show');
    });
  }

  if (sendCommercialBtn) {
    sendCommercialBtn.addEventListener('click', (e) => {
      commercialOffer.classList.remove('show');
      afterCommercialPopup.classList.add('show');
      document.body.style.overflow = 'unset';
      below.style.maxHeight = `0`;
      select.classList.remove('show');
    });
  }

  if (orderBtn) {
    orderBtn.addEventListener('click', () => {
      commercialOffer.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  }


  /* работа с селектом в форме коммерческого предложения */

  const innerElem = document.querySelectorAll('.status-item');
  const below = document.querySelector('.below')
  if(select) {
    select.addEventListener('click', (e) => {
      if (select.classList.contains('show')) {
        select.classList.remove('show');
        below.style.maxHeight = `0`;
      } else {
        below.style.maxHeight = `${below.scrollHeight}px`;
        select.classList.toggle('show');
      }
    });
  }

  Array.from(innerElem).forEach(elem => {
    elem.addEventListener('click', (e) => {
      below.style.maxHeight = `0`;
      setTimeout(() => {
        select.innerText = e.target.innerText;
        select.classList.remove('show');
      }, 200);
    });
  });
})();
