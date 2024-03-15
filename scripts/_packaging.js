(() => {
  //toDo замена текста в кнопках при малых размерах крана
  const reserve = document.querySelectorAll('.reserve');
  const payed = document.querySelectorAll('.payed');

  window.addEventListener('resize', () => {
    reserve.forEach(elem => {
      if (document.body.clientWidth < 850) {
        elem.innerText = 'Зарезервировано';
      } else {
        elem.innerText = 'Дизайн зарезервирован';
      }
    });
    payed.forEach(elem => {
      if (document.body.clientWidth < 850) {
        elem.innerText = 'Выкуплено';
      } else {
        elem.innerText = 'Дизайн выкуплен';
      }
    })
  })


  //toDo код для категорий
  const linkLine = document.querySelector('.main-link');
  const productTitle = document.querySelector('.main-packaging-title');
  const innerPackagingElements = document.querySelectorAll('.main-packaging-sidebar-item');
  const selectPackagingElements = document.querySelectorAll('.main-packaging-sidebar-select');


  Array.from(selectPackagingElements).forEach(selectElem => {
    selectElem.addEventListener('click', (e) => {
      if (e.target.classList.contains('other-product')) {
        e.target.classList.add('active');
        productTitle.innerText = e.target.innerText;
        linkLine.innerHTML = '';
        linkLine.insertAdjacentHTML('beforeend', `<a href="../index.html">Главная</a><svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none"><path d="M1 1L5 5L1 9" stroke="#6F9114"/></svg><span style="color: #6F9114">Варианты упаковок</span><svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none"><path d="M1 1L5 5L1 9" stroke="#6F9114"/></svg><span style="color: #6F9114">${e.target.innerText}</span>`);
        if (e.target.classList.contains('active')) {
          Array.from(selectPackagingElements).forEach(elem => elem.classList.remove('selected'));
        }
      } else {
        if (e.target.classList.contains('active')) {
          e.target.parentElement.style.background = '#FFFFFF';
          e.target.nextElementSibling.style.maxHeight = '0';
          e.target.nextElementSibling.style.zIndex = '-1';
          e.target.nextElementSibling.style.border = 'none';
          e.target.classList.remove('active');
        } else {
          Array.from(selectPackagingElements).forEach(elem => {
            elem.parentElement.style.background = '#FFFFFF';
            if (elem.nextElementSibling) {
              elem.nextElementSibling.style.maxHeight = '0';
              elem.nextElementSibling.style.zIndex = '-1';
            }
            e.target.nextElementSibling.style.border = 'none';
            elem.classList.remove('active');
          });
          e.target.parentElement.style.background = '#8FB32C';
          e.target.nextElementSibling.style.maxHeight = `${e.target.nextElementSibling.scrollHeight}px`;
          e.target.nextElementSibling.style.zIndex = '2';
          setTimeout(() => {
            e.target.nextElementSibling.style.border = '1px solid #8FB32C';
          }, 100)
          e.target.classList.add('active');
        }
      }
    })
  })

  Array.from(innerPackagingElements).forEach(elem => {
    elem.addEventListener('click', (e) => {
      e.target.parentElement.style.maxHeight = `0`;
      e.target.parentElement.style.zIndex = `-1`;
      Array.from(selectPackagingElements).find(findElem => {
        if (findElem.classList.contains('active')) {
          setTimeout(() => {
            let toLink = findElem.innerText;
            findElem.innerText = e.target.innerText;
            findElem.classList.remove('active');
            findElem.parentElement.style.background = '#ffffff';
            findElem.nextElementSibling.style.border = '1px solid transparent';
            compareAndLeaveSelected(toLink, findElem);
          }, 200);
        }
      });
    });
  });

  //toDo код для строки страницы

  function compareAndLeaveSelected(text, elemToSelected) {
    linkLine.innerHTML = '<a href="../index.html">Главная</a>\n' +
        '      <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">\n' +
        '        <path d="M1 1L5 5L1 9" stroke="#6F9114"/>\n' +
        '      </svg>\n' +
        '      <span style="color: #6F9114">Варианты упаковок</span>';
    Array.from(selectPackagingElements).forEach(elem => {
      elem.classList.remove('selected');
    });
    elemToSelected.classList.add('selected');
    const addToLink = `<svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">\\n' +
        '        <path d="M1 1L5 5L1 9" stroke="#6F9114"/>\\n' +
        '      </svg><span style="color: #6F9114">${text}</span> <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">\\n' +
        '        <path d="M1 1L5 5L1 9" stroke="#6F9114"/>\\n' +
        '      </svg><span>${elemToSelected.innerText}</span>`
    linkLine.insertAdjacentHTML('beforeend', addToLink);
    productTitle.innerText = elemToSelected.innerText;
  }


  //toDo код для работы с фильтрами
  const filterLeftSelect = document.querySelector('.filter-left-select');
  const filterRightSelect = document.querySelector('.filter-right-select');
  const filterLeftItems = document.querySelectorAll('.filter-left-item');
  const filterRightItems = document.querySelectorAll('.filter-right-item');

  //  левый фильтр
  filterLeftSelect.addEventListener('click', (e) => {
    e.target.nextElementSibling.classList.add('open');
    Array.from(filterLeftItems).forEach(item => {
      item.classList.remove('active');
      if (item.innerText === filterLeftSelect.innerText) {
        item.classList.add('active');
      }
    });
  });

  Array.from(filterLeftItems).forEach(elem => {
    elem.addEventListener('click', (e) => {
      filterLeftSelect.innerText = elem.innerText;
      e.target.parentElement.classList.remove('open');
      if (e.target.innerText !== 'Все') {
        filterLeftSelect.classList.add('not-default');
      } else {
        filterLeftSelect.classList.remove('not-default');
      }
    });
  });


  // правый фильтр
  filterRightSelect.addEventListener('click', (e) => {
    e.target.nextElementSibling.classList.add('open');
    e.target.nextElementSibling.classList.add('open');
    Array.from(filterRightItems).forEach(item => {
      item.classList.remove('active');
      if (item.innerText === filterRightSelect.innerText) {
        item.classList.add('active');
      }
    });
  });

  Array.from(filterRightItems).forEach(elem => {
    elem.addEventListener('click', (e) => {
      filterRightSelect.innerText = elem.innerText;
      e.target.parentElement.classList.remove('open');
      if (e.target.innerText !== 'Сначала новые') {
        filterRightSelect.classList.add('not-default');
      } else {
        filterRightSelect.classList.remove('not-default');
      }
    });
  });


  //toDo закрытие сайдбара при клике вне его элементов
  const packagingSidebarSelectWrapElements = document.querySelectorAll('.main-packaging-sidebar-select-wrap');
  const packagingSidebarBelowElements = document.querySelectorAll('.main-packaging-sidebar-below')
  const sidebar = document.querySelector('.main-packaging-sidebar');
  document.addEventListener('click', (e) => {
    const res = getChildren(sidebar, e.target);
    if (!res) {
      Array.from(packagingSidebarBelowElements).forEach(elem => {
        elem.style.maxHeight = '0';
        elem.style.zIndex = '-1';
        elem.style.border = 'none';
      });

      Array.from(selectPackagingElements).forEach(elem => {
        elem.classList.remove('active');
      });
      Array.from(packagingSidebarSelectWrapElements).forEach(elem => {
        elem.style.background = '#FFF';
      });
    }
  });


  //toDo закрытие фильтров при клике вне
  //левый фильтр
  const filterLeft = document.querySelector('.filter-left-select-wrap');
  const filterLeftBelowElement = document.querySelector('.filter-left-below');
  document.addEventListener('click', (e) => {
    const res = getChildren(filterLeft, e.target);
    if (!res) {
      filterLeftBelowElement.classList.remove('open');
    }
  });

  //правый фильтр
  const filterRight = document.querySelector('.filter-right-select-wrap');
  const filterRightBelowElement = document.querySelector('.filter-right-below');
  document.addEventListener('click', (e) => {
    const res = getChildren(filterRight, e.target);
    if (!res) {
      filterRightBelowElement.classList.remove('open');
    }
  });


  /**
   * функция рекурсивного обхода вложенных в элемент потомков
   * @param {HTMLElement} element - элемент который обходим рекурсивно
   * @param {Node} target - элемент по которому кликнули
   * @returns {boolean} true or false
   */
  function getChildren(element, target) {
    if (element.contains(target)) {
      return true
    } else {
      const childElements = [...element.children];
      if (childElements.length > 0) {
        childElements.map(elem => {
          if (elem.children) {
            getChildren(elem, target);
          }
        });
      }
    }
    return false
  }


  //toDo малые сайдбар и фильтра


  const smallSidebarOverSelect = document.querySelector('.sidebar-over-select');
  const overAllWrap = document.querySelector('.overAllWrap');
  // const wrapSmallSidebarElements = document.querySelectorAll('.sidebar-small-select-wrap');
  const sidebarSmallSelects = document.querySelectorAll('.sidebar-small-select');
  const background = document.querySelector('.background');
  const body = document.body;
  const otherProduct = document.querySelector('.sidebar-small-other');


  if (otherProduct) {
    otherProduct.onclick = () => {
      productTitle.innerText = otherProduct.innerText;
      otherProduct.classList.add('yet');
      smallSidebarOverSelect.classList.remove('open');
      sidebarSmallSelects.forEach(elem => {
        elem.innerText = elem.dataset.name;
        elem.classList.remove('yet');
        elem.parentElement.classList.remove('open');
      });
      background.classList.remove('visible');
      body.classList.remove('no-scroll');
      overAllWrap.classList.remove('open');
    }
  }
  if (smallSidebarOverSelect) {
    smallSidebarOverSelect.addEventListener('click', () => {
      smallSidebarOverSelect.classList.toggle('open');
      background.classList.toggle('visible');
      body.classList.toggle('no-scroll');
      if (smallSidebarOverSelect.classList.contains('open')) {
        overAllWrap.classList.add('open');
      } else {
        overAllWrap.classList.remove('open');
      }
    });
  }

  if (sidebarSmallSelects) {
    sidebarSmallSelects.forEach(selectEl => {
      selectEl.addEventListener('click', (e) => {
        let toChangeElem = e.target;
        if (toChangeElem.classList.contains('open')) {
          toChangeElem.classList.remove('open');
          toChangeElem.nextElementSibling.classList.remove('open');
        } else {
          const selectProducts = e.target.nextElementSibling.children;
          sidebarSmallSelects.forEach(elem => {
            elem.classList.remove('open');
            elem.nextElementSibling.classList.remove('open');
          })
          toChangeElem.classList.add('open');
          toChangeElem.nextElementSibling.classList.add('open');
          Array.from(selectProducts).forEach(prod => {
            prod.addEventListener('click', (ev) => {
              toChangeElem.innerText = ev.target.innerText;
              productTitle.innerText = ev.target.innerText;
              productTitle.style.textAlign = 'left';
              otherProduct.classList.remove('yet');
              ev.target.parentElement.classList.remove('open');
              toChangeElem.classList.remove('open');
              sidebarSmallSelects.forEach(el => {
                el.classList.remove('yet');
              });
              toChangeElem.classList.add('yet');
              smallSidebarOverSelect.classList.remove('open');
              smallSidebarOverSelect.classList.add('selected');
              background.classList.remove('visible');
              body.classList.remove('no-scroll');
              overAllWrap.classList.remove('open');
            });
          });
        }
      });
    });
  }

  //toDo обработка фильтра и сортинга
  const filterIcon = document.querySelector('.icon-filter');
  const sortIcon = document.querySelector('.icon-sort');
  const filterList = document.querySelector('.filter');
  const sortList = document.querySelector('.sort');
  const filterSelects = document.querySelectorAll('.filter-select');
  const sortSelects = document.querySelectorAll('.sort-select');

  filterIcon.onclick = () => {
    filterIcon.classList.remove('selected');
    if (filterIcon.classList.contains('open')) {
      filterIcon.classList.remove('open');
      background.classList.remove('visible');
      body.classList.remove('no-scroll');
      filterList.classList.remove('open');
      let res = Array.from(filterSelects).some(item => {
        return item.classList.contains('selected') && item.hasAttribute('data-name');
      });
      if (!res) {
        filterIcon.classList.add('selected');
      }
    } else {
      filterIcon.classList.add('open');
      background.classList.add('visible');
      body.classList.add('no-scroll');
      filterList.classList.add('open');
      filterSelects.forEach(elem => {
        elem.addEventListener('click', (e) => {
          for (let i = 0; i < filterSelects.length; i++) {
            filterSelects[i].classList.remove('selected');
          }
          e.target.classList.add('selected');
          filterIcon.classList.remove('open');
          background.classList.remove('visible');
          filterList.classList.remove('open');
          e.target.dataset.name === 'default' ? filterIcon.classList.remove('selected') : filterIcon.classList.add('selected');
          body.classList.remove('no-scroll');
        });
      });
    }
  }

  sortIcon.onclick = () => {
    sortIcon.classList.remove('selected');
    if (sortIcon.classList.contains('open')) {
      sortIcon.classList.remove('open');
      background.classList.remove('visible');
      body.classList.remove('no-scroll');
      sortList.classList.remove('open');
      let res = Array.from(sortSelects).some(item => {
        return item.classList.contains('selected') && item.hasAttribute('data-name');
      });
      if (!res) {
        sortIcon.classList.add('selected');
      }
    } else {
      sortIcon.classList.add('open');
      background.classList.add('visible');
      body.classList.add('no-scroll');
      sortList.classList.add('open');
      sortSelects.forEach(elem => {
        elem.addEventListener('click', (e) => {
          for (let i = 0; i < sortSelects.length; i++) {
            sortSelects[i].classList.remove('selected');
          }
          e.target.classList.add('selected');
          sortIcon.classList.remove('open');
          background.classList.remove('visible');
          sortList.classList.remove('open');
          e.target.dataset.name === 'default' ? sortIcon.classList.remove('selected') : sortIcon.classList.add('selected');
          body.classList.remove('no-scroll');
        });
      });
    }
  }

})();

