import scrollUp from './scrollUp';

export default () => {
    const toTop = document.getElementById('totop');
    const headerMainCenter = document.querySelector('.header-main').getBoundingClientRect().bottom / 2;
    const topMenu = document.querySelector('.top-menu');
    const topMenuHeight = topMenu.getBoundingClientRect().height;
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
            if (getTop() >= topMenu.getBoundingClientRect().bottom) {
                topMenu.classList.add('fixed-header');
                mainSlider.style.cssText = `margin-top: ${topMenuHeight}px`;
            } else {
                topMenu.classList.remove('fixed-header');
                mainSlider.removeAttribute('style');
            }
        }
    };

    window.addEventListener('scroll', handlWindowScroll);
}; // end
