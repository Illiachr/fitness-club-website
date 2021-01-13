import popUpClose from './popUpEvent';

export default () => {
    const headerMain = document.querySelector('.header-main');
    const clubSelectList = document.querySelector('.clubs-list ul');
    const popUpMenu = document.querySelector('.popup-menu');
    let click = 0;

    const handlHeaderClick = e => {
        const { target } = e;
        let targetElem = null;

        if (target.closest('.clubs-list')) {
            if (click < 1) {
                clubSelectList.style.display = 'block';
                click += 1;
            } else {
                clubSelectList.style.display = 'none';
                click -= 1;
            }
        }

        if (target.closest('.menu-button')) {
            popUpMenu.style.display = 'flex';
        }

        if (target.closest('.close-menu-btn') || target.closest('.popup-menu li')) {
            popUpMenu.style.display = 'none';
        }

        targetElem = target.closest('.free-visit');
        if (targetElem) { popUpClose(targetElem); }

        targetElem = target.closest('.call');
        if (targetElem) { popUpClose(targetElem); }
    };

    headerMain.addEventListener('click', handlHeaderClick);
};
