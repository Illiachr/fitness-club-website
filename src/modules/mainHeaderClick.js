export default () => {
    const headerMain = document.querySelector('.header-main');
    const clubSelectList = document.querySelector('.clubs-list ul');
    const popUpMenu = document.querySelector('.popup-menu');
    let click = 0;

    const handlHeaderClick = e => {
        const { target } = e;

        if (target.closest('.clubs-list')) {
            if (click < 1) {
                clubSelectList.style.display = 'block';
                click++;
            } else {
                clubSelectList.style.display = 'none';
                click--;
            }
        }

        if (target.closest('.menu-button')) {
            popUpMenu.style.display = 'flex';
        }

        if (target.closest('.close-menu-btn') || target.closest('.popup-menu li')) {
            popUpMenu.style.display = 'none';
        }
    };

    headerMain.addEventListener('click', handlHeaderClick);
};
