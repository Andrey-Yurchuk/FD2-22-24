/*****************************************************************************************************************
 Глубокое копирование объекта
 Требования
 1. Функция должна принимать один аргумент — объект, который необходимо скопировать.
 2. Функция должна возвращать новый объект, который является полной копией исходного.
 3. Функция должна корректно обрабатывать вложенные объекты и массивы.
 4. Функция должна корректно обрабатывать примитивные типы данных (числа, строки, булевы значения, null, undefined).
 5. Функция не должна использовать внешние библиотеки для копирования объектов.
 ***************************************************************************************************************/

"use strict";

const complexObject = {
    name: 'Test Object',
    age: 42,
    isActive: true,
    scores: [95, 88, 76, 100],
    address: {
        street: '123 Main St',
        city: 'Anytown',
        zip: '12345',
        geo: {
            lat: 40.7128,
            lng: -74.0060
        }
    },
    tags: ['test', 'example', 'sample'],
    metadata: {
        version: 1.0,
        contributors: [
            { name: 'Alice', role: 'Author' },
            { name: 'Bob', role: 'Reviewer' }
        ]
    },
    settings: {
        theme: 'dark',
        notifications: {
            email: true,
            sms: false
        },
        preferences: {
            language: 'en',
            timezone: 'UTC'
        }
    },
    preferences: {
        colorScheme: 'light',
        fontSize: 14,
        layout: {
            header: 'fixed',
            footer: 'static'
        }
    },
    history: [
        { event: 'created', timestamp: '2023-10-01T10:00:00Z' },
        { event: 'updated', timestamp: '2023-10-02T12:00:00Z' }
    ]
};

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        const arrCopy = [];
        for (let i = 0; i < obj.length; i++) {
            arrCopy[i] = deepClone(obj[i]);
        }
        return arrCopy;
    }

    const objCopy = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            objCopy[key] = deepClone(obj[key]);
        }
    }
    return objCopy;
}

/******************** test ************************/

const copiedObject = deepClone(complexObject);
console.log(copiedObject);
