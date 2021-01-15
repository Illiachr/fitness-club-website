import maskPhone from './maskPhone';
import calc from './calc';
import popUp from './popUp';

export default selector => {
    const form = document.querySelector(selector);
    if (!form) { return; }

    const phonePattern = /^((\+?7|8)[ -] ?)?((\(\d{3}\))|(\d{3}))?([ -])?(\d{3}[- ]?\d{2}[- ]?\d{2})$/;
    // const errTitle = 'Ошибка';
    // const errMsg = 'Что-то пошло не так...';
    const statusMsg = document.createElement('span');
    const btnSubmit = form.querySelector('button[type=submit]');
    const msgText = {
        errTitle: 'Ошибка',
        errMsg: 'Что-то пошло не так...',
        load: 'Идет отправка...',
        club: 'Выберите клуб',
        phone: 'Введите полный номер телефона',
        confirm: 'Подтвердите согласие',
    };

    maskPhone(`${selector} input[name=phone]`);
    if (selector === '.card_order-calc') { calc(selector); }

    const postData = data => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }); // end postData

    statusMsg.className = 'status-msg active';
    btnSubmit.after(statusMsg);

    if (form.classList.contains('card_order-calc') || form.classList.contains('card_order')) {
        statusMsg.style.color = '#000000';
    }

    form.addEventListener('input', e => {
        const { target } = e;
        if (target.matches('input[name=name]')) {
            target.value = target.value.replace(/[^аА-яёЯЁ ]/, '');
        }

        if (target.matches('input[name=promocode]')) {
            target.value = target.value.replace(/[^А-ЯЁ ][^\d]/, '');
        }

        [...form.elements].forEach(elem => {
            if (elem.name === 'club-name') {
                if (!elem.checked) {
                    statusMsg.classList.add('active');
                    statusMsg.textContent = msgText.club;
                }
            }

            if (elem.matches('.personal-data input[type=checkbox]')) {
                if (!elem.checked) {
                    statusMsg.classList.add('active');
                    statusMsg.textContent = msgText.confirm;
                }
            }
        });
    }); // end form listener input

    form.addEventListener('change', () => {
        [...form.elements].forEach(elem => {
            if (elem.name === 'club-name') {
                if (elem.checked) { statusMsg.textContent = ''; }
            }

            if (elem.matches('.personal-data input[type=checkbox]')) {
                if (elem.checked) { statusMsg.textContent = ''; }
            }
        });
    }); // end form listener change

    form.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(form);
        const body = {};

        let checked = 0;
        [...form.elements].forEach(elem => {
            if (elem.name === 'club-name') {
                if (elem.checked) {
                    checked += 1;
                } else { statusMsg.textContent = msgText.club; }
            }

            if (elem.matches('.personal-data input[type=checkbox]')) {
                if (elem.checked) {
                    checked += 1;
                } else { statusMsg.textContent = msgText.confirm; }
            }
        });

        if (!checked) {
            statusMsg.classList.add('active');
            return;
        }

        const phoneValue = form.querySelector('input[name=phone]').value;
        if (!phonePattern.test(phoneValue)) {
            statusMsg.classList.add('active');
            statusMsg.textContent = msgText.phone;
            return;
        }

        statusMsg.textContent = 'Идет отправка...';
        statusMsg.classList.add('active');
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
                statusMsg.classList.remove('active');

                if (form.closest('.popup')) {
                    form.closest('.popup').style.display = 'none';
                }

                setTimeout(() => popUp.close(), 6000);
            });
    });
};
