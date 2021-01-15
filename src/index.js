import htmlClick from './modules/htmlClick';
import scrollEvent from './modules/scrollEvent';
import promoSlider from './modules/promoSlider';
import sendForm from './modules/sendForm';

htmlClick();
scrollEvent();
promoSlider();
sendForm('#form1');
sendForm('#form2');
sendForm('#banner-form');
sendForm('.card_order-calc');
sendForm('.card_order');
sendForm('#footer_form');
