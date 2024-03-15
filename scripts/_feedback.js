(() => {

  const giveFeedbackBtn = document.querySelector('.btn-give-feedback');
  const feedbackForm = document.querySelector('.feedback-form');
  const sendFeedbackBtn = document.querySelector('.send-feedback');
  const feedbackCloseBtn = document.querySelector('.feedback-close');
  const successFeedbackPopup = document.querySelector('.success-feedback-popup');
  const successFeedbackClose = document.querySelector('#success-feedback-close');
  const errorPopup = document.querySelector('.feedback-partner-error-popup');
  const closeErrorPopup = document.querySelector('#close-popup-error');
  const confirm = document.querySelector('#feedback-confirm');
  const body = document.body;

  /* открываем форму для отзыва */
  giveFeedbackBtn.addEventListener('click', (e) => {
    document.body.style.overflow = 'hidden';
    feedbackForm.classList.add('show');
  });

  /* закрываем форму отзыва */
  feedbackCloseBtn.addEventListener('click', () => {
    feedbackForm.classList.remove('show');
    document.body.style.overflow = 'unset';
  });

  /* отправляем форму отзыва и показываем попап успеха или ошибки */
  sendFeedbackBtn.addEventListener('click', (e) => {
    feedbackForm.classList.remove('show');
    if (confirm.checked) {
      successFeedbackPopup.classList.add('show');
    } else {
      errorPopup.classList.add('show');
    }
  });

  /* закрываем попап ошибки */
  closeErrorPopup.addEventListener('click', () => {
    errorPopup.classList.remove('show');
    document.body.style.overflow = 'unset';
  });

  /* закрываем успешный попап */
  successFeedbackClose.addEventListener('click', () => {
    successFeedbackPopup.classList.remove('show');
    document.body.style.overflow = 'unset';
  });


  /*toDo показ и скрытие попапа с каруселью отзывов*/

  const openCarouselItemBtns = document.querySelectorAll('.feedback-partner-item-link');
  const feedbackCarousel = document.querySelector('.feedback-partner-carousel-popup');

  openCarouselItemBtns.forEach(elem => {
    elem.addEventListener('click', () => {
      feedbackCarousel.classList.add('show');
      body.classList.add('no-scroll');
    });
  });
  const closeFeedbackCarouselBtn = document.querySelector('.feedback-item-close');
  if (closeFeedbackCarouselBtn) {
    closeFeedbackCarouselBtn.addEventListener('click', () => {
      feedbackCarousel.classList.remove('show');
      body.classList.remove('no-scroll');
    });
  }

})();
