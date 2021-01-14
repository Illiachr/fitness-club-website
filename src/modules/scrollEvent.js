import scrollUp from './scrollUp';

export default () => {
    const offset = document.querySelector('.header-main').getBoundingClientRect().bottom / 2;
    const toTop = document.getElementById('totop');
    const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

    toTop.style.display = 'none';

    const handlWindowScroll = () => {
        console.log(offset);
        if (getTop() > offset) {
            toTop.style.display = 'block';
            scrollUp(toTop);
        } else { toTop.style.display = 'none'; }
    };

    window.addEventListener('scroll', handlWindowScroll);
}; // end
