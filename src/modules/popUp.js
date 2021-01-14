const popUpInit = (popUpselector, title = '', text = '') => {
    const popUp = document.querySelector(popUpselector);
    const popUpForm = popUp.querySelector('form');
    const popUpTitle = popUp.querySelector('h4');
    const popUpText = popUp.querySelector('p');

    if (title !== '') { popUpTitle.textContent = title; }
    if (text !== '') { popUpText.textContent = text; }

    popUpInit.close = handler => {
        popUp.style.display = 'none';
        if (popUpForm) { popUpForm.reset(); }
        popUp.removeEventListener('click', handler);
    };
    const handleClickPopUp = e => {
        const { target } = e;
        if (target.closest('.form-close') ||
            target.closest('.close-btn') ||
            !target.closest('.form-content')) {
            popUpInit.close(handleClickPopUp);
        }
    }; // end handleClickPopUp
    popUp.style.display = 'block';
    popUp.addEventListener('click', handleClickPopUp);
}; // end export default

export default popUpInit;
