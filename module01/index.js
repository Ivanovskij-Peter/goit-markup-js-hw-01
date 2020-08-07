"use strict";
// const ask = prompt("Какое официальное значение Javascript?");
// let name = ECMAscript;
// if (ask === ECMAscript) {
//   console.log("Верно!");
// } else
// {
//   console.log(`Не знаете? ${name}`);
// }

// let a = 1;
// let b = 2;
// const result = a + b < 4 ? "много" : "мало";
// console.log(result);

// let result = "ok";
// let age = 30;
// if (age >= 14 && age <= 90) {
//   alert(result);
// }
// -------11
// const password = "Я главный";
// let ask = prompt("Введте логин");
// if (ask === null) {
//   console.log(`Отменено`);
// }
// if (ask === "") {
//   console.log(`Я вас не знаю`);
// } else {
//   if (ask === password) {
//     console.log(`здраствуйте`);
//   }
//   if (ask !== password) {
//     console.log(`Неверный пароль`);
//   }
// }
// --------13
// const max = 10;
// for (let i = 2; i <= max; i += 2) {
//   console.log(i);
// }

// -----------14
// const num = 100;
// while (true) {
//   let ask = prompt("Введите число больше 100");
//   if (ask === null) {
//     break;
//   }
//   if (ask >= num) {
//     break;
//   }
// }
// let i = 3;
// while (i) {
//   alert(i--);
// }

// const superhero = ["spider-man", "thanos", "hulk", "thor", "abyss"];
// const negativeHero = "thanos";
// function deleteNegativehero(heroes,deleteHero) {
//     const positiveHeroes = [];
//     for (let index = 0; index < heroes.length; index+=1) {
//         if
//     }
// }

// function sum() {
//   let total = 0;
//   const arr = Array.from(arguments);
//   console.log(arr);
//   for (let elem of arr) {
//     console.log(elem);
//     total += elem;
//   }
//   return total;
// }
// const total = sum(1, 2, 3, 4, 5, 6, 7, 8);
// console.log(total);

// let arr = [1, 2, 3];
// let newArr = arr.concat([]);
// arr.push(4);
// console.log(newArr);

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8];
// let newArr = [...arr, ...arr2];
// console.log(newArr);

// const rest = function (...args) {
//   console.log(args);
// };
// rest(1, 2, 3, 4, 5);

// const styles = ["Джаз", "Блюз"];
// console.log(styles);
// styles.push("Рок - н - ролл");
// console.log(styles);
// styles[Math.floor((styles.length - 1) / 2)] = "Классика";
// console.log(styles.shift());
// styles.unshift("Рэп", "Регги");
// console.log(styles);

// let arr = [5, 2, 1, -10, 8];
// let newArr = arr.sort((a, b) => b - a);
// console.log(newArr);

// const max = function () {
//   // console.log(Math.max(...arguments));
//   let max = 0;
//   for (let el of [...arguments]) {
//     el > max ? (max = el) : "";
//   }
//   console.log(max);
// };

// max(1, 2, 3, 4, 5, 6, 7, 8);

// 21.07
// const fn2 = (...rest) => {
//   let total = 0;
//   for (let elem of rest) {
//     console.log(elem, "check num:", Number.isNaN(elem));
//     if (!isNaN(elem)) {
//       total += Number(elem);
//     }
//   }
//   return total;
// };
// const res = fn2(2, 3, 4, "4", 6, 6);
// console.log("result:", res);

// const sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(4, 5));

// const sum = (flag, a, b) => {
//   if (flag === "increment") {
//     return a + b;
//   } else {
//     return a - b;
//   }
// };
// console.log(sum("increment", 10, 5));
// console.log(sum("decrement", 10, 5));

// const sum = (flag, a, b) => (flag === "increment" ? a + b : a - b);
// console.log(sum("increment", 10, 5));

// const sum = (flag, a, b) => {
//   return flag === "increment" ? a + b : a - b;
// };
// console.log(sum("decrement", 10, 5));

// const arr = [
//   [3, 4, 5, 6],
//   [75, 7, 85, 33],
// ];
// console.log(arr);
// const sum = (param) => {
//   let total = 0;
//   for (let i = 0; i < param.length; i++) {
//     console.log(param[i]);
//     for (let j = 0; j < param[i].length; j++) {
//       const element = param[i][j];
//       console.log(element);
//       total += element;
//     }
//   }
//   return total;
// };
// const summ = sum(arr);
// console.log(summ);

// const a = [3, 4, 5, 6];
// const b = [75, 7, 85, 33];
// const c = [75, 4, 5, 3, 6];
// const d = [34, 56, 7, 8, 9];

// const tranformArr = (...rest) => {
//   const uniqueArr = [];
//   for (let elem of rest) {
//     uniqueArr.push(...elem);
//   }
//   return uniqueArr;
// };
// const uniqueArr = tranformArr(a, b, c, d);
// const sum = () => {};
// const total = sum(uniqueArr);

// const findUniqueNumber = (arr, ...rest) => {
//   const unique = [];
//   console.log(arr);
//   console.log(rest);
//   console.log(tranformArr(arr, rest));
//   for (let elem of tranformArr(arr, rest)) {
//     if (!unique.includes(elem)) {
//       unique.push(elem);
//     }
//   }
//   return unique;
// };

// const uniqueNumbers = findUniqueNumber(
//   [1, 2, 3, 4, 0, 6, 9, 8],
//   9,
//   0,
//   34,
//   56,
//   78
// );
// console.log(uniqueNumbers);

// const ask = function (question, yes, no) {
//   confirm(question) ? yes() : no();
// };

// ask(
//   "Вы согласны ?",
//   () => alert("Вы согласились."),
//   () => alert("Вы отменили выполнение.")
// );

// Напишите функцию hello(), которая при вызове будет принимать переменную name(например, «Василий») и
// выводить строку(в нашем случае «Привет, Василий»).В случае отсутствующего аргумента выводить «Привет, гость»
// const hello = function (ask = "Василий") {
//   console.log("Привет", ask);
// };
// hello("гость");

// #3
// Создайте функцию repeat(str, n), которая возвращает строку, состоящую из
//  n повторений строки str. n — по умолчанию 2, str — пустая строка
// const repeat = function (str = "", n = 2) {
//   console.log(str.repeat(n));
// };
// repeat("");
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
// const values = Object.values(hotel); // ["Resort Hotel", 5, 100]
// const entries = Object.entries(hotel); // [Array(2), Array(2), Array(2)]
// console.log(entries);
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
// console.log(keys);
// for (const key of keys) {
//   console.log("Value: ", hotel[key]);
// }
/*
 * Value: Resort Hotel
 * Value: 5
 * Value: 100
 */

// const add = function (...args) {
//   console.log(args); // массив всех аргументов
// };

// add(1, 2, 3);
// add(1, 2, 3, 4, 5);
// const add = function (value, ...args) {
//   console.log(value); // первый аргумент
//   console.log(args); // массив всех остальных аргументов
// };

// add(10, 1, 2, 3);
// add(15, 1, 2, 3, 4, 5);

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const obg2 = {
//   d: 4,
//   e: 5,
// };
// const obg3 = { ...obj, ...obg2 };
// console.log(obg3);

// / Напишите функцию isEmpty(obj), которая возвращает true,
// если у объекта нет свойств, иначе false.

// let schedule = {

// };
// const isEmpty = function (obj) {
// //   //   //   //   for (let key in obj) {
// //   //   //   //     return false;
// //   //   //   //   }
// //   //   //   //   return true;
// //   //   //   return Object.keys(obj).length === 0 ? true : false;
//   if (Object.keys(obj).length) {
//     return true;
//   } else {
//     return false;
//   }
// };

// alert(isEmpty(schedule)); // true

// schedule[“8: 30”] = “get up”;

// alert(isEmpty(schedule)); // false

// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// // // Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// // // Если объект salaries пуст, то результат должен быть 0.
// let keys = Object.values(salaries);
// let sum = 0;
// for (let key of keys) {
//   sum += key;
// }
// console.log(sum);

// #4
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// const multiplyNumeric = function (obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// };

// multiplyNumeric(menu);
// console.log(menu);

// Дан объект {name: ‘Петр’, ‘surname’: ‘Петров’, ‘age’: ’20 лет‘, }.
// Запишите соответствующие значения в переменные name, surname и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало
//  следующее значение по умолчанию: {name: ‘Аноном’, ‘surname’: ‘Анонимович’, ‘age’: ‘? лет’}.

// let obj = {
//   name: "Петр",
//   surname: "Иванов",
//   age: "20 лет",
// };
// const { name = "Петр", surname = "Иванов", age = "20 лет" } = obj;
// console.log(age);

// const fizzBuzz = function (n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzBuzz");
//     }
//     if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// };
// fizzBuzz(15);

// let calculator = {
//   read: function (a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   sum: function () {
//     let arr = Object.values(calculator);
//     let sum = 0;
//     for (let el of arr) {
//       if (typeof el === "number") {
//         sum += el;
//       }
//     }
//     return sum;
//   },
//   mul: function () {
//     let arr = Object.values(calculator);
//     let mul = 1;
//     for (let el of arr) {
//       if (typeof el === "number") {
//         mul += el;
//       }
//     }
//     return mul;
//   },
// };
// calculator.read(4, 2);
// alert(calculator.sum());
// alert(calculator.mul());
// console.log(calculator);

// const fn = function (n) {
//   if (n !== 0) {
//     console.log(n);
//     return fn(n - 1);
//   } else {
//     return n;
//   }
// };
// fn(5);
// Напишите ф-цию, которая примает аргументами 2 числа,  задающих диапазон который нужно вывести в консоль
// если в числе есть 3 - в консоль вместо него выводиться “three”
// (то есть вместо 3, 13, 23 и т.д. должно быть “three”)

// let myGlobalStatistic = {
//     lightArmor: 0,
//     chainMail: 0,
//     scaleArmor: 0,
// };

// let myDayStatistic = {
//     lightArmor: 0,
//     chainMail: 0,
//     scaleArmor: 0,
// };

// const SellSomething = function (color, size, type) {
//     this.color = color;
//     this.size = size;
//     this.type = type;

//     this.buyNow = function (num) {
//         for (let el in myDayStatistic) {
//             if (el === type) {
//                 myDayStatistic[el] = myDayStatistic[el] + num;
//                 console.log(
//                     `Your order are ${myDayStatistic[el]} ${this.color} ${this.type} with size: ${this.size}`
//                 );
//                 console.log(`My day stat for ${el}: ${myDayStatistic[el]}`);
//             }
//         }
//     };
//     this.boughtStatistic = function (num) {
//         for (let el in myGlobalStatistic) {
//             if (el === type) {
//                 myGlobalStatistic[el] = myGlobalStatistic[el] + num;
//                 console.log(`My global stat for ${el}: ${myGlobalStatistic[el]}`);
//             }
//         }
//     };
// };

// const leatherJackets = new SellSomething("brown", "medium", "lightArmor");
// leatherJackets.buyNow(50);
// leatherJackets.buyNow(300);
// leatherJackets.boughtStatistic(500);

// const Hauberk = new SellSomething("steel", "medium", "chainMail");
// Hauberk.buyNow(200);
// Hauberk.buyNow(10);
// Hauberk.buyNow(20);
// Hauberk.boughtStatistic(300);

// const hotel = {
//   name: "Resort hotel",
//   showThis() {
//     const fn = () => {
//       /*
//        * Стрелки запоминают контекст во время объявления,
//        * из родительской области видимости
//        */
//       console.log("this in fn: ", this);
//     };

//     fn();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();
// // this in fn: {name: 'Resort hotel', showThis: ƒ}
// // this in showThis: {name: 'Resort hotel',showThis: ƒ}

// 1) Даны два массива: [‘a’, ‘b’, ‘c’] и [1, 2, 3]. Объедините их вместе.
// 2) Дан массив [‘a’, ‘b’, ‘c’]. Добавьте ему в конец элементы 1, 2, 3.
// 3) Дан массив[1, 2, 3].Сделайте из него массив[3, 2, 1].

// let a = ["a", "b", "c"];
// let b = [1, 2, 3];
// const c = a.concat(b);
// console.log(c);

// let str = ["a", "b", "c"];
// str.push(1, 2, 3);
// console.log(str);

// let a = [1, 2, 3, 4, 5];
// let b = a.slice(0, 3);
// console.log(b);

// let b = [1, 2, 3];
// let a = b.reverse();
// console.log(a);

// let a = [1, 2, 3, 4, 5];
// a.splice(1, 2);
// console.log(a);

// // 1) Вибираємо випадкове число (від 0 до довжини масива);
// const a = [1, 2, 3, 4, 5];
// 2)// -) Записуємо в змінну строку з промта
// -) Зробити строку масивом
// -) Скопіювати масив в нову змінну
// -) Реверсимо масив
// -) З масивів робимо строки
// const a = [1, 2, 3, 4, 5];
// let b = Math.floor(Math.random() * a.length);
// console.log(a[b]);

// let ask = prompt("add text");
// let newAsk = ask.split(" ");
// console.log(newAsk);
// newAsk.reverse();
// console.log(newAsk);
// let str = newAsk.join(" ");
// console.log(str);

// let creaturesArr = [];
// class Creature {
//   constructor(type, planet, status, sex) {
//     this.type = type;
//     this.planet = planet;
//     this.status = status;
//     this.sex = sex;
//   }
//   get show() {
//     return `This ${this.type} is from ${this.planet} and has ${this.status} status`;
//   }
//   set changePlanet(str) {
//     this.planet = str;
//     return this.planet;
//   }
//   static intro() {
//     console.log("There is a billions types of creatures all around the world!");
//   }
//   static checkCreatures() {
//     console.log(creaturesArr);
//   }
// }

// class Human extends Creature {
//   constructor(name, type, planet, status, sex, nationality) {
//     super(type, planet, status, sex);
//     this.name = name;
//     this.nationality = nationality;
//   }
//   addToCreaturesList() {
//     creaturesArr.push({
//       name: this.name,
//       planet: this.planet,
//       nationlity: this.nationality,
//     });
//   }
// }
// let Adam = new Human(
//   "Adam",
//   "human",
//   "Mars",
//   "three-dimensional",
//   "male",
//   "Ukrainian"
// );
// Adam.addToCreaturesList();
// let Eva = new Human(
//   "Eva",
//   "human",
//   "Venus",
//   "three-dimensional",
//   "female",
//   "Ukrainian"
// );
// Eva.addToCreaturesList();
// Creature.checkCreatures();
// class Alien extends Creature {
//   constructor(name, type, planet, status, sex, nationality, xp) {
//     super(type, planet, status, sex);
//     this.name = name;
//     this.nationality = nationality;
//     this.xp = xp;
//   }
//   addToCreaturesList() {
//     creaturesArr.push({
//       name: this.name,
//       planet: this.planet,
//       nationality: this.nationality,
//       xp: this.xp,
//     });
//   }
// }
// let Rico = new Alien(
//   "Rico",
//   "incomer",
//   "Upiter",
//   "three-dimensional",
//   "male",
//   "europian",
//   "100"
// );
// Rico.addToCreaturesList();
// Creature.checkCreatures();

// ________________________TASK#1
// Реализуйте класс Student (Студент), который будет наследовать от класса User.
// Этот класс должен иметь следующие свойства:
//  name (имя, наследуется от User), surname (фамилия, наследуется от User),
//  year (год поступления в вуз).
//  Класс должен иметь метод getFullName() (наследуется от User),
// с помощью которого можно вывести одновременно имя и фамилию студента.
// Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5).
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.
// Вот так должен выглядеть класс User, от которого наследуется наш Student:
// const yearNow = new Date().getFullYear();
// class User {
//   constructor(name, surname) {
//     (this.name = name), (this.surname = surname);
//   }
//   getFullName() {
//     return `${this.name} ${this.surname}`;
//   }
// }
// class Student extends User {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }
//   getCourse() {
//     return yearNow - this.year;
//   }
// }
// let student = new Student("Иван", "Иванов", 2017);

// console.log(student.name); //выведет 'Иван'
// console.log(student.surname); //выведет 'Иванов'
// console.log(student.getFullName()); //выведет 'Иван Иванов'
// console.log(student.year); //выведет 2017console.log(worker.getCourse()); //выведет 3 - третий курс, так как текущий год 2020
// console.log(student.getCourse());
// console.log(student);

// 1) Создать масив в котором запишется каждый элемент исходного масива * 2;
//
// 2) Создать масив в котором поочерёдно перечисляется длина элементов исходного масиваж
// var arr = [“Есть“, “жизнь“, “на“, “Марсе“];
// 3) Посчитайте все лайки пользователей
// 4) Найдите все обьекты у которых есть тег ‘js’(массив tweets);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// const numbers = [1, 2, 3, 4, 5];
// const doubleNumbers = numbers.map((num) => num * 2);
// console.log(doubleNumbers);

// const arr = ["Есть", "жизнь", "на", "Марсе"];
// const result = arr.map((elem) => elem.length);
// console.log(result);

// const summ = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(summ);
// let elem = "js";
// const tweet = tweets.filter((elem) => elem.tags.includes("js"));
// console.log(tweet);

// let newArr = tweets.filter((el) => (el.tags.includes("js") ? el : ""));
// console.log(newArr);

// 5) Создайте функцию которая будет подсчитывать сумму всех переданных ей нечётных(!) аргументов;
// 6) Отсортируйте масив по возрасту юзеров;

// let items = [
//   { name: "Миша", age: 23 },
//   { name: "Вася", age: 44 },
//   { name: "Саша", age: 2 },
//   { name: "Рома", age: 99 },
//   { name: "Ашот", age: 19 },
// ];
// let biggestAge = (a, b) => a.age - b.age;
// console.log(items.sort(biggestAge));

//  7) Замените каждый ел емент массива на 0; (Метод fill)
//  8) Проверьте есть ли  хотя бы один элемент больше 30 ? Верните true / false
//  const arr = [10, 20,  30, 40];
//  9) Найдите короля района

// let x = [1, 2, 3, "a", "b", "c"];
// console.log(x.fill(0));

// const arr = [10, 20, 30, 40];
// const isBigger = (val) => val >= 30;
// console.log([10, 20, 30, 40].some(isBigger));
// let items = [
//   { name: "Миша", age: 23, isTheKingOfNeighbourhood: false },
//   { name: "Вася", age: 44, isTheKingOfNeighbourhood: false },
//   { name: "Саша", age: 2, isTheKingOfNeighbourhood: false },
//   { name: "Рома", age: 99, isTheKingOfNeighbourhood: false },
//   { name: "Ашот", age: 19, isTheKingOfNeighbourhood: true },
// ];
// const king = items.filter((item) => item.isTheKingOfNeighbourhood);
// console.log(king);

// const fn = function (...arr) {
//   console.log(arr);
//   let sum = arr.reduce((acc, el) => {
//     if (el % 2 !== 0) {
//       acc += el;
//     }
//     return acc;
//   }, 0);
//   return sum;
// };
// console.log(fn(1, 2, 3, 4, 5));

// 10) Поменяйте статус юзера на “неактивен“, если daysInactive больше 10;
// const users = [
//   { name: "Mango", daysInactive: 10, isActive: true },
//   { name: "Poly", daysInactive: 5, isActive: true },
//   { name: "Ajax", daysInactive: 12, isActive: true },
// ];
// users.forEach((user) =>
//   user.daysInactive > 10 ? (user.isActive = false) : " "
// );
// console.log(users);

// 11) Создайте ф - цию которая принимает строку и возвращает её записанную “Заборчиком” (ПрИвЕт)

// const camelC = (word) => {
//   const newAr = [...word];
//   const resultC = newAr.reduce((acc, char, index) => {
//     if (index % 2 != 0) {
//       acc += char.toLowerCase();
//     } else {
//       acc += char.toUpperCase();
//     }
//     return acc;
//   }, "");
//   return resultC;
// };
// console.log(camelC("Привет"));

// let body = document.querySelector("body");

// let box = document.createElement("div");
// body.append(box);
// console.log(box);

// box.style.width = "100px";
// box.style.height = "100px";
// box.style.backgroundColor = "red";
// box.style.margin = "0 auto";
// box.style.borderRadius = "50%";

// for (let i = 0; i < 20; i++) {
//   let box = document.createElement("div");
//   body.append(box);

//   box.classList.add("smallBox");
//   setInterval(() => {
//     box.style.backgroundColor = `rgb(${Math.round(
//       Math.random() * 255
//     )},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`;
//   }, 250);
// }
// const body = document.querySelector("body");
// const htmlBox = document.createElement("p");
// body.append(htmlBox);
// htmlBox.textContent = "1";
// console.log(htmlBox);
// const pEl = document.createElement("p");
// body.append(pEl);
// pEl.textContent = "2";
// htmlBox.classList.add("first-item");
// pEl.classList.add("second-item");

// htmlBox.addEventListener("click", () => {
//   if (htmlBox.textContent === "1") {
//     htmlBox.textContent = "2";
//     pEl.textContent = "1";
//   } else {
//     htmlBox.textContent = "1";
//     pEl.textContent = "2";
//   }
// });

// pEl.addEventListener("click", () => {
//   if (htmlBox.textContent === "1") {
//     htmlBox.textContent = "2";
//     pEl.textContent = "1";
//   } else {
//     htmlBox.textContent = "1";
//     pEl.textContent = "2";
//   }
// });

// Сделайте текстовый инпут который принимает значение цвета и меняет цвет бекграунда для body
// const body = document.querySelector("body");
// const inputEl = document.createElement("input");
// body.append(inputEl);
// inputEl.addEventListener("click", (e) => {
//   body.style.background = inputEl.value;
// });

// При нажатии на кнопку создаётся квадрат, при изменение инпута(range) - меняется его размер(размер грани должен быть больше 100 пикселей) При нажатии на вторую кнопку - квадрат удаляется
// const btn = document.createElement("button");
// body.append(btn);
// btn.textContent = "click me";
// let box = document.createElement("p");
// body.append(box);
// let input = document.createElement("input");
// body.append(input);
// btn.addEventListener("click", () => {
//   let box = document.createElement("p");
//   body.append(box);
//   box.classList.add("item");
// });

/*  Напишите скрипт который реализует следующий функционал.  Есть кнопка с классом button, текст которой отображает   кол-во раз которое по ней кликнули, обновляется при каждом клике.*/

// console.log(btn);
// let counter = 0;
// btn.addEventListener("click", () => {
//   counter += 1;
//   btn.textContent = counter;
// });

// Даны 2 инпута, абзац и кнопка.По нажатию на кнопку  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
// const refs = {
//   item: document.querySelector(".first"),
//   el: document.querySelector(".second"),
//   btn: document.querySelector(".button"),
//   p: document.querySelector("p"),
// };

const form = document.querySelector(".form");

const arr = [];

form.addEventListener("submit", submitFunction);

function submitFunction() {
  event.preventDefault();
  const formData = new FormData(form);
  let obj = {};
  formData.forEach((value, key) => (obj[key] = value));
  arr.push(obj);
  console.log(arr);
}
const btn = document.querySelector(".butt");

btn.addEventListener("click", calculateWeight);

function calculateWeight() {
  let userName = prompt("введите имя");

  const findUser = arr.find((el) => el.name === userName);

  console.log(findUser);
}
