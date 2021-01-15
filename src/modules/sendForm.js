import maskPhone from './maskPhone';
import popUp from './popUp';

export default formID => {
    const errTitle = 'Ошибка';
    const errMsg = 'Что-то пошло не так...';
    const form = document.getElementById(formID);
    const statusMsg = document.createElement('div');
    const persDataConfirm = form.querySelector('.personal-data input[type=checkbox]');

    if (!form) { return; }

    maskPhone(`#${formID} input[name=phone]`);

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
        if (trg.matches('input[name=name]')) {
            trg.value = trg.value.replace(/[^аА-яёЯЁ ]/, '');
        }

        if (!persDataConfirm.checked) {
            statusMsg.classList.add('active');
            statusMsg.textContent = 'Подтвердите согласие';
        }
    }); // end form listener input

    form.addEventListener('change', () => {
        if (persDataConfirm.checked) {
            statusMsg.classList.remove('active');
            statusMsg.textContent = '';
        }
    }); // end form listener change

    form.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(form);
        const body = {};

        form.appendChild(statusMsg);

        if (!persDataConfirm.checked) {
            statusMsg.classList.add('active');
            statusMsg.textContent = 'Подтвердите согласие';
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
                popUp('#thanks', errTitle, errMsg);
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
