(() => {
    const orderBtn = document.querySelector('.order-button');
    const questionForm = document.querySelector('.question-form');
    const questionFormClose = document.querySelector('.question-form-close');
    const sendQuestionBtn = document.querySelector('.question-form-button');
    const afterQuestionPopup = document.querySelector('.question-popup');
    const afterQuestionPopupCloseElem = document.querySelector('.question-popup-close');

    orderBtn.addEventListener('click', (e) => {
        e.preventDefault();
        questionForm.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    questionFormClose.addEventListener('click', () => {
        questionForm.classList.remove('show');
        document.body.style.overflow = 'unset';
    });

    sendQuestionBtn.addEventListener('click', (e) => {
        e.preventDefault();
        questionForm.classList.remove('show');
        afterQuestionPopup.classList.add('show');
    });

    afterQuestionPopupCloseElem.addEventListener('click', () => {
        afterQuestionPopup.classList.remove('show');
        document.body.style.overflow = 'unset';
        window.scrollTo(0, 0);
    });
})();
