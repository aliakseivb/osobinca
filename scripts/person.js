(() => {

  const selectElements = document.querySelectorAll('.select');
  const div = document.querySelector('#popup');

  document.addEventListener('click', (e) => {
    e.stopPropagation();
    selectElements.forEach(elem => {
      if (e.target !== elem && !e.target.classList.contains('option-item')) {
        elem.classList.remove('opened');
        elem.nextElementSibling.classList.remove('open');
      }
    });

    // const openedElem = selectElements.find(elem => {
    //   return elem.classList.contains('opened');
    // })
    // const withinBoundaries = e.composedPath().includes(div);

    // if ( ! withinBoundaries ) {
    //   div.style.display = 'none'; // скрываем элемент т к клик был за его пределами
    // }
  })
  Array.from(selectElements).forEach(selectEl => {
    selectEl.addEventListener('click', (e) => {
      if (e.target.classList.contains('opened')) {
        e.target.classList.remove('opened');
        e.target.nextElementSibling.classList.remove('open');
        return;
      }
      Array.from(selectElements).forEach(elem => {
        elem.classList.remove('opened');
        elem.nextElementSibling.classList.remove('open');
        e.target.nextElementSibling.classList.remove('open');
      });
      e.target.classList.add('opened');
      e.target.nextElementSibling.classList.add('open');

      // e.target.parentElement.style.position = e.target.parentElement.style.position === 'relative' ? 'static' : 'relative';
      const toFilledElems = e.target.nextElementSibling.children;

      Array.from(toFilledElems).forEach(elem => {
        if (elem.innerText === selectEl.innerText) {
          elem.style.display = 'none';
        } else {
          elem.style.display = 'block';
        }
        elem.addEventListener('click', (e) => {
          let tmp =
              selectEl.innerText = e.target.innerText;
          selectEl.classList.remove('opened');
          selectEl.nextElementSibling.classList.remove('open');
          if (e.target.hasAttribute('data-name')) {
            selectEl.dataset.name = e.target.dataset.name;
            openElem(e.target);
          }
        });
      });
    });
  });

  /*toDo открываем сайдбаром*/

  const sidebarElements = document.querySelectorAll('.personal-details-sidebar-item');
  const personalElements = document.querySelectorAll('.form-wrapper');

  Array.from(sidebarElements).forEach(elem => {
    elem.addEventListener('click', (e) => {
      // let active = e.target;
      if (e.target.classList.contains('active')) {
        openElem(e.target);
      } else {
        Array.from(sidebarElements).forEach(elem => {
          elem.classList.remove('active');
        })
        openElem(e.target);
      }
    });
  });

  function openElem(elem) {
    Array.from(personalElements).forEach(item => {
      item.classList.remove('active');
      if (elem.dataset.name === item.dataset.name) {
        item.classList.add('active');
        elem.classList.add('active');
      }
    });
  }

  /** toDo переходы по состояниям */

  const toPersonalButtons = document.querySelectorAll('.to-personal-button');

  Array.from(toPersonalButtons).forEach(btn => {
    btn.addEventListener('click', () => {
      Array.from(sidebarElements).forEach(elem => {
        elem.classList.remove('active');
        if (elem.dataset.name === 'personal') {
          elem.classList.add('active');
        }
      });
      Array.from(personalElements).forEach(elem => {
        elem.classList.remove('active');
        if (elem.dataset.name === 'personal') {
          elem.classList.add('active');
        }
      });
    })
  });


  /** toDo работа с попапами */

  /* заявка на добавление категорий в договор */
  const openAdditional = document.querySelector('.contract-button');
  const additional = document.querySelector('.additional');
  const closeAdditionalBtn = document.querySelector('.close-additional');
  const sendAdditionalButton = document.querySelector('.additional-button');
  const successPopup = document.querySelector('.after-commercial-popup');
  const body = document.body;

  closeAdditionalBtn.addEventListener('click', () => {
    additional.classList.remove('open');
    openAdditional.parentElement.style.position = 'static';
    body.classList.remove('no-scroll');
  });
  openAdditional.addEventListener('click', () => {
    additional.classList.add('open');
    additional.style.top = window.scrollY.toString() + 'px';
    openAdditional.parentElement.style.position = 'relative';
    body.classList.add('no-scroll')
  });

  sendAdditionalButton.addEventListener('click', () => {
    additional.classList.remove('open');
    document.body.style.overflow = 'unset';
    successPopup.classList.add('show');
  });


  /* заявка на дизайнерские работы */
  const today = document.querySelector('.today');
  today.innerText = new Date().toLocaleDateString()

  const designForm = document.querySelector('.design');
  const designFormOpenBtn = document.querySelector('.application-button');
  const designFormCloseBtn = document.querySelector('.close-design');
  const designSendBtn = document.querySelector('.design-button');
  const afterDesignPopup = document.querySelector('.after-design');
  const closeDesignPopup = document.querySelector('.design-close');

  designFormOpenBtn.addEventListener('click', () => {
    designForm.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  designFormCloseBtn.addEventListener('click', () => {
    designForm.classList.remove('open');
    document.body.style.overflow = 'unset';
  });
  designSendBtn.addEventListener('click', () => {
    designForm.classList.remove('open');
    afterDesignPopup.classList.add('show');
    document.body.style.overflow = 'hidden';
  });

  closeDesignPopup.addEventListener('click', () => {
    afterDesignPopup.classList.remove('show');
    document.body.style.overflow = 'unset';
  });


  /*toDO работа с таблицей результатов */
  const response = [
    {
      month: 'Январь',
      all: '102 546 шт',
      fed: '54 657 шт',
      reg: '20 540 шт'
    },
    {
      month: 'Февраль',
      all: '102 546 шт',
      fed: '54 657 шт',
      reg: '20 540 шт'
    },
    {
      month: 'Март',
      all: '102 546 шт',
      fed: '54 657 шт',
      reg: '20 540 шт'
    },
    {
      month: 'Апрель',
      all: '102 546 шт',
      fed: '54 657 шт',
      reg: '20 540 шт'
    },
    {
      month: 'Июнь',
      all: '102 546 шт',
      fed: '54 657 шт',
      reg: '20 540 шт'
    },
    {
      month: 'Июль',
      all: '102 546 шт',
      fed: '54 657 шт',
      reg: '20 540 шт'
    },
    {
      month: 'Агуст',
      all: '-',
      fed: '-',
      reg: '-'
    },
    {
      month: 'Сентябрь',
      all: '-',
      fed: '-',
      reg: '-'
    },
    {
      month: 'Октябрь',
      all: '-',
      fed: '-',
      reg: '-'
    },
    {
      month: 'Ноябрь',
      all: '-',
      fed: '-',
      reg: '-'
    },
    {
      month: 'Декабрь',
      all: '-',
      fed: '-',
      reg: '-'
    }
  ]
  const resultBtn = document.querySelectorAll('.result-select');
  const wrapElem = document.querySelectorAll('.wrap-res');
  const rulesElem = document.querySelector('.rules');
  const resultTitle = document.querySelector('.result-title');
  const header = document.querySelector('.header');
  const navigation = document.querySelector('.navigation');

  // Array.from(resultBtn).forEach(btn => {
  //   btn.addEventListener('click', (e) => {
  //     Array.from(wrapElem).forEach((elem, idx) => {
  //       elem.classList.remove('stayed');
  //     });
  //     resultTitle.classList.remove('pick');
  //     let saveElem
  //     const parent = e.target.parentElement.parentElement.parentElement;
  //     const rowElem = e.target.parentElement.parentElement;
  //     rulesElem.classList.remove('visible');
  //     if (e.target.classList.contains('open')) {
  //       e.target.classList.remove('open');
  //       const saveElem = e.target.parentElement.parentElement;
  //       saveElem.classList.remove('open-to-right');
  //       parent.innerHTML = '';
  //       parent.append(saveElem);
  //       return
  //     } else {
  //       resultTitle.classList.add('pick');
  //       Array.from(wrapElem).forEach((elem, idx) => {
  //         elem.classList.remove('stayed');
  //
  //         if (!elem.children[0].classList.contains('row-result')) {
  //           saveElem = elem.children[1];
  //         } else {
  //           saveElem = elem.children[0];
  //         }
  //         saveElem.classList.remove('margin');
  //         saveElem.classList.remove('open-to-right');
  //         saveElem.children[0].children[1].classList.remove('open');
  //         elem.innerHTML = '';
  //
  //         if (e.target.dataset.name === saveElem.dataset.name) {
  //           rulesElem.classList.add('visible');
  //           elem.append(rulesElem);
  //         } else {
  //           elem.classList.add('stayed');
  //         }
  //         elem.append(saveElem);
  //       });
  //       e.target.parentElement.parentElement.classList.add('open-to-right');
  //       // e.target.parentElement.parentElement.style.marginBottom = '10px';
  //       response.forEach(item => {
  //         const newRow = document.createElement('div');
  //         newRow.className = 'row-result margin';
  //         newRow.classList.add('open-to-right');
  //         Array.from(wrapElem).forEach(el => {
  //           if (el === parent) {
  //
  //             newRow.insertAdjacentHTML('beforeend', `<div class=""><div class="details-label">Срок</div><div class="month">${item.month}</div></div><div class=""><div class="details-label">Всего продано</div><input class="form-input sales" type="text" value="${item.all}"></div><div class=""><div class="details-label">Федеральные сети</div><input class="form-input sales" type="text" value="${item.fed}"></div><div class=""><div class="details-label">Региональные сети</div><input class="form-input sales" type="text" value="${item.reg}"></div>`)
  //             newRow.classList.add('open-to-right');
  //             e.target.classList.add('open');
  //             // newRow.style.marginBottom = '10px';
  //             parent.appendChild(newRow);
  //           }
  //         });
  //       });
  //     }
  //   });
  // });

  let stayed;
  let headerWidth
  Array.from(resultBtn).forEach(btn => {
    btn.addEventListener('click', (e) => {
      stayed = e.target.parentElement.parentElement.parentElement.offsetWidth;
      // headerWidth = header.offsetWidth;
      Array.from(wrapElem).forEach((elem, idx) => {
        elem.removeAttribute('style');
        header.removeAttribute('style');

      });
      resultTitle.classList.remove('pick');
      let saveElem
      const parent = e.target.parentElement.parentElement.parentElement;
      // const rowElem = e.target.parentElement.parentElement;
      rulesElem.classList.remove('visible');
      if (e.target.classList.contains('open')) {
        e.target.classList.remove('open');
        const saveElem = e.target.parentElement.parentElement;
        saveElem.classList.remove('open-to-right');
        parent.innerHTML = '';
        parent.append(saveElem);
        return
      } else {
        resultTitle.classList.add('pick');
        Array.from(wrapElem).forEach((elem, idx) => {
          elem.removeAttribute('style');
          // header.removeAttribute('style');
          if (!elem.children[0].classList.contains('row-result')) {
            saveElem = elem.children[1];
          } else {
            saveElem = elem.children[0];
          }
          saveElem.classList.remove('margin');
          saveElem.classList.remove('open-to-right');
          saveElem.children[0].children[1].classList.remove('open');
          elem.innerHTML = '';

          if (e.target.dataset.name === saveElem.dataset.name) {
            rulesElem.classList.add('visible');
            elem.append(rulesElem);
          } else {
            elem.style.maxWidth = stayed + 'px';
            // header.style.maxWidth = headerWidth + 'px';
          }
          elem.append(saveElem);

        });
        e.target.parentElement.parentElement.classList.add('open-to-right');
        e.target.parentElement.parentElement.style.marginBottom = '10px';
        response.forEach(item => {
          const newRow = document.createElement('div');
          newRow.className = 'row-result margin';
          newRow.classList.add('open-to-right');
          Array.from(wrapElem).forEach(el => {
            if (el === parent) {

              newRow.insertAdjacentHTML('beforeend', `<div class=""><div class="details-label">Срок</div><div class="month">${item.month}</div></div><div class=""><div class="details-label">Всего продано</div><input class="form-input sales" type="text" value="${item.all}"></div><div class=""><div class="details-label">Федеральные сети</div><input class="form-input sales" type="text" value="${item.fed}"></div><div class=""><div class="details-label">Региональные сети</div><input class="form-input sales" type="text" value="${item.reg}"></div>`)
              newRow.classList.add('open-to-right');
              e.target.classList.add('open');
              newRow.style.marginBottom = '10px';
              parent.appendChild(newRow);
            }
          });
        });
      }
    });
  });
})();