"use strict";

const prices = [200, 550, 4000, 23, 58, 5000, 485, 711];

for (let price of prices) {
    const itemIndex = prices.indexOf(price) + 1;
    $('#pricesContainer').append(`<input type='checkBox' onchange='onChoiceChanged()' value='${price}' id='item${itemIndex}'/>` +
                                 `<label for='item${itemIndex}'>Товар ${itemIndex}, цена: ${price}</div><br/>`);
}

const onChoiceChanged = () => {
    let selectedItems = [];
    $.each($("#pricesContainer input[type='checkBox']:checked"), function() {
        selectedItems.push(Number($(this).val()));
    });
    calculateSum(selectedItems);
}

const calculateSum = (items) => {   
    let sum = 0;
    for (let item of items) {
        sum += item;
    }
    const sumText = sum > 10000 ? `Бонус 5% - ${Math.floor(sum * 0.05)}, сумма с учетом бонуса - ${sum - Math.floor(sum * 0.05)}` : `Сумма: ${sum}`;
    $('#summary').html(sumText);
}