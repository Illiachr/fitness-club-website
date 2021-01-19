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
    const amount = slides.length;
    const sliderWidth = sliderElem.getBoundingClientRect().width;
    const sliderPadding = parseInt(getComputedStyle(sliderElem).padding.split(' ')[1], 10) * 2;
    const slideMargin = parseInt(getComputedStyle(slides[0]).margin.split(' ')[1], 10) * 2;
    const slideWidth = parseInt(getComputedStyle(slides[0]).minWidth, 10);
    const slidesToShow = Math.floor((sliderWidth - sliderPadding) / slideWidth);
    const step = slideWidth + slideMargin;
    const maxPos = amount * 2 * step;
    const wrapWidth = slidesToShow * step;
    const allowShift = true;

    return {
        slidesToShow,
        step,
        maxPos,
        wrapWidth,
        amount,
        allowShift,
    };
}; // end calculate

export const cloneElems = (elemNode, originalElems) => {
    const slidesClone = elemNode.cloneNode(true);

    [...slidesClone.children].forEach(slideClone => {
        originalElems[0].before(slideClone.cloneNode(true));
    });

    [...slidesClone.children].reverse().forEach(slideClone => {
        originalElems[originalElems.length - 1].after(slideClone);
    });
}; // end cloneElems
