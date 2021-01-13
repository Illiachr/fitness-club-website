export default (popUpselector, closeIconSelector = '.form-close',
    closeBtnSelector = '.close-btn', contentSelector = '.form-content') => {
    const popUp = document.querySelector(popUpselector);

    const handleClickPopUp = e => {
        const { target } = e;
        if (target.closest(closeIconSelector) ||
            target.closest(closeBtnSelector) ||
            !target.closest(contentSelector)) {
            popUp.style.display = 'none';
            popUp.removeEventListener('click', handleClickPopUp);
        }
    }; // end handleClickPopUp
    popUp.style.display = 'block';
    popUp.addEventListener('click', handleClickPopUp);
}; // end export default
