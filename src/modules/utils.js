export const addElem = (elemAppend, strTag, strClass = '') => {
    const elem = document.createElement(strTag);
    if (strClass.trim() !== '') { elem.className = strClass; }
    elemAppend.append(elem);
    return elem;
};

export const addArrowButton = (appendElem, handler, btnClass, iconClass) => {
    const btn = handler(appendElem, 'a', btnClass);
    btn.setAttribute('href', '#!');
    handler(btn, 'span', iconClass);
};

export const calculate = (sliderElem, slides) => {
    const sliderWidth = () => sliderElem.getBoundingClientRect().width;
    const sliderPadding = () => parseInt(getComputedStyle(sliderElem).padding.split(' ')[1], 10) * 2;
    const slideMargin = () => parseInt(getComputedStyle(slides[0]).margin.split(' ')[1], 10) * 2;
    const slideWidth = () => parseInt(getComputedStyle(slides[0]).minWidth, 10);
    const slidesToShow = () => Math.floor((sliderWidth() - sliderPadding()) / slideWidth());
    const step = () => slideWidth() + slideMargin();
    const maxPos = () => (slides.length - slidesToShow()) * step();
    const wrapWidth = () => slidesToShow() * step();

    return {
        step: step(),
        maxPos: maxPos(),
        wrapWidth: wrapWidth(),
    };
}; // end calculate
