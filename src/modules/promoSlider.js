export default (delay = 6000, slidesSelector = '.main-slider .slide') => {
    const slides = document.querySelectorAll(slidesSelector);
    let currSlide = 0;

    const slideShow = () => {
        slides[currSlide].style.display = 'none';
        currSlide += 1;
        if (currSlide >= slides.length) { currSlide = 0; }
        slides[currSlide].style.display = 'inline-block';
    };

    setInterval(slideShow, delay);
}; // end
