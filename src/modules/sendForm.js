/* eslint-disable no-param-reassign */
import maskPhone from './maskPhone';
import calc from './calc';
import popUp from './popUp';

export default (selector, afterSubmitBtn = true, doConfirmCheck = true, doClubCheck = false) => {
    const form = document.querySelector(selector);
    if (!form) { return; }

    const phonePattern = /^((\+?7|8)[ -] ?)?((\(\d{3}\))|(\d{3}))?([ -])?(\d{3}[- ]?\d{2}[- ]?\d{2})$/;
    const statusMsg = document.createElement('span');
    const btnSubmit = form.querySelector('button[type=submit]');
    const msgText = {
        errTitle: 'Ошибка',
        errMsg: 'Что-то пошло не так...',
        load: 'Идет отправка...',
        club: 'Выберите клуб',
        phone: '+7(XXX)-XXX-XX-XX',
        confirm: 'Подтвердите согласие',
    };
    const check = {
        isConfirm: false,
        isClub: false,
        isPhone: false,
    };

    const fieldsCheck = e => {
        [...form.elements].forEach(elem => {
            if (e.type === 'input') {
                const { target } = e;
                if (target === elem && elem.name === 'name') {
                    target.value = target.value.replace(/[^аА-яёЯЁ ]/, '');
                }

                if (target === elem && elem.name === 'promocode') {
                    target.value = target.value.replace(/[^А-ЯЁ ][^\d]/, '');
                }
            }
            if (doClubCheck) {
                if (elem.name === 'club-name') {
                    if (elem.checked) {
                        check.isClub = true;
                    } else {
                        statusMsg.textContent = msgText.club;
                        elem.closest('.club').style.borderBottom = '1px solid red';
                    }
                    if (check.isClub) {
                        statusMsg.textContent = '';
                        elem.closest('.club').style.cssText = '';
                    }
                }
            } else { check.isClub = true; }

            if (doConfirmCheck) {
                if (elem.matches('.personal-data input[type=checkbox]')) {
                    if (elem.checked) {
                        check.isConfirm = true;
                        statusMsg.textContent = '';
                        elem.nextElementSibling.style.borderBottom = '';
                    } else {
                        check.isConfirm = false;
                        statusMsg.textContent = msgText.confirm;
                        elem.nextElementSibling.style.borderBottom = '1px solid red';
                    }
                }
            } else { check.isConfirm = true; }

            if (elem.name === 'phone') {
                if (phonePattern.test(elem.value)) {
                    check.isPhone = true;
                    elem.setCustomValidity('');
                } else {
                    check.isPhone = false;
                    elem.setCustomValidity(msgText.phone);
                }
            }
        });
    }; // end fieldsCheck

    const postData = data => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }); // end postData

    const handlSubmit = e => {
        e.preventDefault();
        statusMsg.classList.add('active');

        const formData = new FormData(form);
        const body = {};

        fieldsCheck(e);

        if (!check.isClub) { return; }
        if (!check.isConfirm || !check.isPhone) { return; }

        statusMsg.textContent = msgText.load;
        formData.forEach((val, key) => {
            body[key] = val;
        });

        postData(body)
            .then(response => {
                statusMsg.classList.remove('active');
                if (response.status !== 200) { throw new Error('status network not 200'); }
                popUp('#thanks');
            })
            .catch(error => {
                popUp('#thanks', msgText.errTitle, msgText.errMsg);
                console.warn(error);
            })
            .finally(() => {
                form.reset();
                Object.keys(check).forEach(key => { check[key] = false; });
                statusMsg.classList.remove('active');

                if (form.closest('.popup')) {
                    form.closest('.popup').style.display = 'none';
                }

                setTimeout(() => popUp.close(), 6000);
            });
    }; // end submitHandler

    maskPhone(`${selector} input[name=phone]`);
    if (form.classList.contains('card_order-calc')) { calc(selector); }

    statusMsg.className = 'status-msg active';
    if (afterSubmitBtn) {
        btnSubmit.after(statusMsg);
    } else { form.append(statusMsg); }

    form.addEventListener('input', fieldsCheck);
    form.addEventListener('submit', handlSubmit);
};
