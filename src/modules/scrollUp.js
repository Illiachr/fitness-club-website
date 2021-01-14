export default elem => {
    const handlElemClick = e => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        elem.removeEventListener('click', handlElemClick);
    };

    elem.addEventListener('click', handlElemClick);
};
