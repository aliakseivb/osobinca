(() => {
  const proposal = document.querySelector('.proposal');
  const calcBtn = document.querySelector('.btn-calc');
  const proposalClose = document.querySelector('.proposal-close');
  const sendProposalBtn = document.querySelector('.proposal-button');
  const afterCommercialPopup = document.querySelector('.after-commercial-popup');
  const body = document.body;

  sendProposalBtn.addEventListener('click', (e) => {
    proposal.classList.remove('show');
    afterCommercialPopup.classList.add('show');
  });

  calcBtn.addEventListener('click', (e) => {
    proposal.classList.add('show');
    body.classList.add('no-scroll');
  });

  proposalClose.addEventListener('click', () => {
    proposal.classList.remove('show');
    body.classList.remove('no-scroll');
  });


  const innerCalcElements = document.querySelectorAll('.calc-select-item');
  const selectCalcElements = document.querySelectorAll('.calc-select');

  Array.from(selectCalcElements).forEach(selectElem => {
    selectElem.addEventListener('click', (e) => {
      if(e.target.classList.contains('show')){
        e.target.nextElementSibling.style.maxHeight = '0';
        e.target.nextElementSibling.style.zIndex = '-1';
        e.target.classList.remove('show');
      }else {
        Array.from(selectCalcElements).forEach(elem => {
          elem.nextElementSibling.style.maxHeight = '0';
          elem.nextElementSibling.style.zIndex = '-1';
          elem.classList.remove('show');
        })
        e.target.nextElementSibling.style.maxHeight = `${e.target.nextElementSibling.scrollHeight}px`;
        e.target.nextElementSibling.style.zIndex = '2';
        e.target.classList.add('show');
      }
    })
  })

  Array.from(innerCalcElements).forEach(elem => {
    elem.addEventListener('click', (e) => {
      e.target.parentElement.style.maxHeight = `0`;
      e.target.parentElement.style.zIndex = `-1`;
      Array.from(selectCalcElements).find(elem => {
        if(elem.classList.contains('show')){
          setTimeout(()=>{
            elem.innerText = e.target.innerText;
            elem.classList.remove('show');
          },200);
        }
      });
    });
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
