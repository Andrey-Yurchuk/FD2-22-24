/****************************************************************************************************
У вас есть массив объектов, представляющих покупки, сделанные в течение месяца.
Каждый объект содержит информацию о дате покупки, категории (например, "Еда", "Одежда","Развлечения")
и сумме покупки. Ваша задача — использовать reduce для выполнения следующих операций:
1) Подсчитать общую сумму всех покупок.
2) Подсчитать сумму покупок по каждой категории.
3) Разбить платежи по месяцам
*****************************************************************************************************/

"use strict";

const purchases = [
    { date: 'Feb', category: 'Food', amount: 50 },
    { date: 'Feb', category: 'Clothing', amount: 100 },
    { date: 'Feb', category: 'Entertainment', amount: 75 },
    { date: 'Mar', category: 'Food', amount: 25 },
    { date: 'Mar', category: 'Clothing', amount: 200 },
    { date: 'Mar', category: 'Entertainment', amount: 50 },
    { date: 'Mar', category: 'Food', amount: 100 },
    { date: 'Mar', category: 'Clothing', amount: 150 },
    { date: 'Apr', category: 'Entertainment', amount: 100 },
    { date: 'Apr', category: 'Food', amount: 100 },
    { date: 'Apr', category: 'Clothing', amount: 100 },
    { date: 'Apr', category: 'Clothing', amount: 100 },
    { date: 'Jun', category: 'Food', amount: 100 },
    { date: 'Jun', category: 'Entertainment', amount: 100 },
    { date: 'Jun', category: 'Food', amount: 100 },
    { date: 'Jun', category: 'Entertainment', amount: 100 },
    { date: 'Jul', category: 'Clothing', amount: 100 },
    { date: 'Jul', category: 'Entertainment', amount: 100 },
    { date: 'Jul', category: 'Food', amount: 100 },
    { date: 'Jul', category: 'Clothing', amount: 100 },
];

const makePurchaseStat = (purchases) => {
    return purchases.reduce((acc, purchase) => {
        acc.total += purchase.amount;

        if (!acc.categories[purchase.category]) {
            acc.categories[purchase.category] = 0;
        }
        acc.categories[purchase.category] += purchase.amount;

        if (!acc.months[purchase.date]) {
            acc.months[purchase.date] = 0;
        }
        acc.months[purchase.date] += purchase.amount;

        return acc;
    }, {
        total: 0,
        categories: {},
        months: {}
    });
}

/***************** test *********************/

const result = makePurchaseStat(purchases);
console.log(result);



/***************** reduce() ******************/

const numbers = [2, 4, 6, 8, 10];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

/*** На первой итерации accumulator = 0 (начальное значение), currentValue = 2 (первый элемент массива),
accumulator + currentValue = 0 + 2 = 2, возвращаемое значение: 2. На второй итерации - accumulator = 2
(результат предыдущей итерации), currentValue = 4 (второй элемент массива),
accumulator + currentValue = 2 + 4 = 6, возвращаемое значение: 6, и т.д. ****/

console.log(sum);