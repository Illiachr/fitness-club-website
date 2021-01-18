/* eslint-disable no-param-reassign */
import { addElem, addArrowButton, calculate } from './utils';

export default (sliderSelector = '.services-slider') => {
    const servicesSlider = document.querySelector(sliderSelector);
    const slideAll = document.querySelectorAll(`${sliderSelector} .slide`);
    const slideWrap = servicesSlider.querySelector(`${sliderSelector}--wrap`);

    let position = 0;
    let options = calculate(servicesSlider, slideAll);
    slideWrap.style.maxWidth = `${options.wrapWidth}px`;

    const addButtons = () => {
        addArrowButton(servicesSlider, addElem, 'slider-arrow prev', 'fa fa-arrow-left');
        addArrowButton(servicesSlider, addElem, 'slider-arrow next', 'fa fa-arrow-right');
    };

    const moveSlide = () => {
        slideAll.forEach(slide => {
            slide.style.transform = `translateX(-${position}px)`;
        });
    };

    const prevSlide = () => {
        if (position > 0) {
            position -= options.step;
            moveSlide();
        }
    }; // end prevSlide

    const nextSlide = () => {
        if (position < options.maxPos) {
            position += options.step;
            moveSlide();
        }
    }; // end nextSlide

    const handleWinResize = () => {
        position = 0;
        options = calculate(servicesSlider, slideAll);
        slideWrap.style.maxWidth = `${options.wrapWidth}px`;
        moveSlide();
    }; // end handleWinResize

    const handleClickSlider = e => {
        const { target } = e;
        if (target.closest('.prev')) { prevSlide(); }
        if (target.closest('.next')) { nextSlide(); }
    }; // end handleClickSlider

    addButtons();

    window.addEventListener('resize', handleWinResize);
    servicesSlider.addEventListener('click', handleClickSlider);
};
