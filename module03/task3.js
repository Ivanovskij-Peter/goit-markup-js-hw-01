// #1
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ: значение используя Object.keys() и for...of

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);
// for (let key of keys) {
//   console.log("key:", user[key]);
// }

//  #2
// Напиши функцию countProps(obj), считающую кол - во свойств в объекте.Функция возвращает число - количество свойств.

// const countProps = function (obj) {
//   return Object.keys(obj).length;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ name: "Mango", age: 2 })); // 2

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

// #3
//   и возвращает имя самого продуктивного(который выполнил больше всех задач).Сотрудники и кол - во выполненых задач содержатся как свойства объекта в формате "имя": "кол-во задач".

// const findBestEmployee = function (employees) {
//   let max = 0;
//   for (let [name, task] of Object.entries(employees)) {
//     if (max < task) {
//       max = task;
//       employ = name;
//     }
//   }
//   return employ;
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

// #4

// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.Функция считает общую сумму запрплаты работников и возращает ее.Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".

// const countTotalSalary = function (employees) {
//   let items = Object.values(employees);
//   let total = 0;
//   for (item of items) {
//     total += item;
//   }
//   return total;
// };

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   })
// ); // 400

// #5
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.Возвращает массив значений определенного свойства prop из каждого объекта в массиве.
// 1.создать новый масив. 2. перебираем обьект.3.пуш в масив значения.

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// function getAllPropValues(arr, prop) {
//   let newProduct = [];

//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index][prop] !== undefined) {
//       const element = arr[index][prop];
//       newProduct.push(element);
//     }
//   }
//   return newProduct;
// }

// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, "category"));

// #6

// Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта(значение свойства name).Возвращает общую стоимость продукта(цена * количество).

// // Вызовы функции для проверки работоспособности твоей реализации.

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   let summ;

//   for (let i = 0; i < allProdcuts.length; i++) {
//     let iterable = allProdcuts[i].name;
//     if (iterable === productName) {
//       let totalPrice = allProdcuts[i].price;
//       let totalquantity = allProdcuts[i].quantity;
//       summ = totalPrice * totalquantity;
//     }
//   }

//   return summ;
// };

// // /*
// //  * Вызовы функции для проверки работоспособности твоей реализации.
// //  */
// console.log(calculateTotalPrice(products, "Радар")); // 5200

// console.log(calculateTotalPrice(products, "Дроид")); //2800
