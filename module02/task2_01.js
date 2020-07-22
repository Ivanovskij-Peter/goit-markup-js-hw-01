// #1

// const logItems = function (array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(i + 1, "_", array[i]);
//   }
// };
// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// #2
// const calculateEngravingPrice = function (a, b) {
//   return a.split(" ").length * b;
// };

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// );
// 80;

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// ); // 240

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// ); // 120

// #3
// const findLongestWord = function (string) {
//   let text = string.split(" ");
//   let firstword = text[0];
//   for (let i = 0; i < text.length; i++) {
//     if (text[i].length > firstword.length) {
//       firstword = text[i];
//     }
//   }

//   return firstword;
// };

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'

// #4
// const formatString = function (string) {
//   let mystring = string.length;
//   if (mystring <= 40) {
//     return string;
//   } else {
//     return string.slice(0, 40) + "...";
//   }
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );
// вернется форматированная строка

// #5

// const checkForSpam = function (message) {
//   let newMessage = message.toLowerCase();
//   if (newMessage.includes("spam") || newMessage.includes("sale")) {
//     return true;
//   }
//   return false;
// };

// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// #6

// let input;
// const numbers = [];
// let total = 0;
// while (input !== null) {
//   input = prompt("Введите число");
//   if (!isNaN(input)) {
//     numbers.push(Number(input));
//   } else {
//     alert("Было введено не число, попробуйте еще раз");
//   }
// }
// if (numbers.length !== 0) {
//   for (let number of numbers) {
//     total += number;
//   }
//   alert(total);
// }
// console.log(numbers);

// # 7
// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// const isLoginValid = function (login) {
//   if (login.length >= 4 && login.length <= 16) {
//     return true;
//   } else {
//     return false;
//   }
// };
// const isLoginUnique = function (allLogins, login) {
//   if (allLogins.includes(login)) {
//     return false;
//   } else {
//     return true;
//   }
// };

// const addLogin = function (allLogins, login) {
//   if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
//     logins.push(login);
//     return "Логин успешно добавлен!";
//   } else if (!isLoginUnique(allLogins, login)) {
//     return "Такой логин уже используется!";
//   } else if (isLoginValid(login) === false) {
//     return "Ошибка! Логин должен быть от 4 до 16 символов";
//   }
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
// console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
