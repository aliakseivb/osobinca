(() => {
  const headElemSvg = document.querySelectorAll('.svg-action');
  const headElements = document.querySelectorAll('.question-head');
  const popupElem = document.querySelector('.question-popup');
  const questionBtn = document.querySelector('.question-button');
  const popupClose = document.querySelector('.popup-close');
  const sidebar = document.querySelector('.questions-sidebar');
  if (sidebar) {
    sidebar.style.marginTop = 'unset';
  }

  if (questionBtn) {
    questionBtn.addEventListener('click', (e) => {
      if(popupElem){
        popupElem.classList.add('show');
      }
      document.body.style.overflow = 'hidden';
    });
  }

  if (popupClose) {
    popupClose.addEventListener('click', () => {
      popupElem.classList.remove('show');
      document.body.style.overflow = 'unset';
    });
  }

  headElemSvg.forEach(elem => {
    elem.addEventListener('click', (e) => {
      if (e.target.parentElement.classList.contains('active')) {
        e.target.parentElement.classList.remove('active');
        e.target.parentElement.nextElementSibling.style.maxHeight = `0`;
        e.target.parentElement.nextElementSibling.style.marginBottom = `0`;
        sidebar.style.marginTop = 'unset';
      } else {
        headElements.forEach(elem => {
          elem.classList.remove('active');
          elem.nextElementSibling.style.maxHeight = `0`;
          elem.nextElementSibling.style.marginBottom = `0`;
        })
        e.target.parentElement.classList.add('active');
        e.target.parentElement.nextElementSibling.style.maxHeight = `${e.target.parentElement.nextElementSibling.scrollHeight}px`;
        e.target.parentElement.nextElementSibling.style.marginBottom = `20px`;
        goToActiveElem();
      }
    });
  })
  let orientElem = null;

  function goToActiveElem() {
    setTimeout(() => {
      headElements.forEach(elem => {
        if (elem.classList.contains('active')) {
          if(window. innerWidth < 769){
            elem.scrollIntoView({block: "center", behavior: "smooth"});
            return
          }
          elem.scrollIntoView({block: "center", behavior: "smooth"});
          orientElem = elem.getBoundingClientRect();
          sidebar.style.marginTop = 'unset';
          sidebar.style.marginTop = `${orientElem.y.toFixed() - sidebar.getBoundingClientRect().y.toFixed()}px`;
        }
      })
    }, 900);
  }
})();
