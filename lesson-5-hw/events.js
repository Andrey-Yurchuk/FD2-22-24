/*** Задача: Система управления событиями

 Описание:
 Создайте систему управления событиями, которая включает функции-конструкторы для событий и участников.
 Каждое событие будет иметь название, дату и список участников. Каждый участник будет иметь имя и email.
 Используйте функции-конструкторы для создания объектов событий и участников, а также методы для управления
 этими объектами.

 Шаги:
 1. Создайте функцию-конструктор для участников:
 - Функция-конструктор Participant должна принимать имя и email участника и инициализировать их как свойства объекта.
 2. Создайте функцию-конструктор для событий:
 - Функция-конструктор Event должна принимать название и дату события и инициализировать их как свойства объекта.
 - Инициализируйте пустой массив для хранения участников.
 3. Добавьте методы на прототип Event:
 - Метод addParticipant(participant), который добавляет участника к событию(метод должен проверять что участник
   действительно является объектом созданным от конструктора Partisipants и только после этого добавлять).
 - Метод listParticipants(), который выводит список всех участников события.
 - Метод findParticipantByEmail(email), который находит участника по email.
 4. Создайте несколько объектов событий и участников, и протестируйте методы. ***/

"use strict";

function Participant(name, email) {
    this.name = name;
    this.email = email;
}

function Event(title, date) {
    this.title = title;
    this.date = date;
    this.participants = [];
}

Event.prototype.addParticipant = function (participant) {
    if (participant instanceof Participant) {
        this.participants.push(participant);
    } else {
        console.log("Error: participant must be an instance of Participant.");
    }
}

Event.prototype.listParticipants = function() {
    if (this.participants.length === 0) {
        console.log("There are no participants.");
        return;
    }
    this.participants.forEach(function(participant) {
        console.log(`${participant.name} (${participant.email})`);
    });
};

Event.prototype.findParticipantByEmail = function(email) {
    const foundParticipant = this.participants.find(participant => participant.email === email);
    if (foundParticipant) {
        console.log(`Found participant: ${foundParticipant.name} (${foundParticipant.email})`);
    } else {
        console.log("Participant not found.");
    }
};

/*************************************** test ***********************************************/

const participant1 = new Participant("Alexey", "lexa@tut.by");
const participant2 = new Participant("Maxim", "max@tut.by");
const participant3 = new Participant("Tolik", "anatol@tut.by");
const participant4 = new Participant("Vilena", "vilena@tut.by");

const event1 = new Event("BeerJS", "2024-10-30");
const event2 = new Event("HolyJS", "2024-09-10");

event1.addParticipant(participant1);
event1.addParticipant(participant3);
event2.addParticipant(participant2);
event2.addParticipant(participant4);

console.log("Participants in Event 1:");
event1.listParticipants();

console.log("\nParticipants in Event 2:");
event2.listParticipants();

console.log("\nList of participants:");
event1.listParticipants();
event2.listParticipants();