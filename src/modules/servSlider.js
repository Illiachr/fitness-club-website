/* eslint-disable no-param-reassign */
import {
    addElem,
    addArrowButton,
    calculate,
    cloneElems,
} from './utils';

export default (sliderSelector = '.services-slider') => {
    const servicesSlider = document.querySelector(sliderSelector);
    const slideAll = document.querySelectorAll(`${sliderSelector} .slide`);
    const slideWrap = servicesSlider.querySelector(`${sliderSelector}--wrap`);
    const slides = servicesSlider.querySelector('#slides');

    let options = calculate(servicesSlider, slideAll);
    let position = -options.step * options.amount;
    cloneElems(slides, slideAll);

    slides.style.transform = `translateX(${position}px)`;
    slideWrap.style.maxWidth = `${options.wrapWidth}px`;

    const addButtons = () => {
        addArrowButton(servicesSlider, addElem, 'slider-arrow prev', 'fa fa-arrow-left');
        addArrowButton(servicesSlider, addElem, 'slider-arrow next', 'fa fa-arrow-right');
    };

    const moveSlide = () => {
        slides.style.transform = `translateX(${position}px)`;
    };

    const shiftSlide = (next = false) => {
        slides.classList.add('shifting');

        if (options.allowShift) {
            if (next) {
                position += options.step;
            } else { position -= options.step; }

            moveSlide();
        }
    }; // end shiftSlide

    const handleWinResize = () => {
        options = calculate(servicesSlider, slideAll);
        position = -options.step * options.amount;
        slideWrap.style.maxWidth = `${options.wrapWidth}px`;
        moveSlide();
    }; // end handleWinResize

    const handleClickSlider = e => {
        const { target } = e;
        if (target.closest('.prev')) { shiftSlide(true); }
        if (target.closest('.next')) { shiftSlide(); }
    }; // end handleClickSlider

    const checkIndex = () => {
        if (Math.abs(position) === options.maxPos || position === 0) {
            slides.classList.remove('shifting');
            position = -options.step * options.amount;
            slides.style.transform = `translateX(${position}px)`;
            moveSlide();
        }

        options.allowShift = true;
    }; // end checkIndex

    addButtons();

    window.addEventListener('resize', handleWinResize);
    slides.addEventListener('transitionend', checkIndex);
    servicesSlider.addEventListener('click', handleClickSlider);
};
