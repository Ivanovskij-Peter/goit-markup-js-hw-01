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
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

const findLongestWord = function (string) {
  let text = string.split(" ");
  console.log(text);
  let firstword = text[0];
  console.log(firstword);
  // 1.выбрать первый элемент массива
  for (let i = 0; i < text.length; i++) {
    console.log(`i ${i}`);
    console.log(text[i]);

    if (text[i].length > firstword.length) {
      firstword = text[i];
      console.log(`firstword ${firstword}`);
    }
  }
  // 2.сравнить первый элемент массива с следующим элементом массива.
  // 3.Если следующий элемент массива больше предыдущего, записать в переменную.
  // 4. Самую большую переменную ретерн.
  console.log(`firstword ${firstword}`);

  return firstword;
};
// findLongestWord("The quick brown fox jumped over the lazy dog");
// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
