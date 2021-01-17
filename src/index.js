import htmlClick from './modules/htmlClick';
import scrollEvent from './modules/scrollEvent';
import promoSlider from './modules/promoSlider';
import gallerySlider from './modules/gallerySlider';
import servSlider from './modules/servSlider';
import sendForm from './modules/sendForm';

htmlClick();
scrollEvent();
promoSlider();
servSlider();
gallerySlider();
sendForm('#form1', false);
sendForm('#form2', false);
sendForm('#banner-form', false);
sendForm('.card_order-calc');
sendForm('.card_order');
sendForm('#footer_form', true, false, true);
