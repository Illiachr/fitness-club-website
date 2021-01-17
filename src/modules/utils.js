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
