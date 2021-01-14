import scrollUp from './scrollUp';

export default () => {
    const toTop = document.getElementById('totop');
    const headerMainCenter = document.querySelector('.header-main').getBoundingClientRect().bottom / 2;
    const topMenu = document.querySelector('.top-menu');
    const topMenuHeight = topMenu.getBoundingClientRect().height;
    const topMenuBottom = topMenu.getBoundingClientRect().bottom;
    const mainSlider = document.querySelector('.main-slider');
    const screenSize = window.screen.width;

    const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

    toTop.style.display = 'none';

    const handlWindowScroll = () => {
        if (getTop() > headerMainCenter) {
            toTop.style.display = 'block';
            scrollUp(toTop);
        } else { toTop.style.display = 'none'; }

        if (screenSize < 768) {
            if (getTop() > topMenuBottom) {
                topMenu.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                `;
                mainSlider.style.cssText = `margin-top: ${topMenuHeight}px`;
            } else {
                topMenu.style.cssText = '';
                mainSlider.style.cssText = '';
            }
        }
    };

    window.addEventListener('scroll', handlWindowScroll);
}; // end
