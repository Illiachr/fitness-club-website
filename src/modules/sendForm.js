import popUp from './popUp';

export default formID => {
    const errTitle = 'Ошибка';
    const errMsg = 'Что-то пошло не так...';
    const form = document.getElementById(formID);
    const statusMsg = document.createElement('div');
    const persDataConfirm = form.querySelector('.personal-data input[type=checkbox]');

    const postData = data => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }); // end postData

    statusMsg.classList.add('status-msg');

    form.addEventListener('input', e => {
        const trg = e.target;
        // form.elements.user_email.setCustomValidity('Заполните, пожалуйста это поле!');
        if (trg.matches('input[name=name]')) {
            trg.value = trg.value.replace(/[^аА-яёЯЁ ]/, '');
        }

        if (trg.matches('input[name=phone]')) {
            trg.value = trg.value.replace(/[^+\d]/, '');
        }
    }); // end form listener input

    form.addEventListener('submit', e => {
        e.preventDefault();
        if (!persDataConfirm.checked) { statusMsg.textContent = 'Подтвердите согласие'; }
        const formData = new FormData(form);
        const body = {};
        // form.elements.user_email.setCustomValidity('');
        // form.appendChild(loader);
        form.appendChild(statusMsg);
        statusMsg.textContent = 'Идет отправка...';
        statusMsg.classList.add('active');
        formData.forEach((val, key) => {
            body[key] = val;
        });

        postData(body)
            .then(response => {
                statusMsg.classList.remove('active');
                e.target.closest('.popup').style.display = 'none';
                if (response.status !== 200) { throw new Error('status network not 200'); }
            })
            .catch(error => {
                popUp('#thanks', errTitle, errMsg);
                console.warn(error);
            })
            .finally(() => {
                form.reset();
                console.log(form.closest('.popup'));

                setTimeout(() => {
                    popUp.close();
                    // statusMsg.classList.remove('active');
                    // if (e.target.closest('.popup')) { e.target.closest('.popup').style.display = 'none'; }
                }, 2000);
            });
    });
};
