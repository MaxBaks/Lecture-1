
const prices = [200, 550, 4000, 23, 58, 5000, 485, 711];

const calculateSum = (items) => {   
    let sum = 0;
    for (let item of items) {
        sum += item;
    }
    const sumText = sum > 10000 ? `Бонус 5% - ${Math.floor(sum * 0.05)}, сумма с учетом бонуса - ${sum - Math.floor(sum * 0.05)}` : `Сумма: ${sum}`;
    return sumText;
}

for (let price of prices) {
    const itemIndex = prices.indexOf(price);
    const selectedPrices = prices.slice(0, itemIndex + 1);
    console.log(calculateSum(selectedPrices));
}

