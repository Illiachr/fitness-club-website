/* eslint-disable no-param-reassign */
import { addElem, addArrowButton } from './utils';

export default (sliderSelector = '.services-slider', slidesToShow = 5) => {
    const servicesSlider = document.querySelector(sliderSelector);
    const slideAll = document.querySelectorAll(`${sliderSelector} .slide`);
    const sliderWidth = servicesSlider.getBoundingClientRect().width;
    const sliderPadding = parseInt(getComputedStyle(servicesSlider).padding.split(' ')[1], 10) * 2;
    const slideMargin = parseInt(getComputedStyle(slideAll[0]).margin.split(' ')[1], 10) * 2;
    const slideWidth = Math.floor((sliderWidth - sliderPadding) / slidesToShow) - slideMargin;
    const step = slideWidth + slideMargin;
    const maxPos = slidesToShow * step;

    let position = 0;

    const addButtons = () => {
        addArrowButton(servicesSlider, addElem, 'slider-arrow prev', 'fa fa-arrow-left');
        addArrowButton(servicesSlider, addElem, 'slider-arrow next', 'fa fa-arrow-right');
    };

    const prevSlide = () => {
        if (position > 0) {
            position -= step;

            slideAll.forEach(slide => {
                slide.style.transform = `translateX(-${position}px)`;
            });
        }
    }; // end prevSlide

    const nextSlide = () => {
        if (position < maxPos) {
            position += step;

            slideAll.forEach(slide => {
                slide.style.transform = `translateX(-${position}px)`;
            });
        }
    }; // end nextSlide

    const handleClickSlider = e => {
        const { target } = e;
        if (target.closest('.prev')) { prevSlide(); }
        if (target.closest('.next')) { nextSlide(); }
    }; // end handleClickSlider

    slideAll.forEach(slide => {
        slide.style.minWidth = `${slideWidth}px`;
    });

    addButtons();

    servicesSlider.addEventListener('click', handleClickSlider);
};
