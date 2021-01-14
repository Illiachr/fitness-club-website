export default () => {
    const cardOrder = document.getElementById('card_order');
    const priceTotal = document.getElementById('price-total');
    const price = {
        mozaika: {
            1: 1999,
            6: 9900,
            9: 13900,
            12: 19900,
        },
        schelkovo: {
            1: 2999,
            6: 14990,
            9: 21990,
            12: 24990,
        },
        discount: 0,
    };

    const filterElems = elem => elem.checked ||
                                elem.matches('.price-message input');

    const caclPrice = (priceClient, discount = 0) => {
        priceTotal.textContent = priceClient - Math.floor(priceClient * (discount / 100));
    };

    const handleCardOrder = () => {
        const checkedValues = [...cardOrder.elements].filter(filterElems);

        if (checkedValues.length > 1) {
            const club = checkedValues[1].value;
            if (checkedValues[2].value.trim() !== '' && checkedValues[2].value.trim() === 'ТЕЛО2020') {
                price.discount = 30;
            } else {
                price.discount = 0;
            }

            Object.keys(price[club]).forEach(period => {
                if (period === checkedValues[0].value) {
                    caclPrice(price[club][period], price.discount);
                }
            });
        }
        console.log(price);
    }; // end handleCardOrder

    cardOrder.addEventListener('change', handleCardOrder);
};
