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
