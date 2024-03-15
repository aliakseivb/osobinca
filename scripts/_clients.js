(() => {
  /*toDo показ и скрытие попапа с каруселью отзывов*/

  const openCarouselItemBtns = document.querySelectorAll('.feedback-partner-item-link');
  const feedbackCarousel = document.querySelector('.feedback-partner-carousel-popup');

  openCarouselItemBtns.forEach(elem => {
    elem.addEventListener('click',()=> {
      feedbackCarousel.classList.add('show');
    });
  });
  const closeFeedbackCarouselBtn = document.querySelector('.feedback-item-close');
  if(closeFeedbackCarouselBtn){
    closeFeedbackCarouselBtn.addEventListener('click', () => {
      feedbackCarousel.classList.remove('show');
      document.body.style.overflow = 'unset';
    });
  }
})();