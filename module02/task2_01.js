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
//   let text = a.split(" ");
//   console.log(text);
//   let summ;
//   return (summ = text.length * b);
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
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

// #3
// const findLongestWord = function (string) {
//   let text = string.split(" ");
//   console.log(text);
//   let firstword = text[0];
//   console.log(firstword);
//   // 1.выбрать первый элемент массива
//   for (let i = 0; i < text.length; i++) {
//     console.log(`i ${i}`);
//     console.log(text[i]);

//     if (text[i].length > firstword.length) {
//       firstword = text[i];
//       console.log(`firstword ${firstword}`);
//     }
//   }
//   // 2.сравнить первый элемент массива с следующим элементом массива.
//   // 3.Если следующий элемент массива больше предыдущего, записать в переменную.
//   // 4. Самую большую переменную ретерн.
//   console.log(`firstword ${firstword}`);

//   return firstword;
// };
// findLongestWord("The quick brown fox jumped over the lazy dog");
// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// 'jumped'

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
//   message = message.split(" ");

//   if (message.toLowerCase === "spam" || message.toLowerCase === "sale") {
//     return true;
//   }
//   return false;
// };

// // /*
// //  * Вызовы функции для проверки работоспособности твоей реализации.
// //  */
// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
