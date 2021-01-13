import popUp from './popUp';

const clubSelectList = document.querySelector('.clubs-list ul');
const popUpMenu = document.querySelector('.popup-menu');
let click = 0;

export default () => {
    const handlHTMLclick = e => {
        const { target } = e;
        let targetElem = null;

        targetElem = target.closest('.clubs-list');
        if (targetElem) {
            if (click < 1) {
                clubSelectList.style.display = 'block';
                click += 1;
            } else if (!target.closest('.clubs-list ul')) {
                clubSelectList.style.display = 'none';
                click -= 1;
            }
        } // end show clubs list

        if (!targetElem) {
            if (clubSelectList.style.display === 'block') {
                clubSelectList.style.display = 'none';
                click = 0;
            }
        } // end close clubs list

        if (target.closest('.menu-button')) {
            popUpMenu.style.display = 'flex';
        }

        if (target.closest('.close-menu-btn') || target.closest('.popup-menu li')) {
            popUpMenu.style.display = 'none';
        }

        targetElem = target.closest('.free-visit');
        if (targetElem) {
            const selector = targetElem.querySelector('a').dataset.popup;
            popUp(selector);
        }

        targetElem = target.closest('.callback-btn');
        if (targetElem) {
            popUp(targetElem.dataset.popup);
        }

        targetElem = target.closest('.fixed-gift');
        if (targetElem) {
            targetElem.style.display = 'none';
            popUp('#gift');
        }
    };

    document.querySelector('html').addEventListener('click', handlHTMLclick);
};
