(() => {
  const afterCommercialPopup = document.querySelector('.after-commercial-popup');
  const commercailItem = document.querySelector('.commercial-offer-item');
  const commercialOffer = document.querySelector('.commercial-offer');
  const sendCommercialBtn = document.querySelector('.commercial-button');
  const orderBtn = document.querySelector('.order-button');
  const closeCommercial = document.querySelector('.commercial-close');
  const afterCommercialCloseBtn = document.querySelector('.after-commercial-close');
  const select = document.querySelector('.status-select');
  const closeAfterOffer = document.querySelector('#after-commercial-close');
  const body = document.body;

  if (closeAfterOffer) {
    closeAfterOffer.addEventListener('click', () => {
      afterCommercialPopup.classList.remove('show');
      body.classList.remove('no-scroll');
    });
  }

  if (afterCommercialCloseBtn) {
    afterCommercialCloseBtn.addEventListener('click', () => {
      afterCommercialPopup.classList.remove('show');
      body.classList.remove('no-scroll');
    });
  }
  if (closeCommercial) {
    closeCommercial.addEventListener('click', () => {
      commercialOffer.classList.remove('show');
      body.classList.remove('no-scroll');
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
      body.classList.add('no-scroll');
      below.style.maxHeight = `0`;
      select.classList.remove('show');
    });
  }

  if (orderBtn) {
    orderBtn.addEventListener('click', () => {
      if(commercialOffer){
        commercialOffer.classList.add('show');
        commercialOffer.style.top = window.scrollY.toString() + 'px';
      }
      if (window.innerWidth > 700) {
        body.classList.add('no-scroll');
      }
    });
  }


  /* работа с селектом в форме коммерческого предложения */

  const innerElem = document.querySelectorAll('.status-item');
  const below = document.querySelector('.below')
  if (select) {
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

  /* Нажатие кнопки бургера в адаптиве */

  const burger = document.querySelector('.burger');
  const navigationMenu = document.querySelector('.navigation');
  const navElements = document.querySelectorAll('.nav-item');
  const logoElem = document.querySelector('.logo-image');

  document.addEventListener('click', (e) => {
    const thisIsInBurger = e.composedPath().includes(burger);

    if (!thisIsInBurger) {
      burger.classList.remove('open');
      navigationMenu.classList.remove('open');
      body.classList.remove('no-scroll');
    }
  });

  logoElem.onclick = () => {
    burger.classList.remove('open');
    navigationMenu.classList.remove('open');
    body.classList.remove('no-scroll');
  }

  if (burger) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      navigationMenu.classList.toggle('open');
      if (burger.classList.contains('open') && navigationMenu.classList.contains('open')) {
        body.classList.add('no-scroll');
        // pop.style.minHeight = Math.max(+body.scrollHeight.toFixed()) + 'px';
      } else {
        body.classList.remove('no-scroll');
      }
    });

  }

  navElements.forEach(elem => {
    elem.addEventListener('click', () => {
      header.classList.remove('header-active');
    });
  });


  /* анимация хедера */
  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.scrollY > 1) {
      header.classList.add('header-active');
    } else {
      header.classList.remove('header-active');
    }
  };
})();
