export default (elem, closeSelector = '.form-close', contentSelector = '.form-content') => {
    const selector = elem.querySelector('button') ?
        elem.querySelector('button').dataset.popup :
        elem.querySelector('a').dataset.popup;
    const popUp = document.querySelector(selector);

    const handleClickPopUp = e => {
        const { target } = e;
        console.log(target);
        if (target.closest(closeSelector) || !target.closest(contentSelector)) {
            popUp.style.display = 'none';
            popUp.removeEventListener('click', handleClickPopUp);
        }
    }; // end handleClickPopUp
    popUp.style.display = 'block';
    popUp.addEventListener('click', handleClickPopUp);
}; // end export default
