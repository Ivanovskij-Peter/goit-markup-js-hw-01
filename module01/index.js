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
