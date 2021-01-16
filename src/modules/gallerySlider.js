const addElem = (elemAppend, strTag, strClass = '') => {
    const elem = document.createElement(strTag);
    if (strClass.trim() !== '') { elem.className = strClass; }
    elemAppend.append(elem);
    return elem;
};

export default () => {
    const gallerySlider = document.querySelector('.gallery-slider');
    const slideAll = document.querySelectorAll('.gallery-slider .slide');

    const addDots = dotListClass => {
        const dotList = addElem(gallerySlider, 'ul', dotListClass); // создаем список
        for (let i = 0; i < slideAll.length - 1; i += 1) { // добавляем точки
            if (i === 0) {
                const dotLi = addElem(dotList, 'li', 'slick-active');
                addElem(dotLi, 'button');
            }
            const dotLi = addElem(dotList, 'li');
            addElem(dotLi, 'button');
        }
        const elemNode = dotList.children;
        return elemNode;
    };

    const addArrowButton = (btnClass, iconClass) => {
        const btn = addElem(gallerySlider, 'a', btnClass);
        addElem(btn, 'span', iconClass);
    };

    const addButtons = () => {
        addArrowButton('slider-arrow prev', 'fa fa-arrow-left');
        addArrowButton('slider-arrow next', 'fa fa-arrow-right');
    };

    const dots = addDots('slider-dots');
    addButtons();

    const rmClass = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const addClass = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    let currentSlide = 0;
    let interval = 0;

    const autoSwipe = () => {
        rmClass(slideAll, currentSlide, 'active');
        rmClass(dots, currentSlide, 'slick-active');

        currentSlide += 1;

        if (currentSlide >= slideAll.length) { currentSlide = 0; }

        addClass(slideAll, currentSlide, 'active');
        addClass(dots, currentSlide, 'slick-active');
    };

    const startSwipe = (time = 2000) => {
        interval = setInterval(autoSwipe, time);
    };

    const stopSwipe = () => {
        clearInterval(interval);
    };

    const handleSliderClick = e => {
        e.preventDefault();
        const { target } = e;

        if (!target.closest('.slider-arrow') && !target.closest('.slider-dots')) { return; }

        rmClass(slideAll, currentSlide, 'active');
        rmClass(dots, currentSlide, 'slick-active');

        if (target.closest('.next')) {
            currentSlide += 1;
        } else if (target.closest('.prev')) {
            currentSlide -= 1;
        } else if (target.closest('.slider-dots li')) {
            const targetElem = target.closest('.slider-dots li');
            [...dots].forEach((item, index) => {
                if (item === targetElem) { currentSlide = index; }
            });
        }

        if (currentSlide >= slideAll.length) { currentSlide = 0; }
        if (currentSlide < 0) { currentSlide = slideAll.length - 1; }

        addClass(slideAll, currentSlide, 'active');
        addClass(dots, currentSlide, 'slick-active');
    }; // end handleSliderClick

    const handleMouseEvent = (e, handlSwipe) => {
        const { target } = e;
        if (target.closest('.slider-arrow') || target.closest('.slider-dots li')) { handlSwipe(); }
    };
    gallerySlider.addEventListener('click', handleSliderClick);
    gallerySlider.addEventListener('mouseover', e => handleMouseEvent(e, stopSwipe));
    gallerySlider.addEventListener('mouseout', e => handleMouseEvent(e, startSwipe));

    startSwipe();
}; // end slider
