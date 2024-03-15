(() => {
  const registryPopup = document.querySelector('.registry-popup');
  const registryBtn = document.querySelector('.auth-button');
  const closeRegistryPopupBtn = document.querySelector('.popup-close');
  const letterYet = document.querySelector('.letter-yet-info');
  const notGetLetterBtn = document.querySelector('.not-letter');
  const againLetterCloseBtn = document.querySelector('.again-letter');
  const body = document.body;

  registryBtn.addEventListener('click', () => {
    registryPopup.classList.add('show');
    body.classList.add('no-scroll');
  });

  closeRegistryPopupBtn.addEventListener('click', () => {
    registryPopup.classList.remove('show');
    body.classList.remove('no-scroll');
  });

  notGetLetterBtn.addEventListener('click', () => {
    registryPopup.classList.remove('show');
    letterYet.classList.add('show');
  });

  againLetterCloseBtn.addEventListener('click', () => {
    letterYet.classList.remove('show');
    body.classList.remove('no-scroll');
  });

})();