// Напиши функцию - конструктор Account, которая создает объект со свойствами login и email.В prototype функции - конструктора добавь метод getInfo(), который выводит в консоль значения полей login и email объекта который его вызвал.

// const Account = function (object) {
//   this.login = object.login;
//   this.email = object.email;
// };

// Account.prototype.getInfo = function () {
//   console.log(`login: ${this.login}, email: ${this.email}`);
// };
// const mango = new Account({
//   login: "Mangozedog",
//   email: "mango@dog.woof",
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com
// console.log(Account.prototype.getInfo); // function

// 2
// Напиши класс User для создания пользователя со следующим свойствами:

// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: User ${ имя } is ${ возраст } years old and has ${ кол - во фоловеров } followers
// class User {
//   constructor({ name, age, followers }) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }
// }
// User.prototype.getInfo = function () {
//   console.log(
//     `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
//   );
// };

// const mango = new User({
//   name: "Mango",
//   age: 2,
//   followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: "Poly",
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// #3

// Напиши класс Storage, который будет создавать объекты для управления складом товаров.При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих
// class Storage {
//   constructor(array) {
//     this.array = array;
//   }
//   getItems() {
//     return this.array;
//   }
//   addItem(item) {
//     this.array.push(item);
//   }
//   removeItem(item) {
//     let index = this.array.indexOf(item);
//     if (index !== -1) {
//       this.array.splice(index, 1);
//     }
//   }
// }

// const storage = new Storage([
//   "Нанитоиды",
//   "Пролонгер",
//   "Железные жупи",
//   "Антигравитатор",
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem("Дроид");
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem("Пролонгер");
// console.table(items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// #4

// Напиши класс StringBuilder.На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str(строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str(строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str(строку) и добавляет ее в начало и в конец _value

// class StringBuilder {
//   constructor(value) {
//     this.value = value;
//   }

//   get val() {
//     return this.value;
//   }

//   set val(value) {
//     this.value = value;
//   }

//   append(string) {
//     this.value += string;
//   }

//   prepend(string) {
//     this.value = string + this.value;
//   }

//   pad(string) {
//     this.value = string + this.value + string;
//   }
// }

// const builder = new StringBuilder(".");

// builder.append("^");
// console.log(builder.value); // '.^'

// builder.prepend("^");
// console.log(builder.value); // '^.^'

// builder.pad("=");
// console.log(builder.value); // '=^.^='

// #5

// Напиши класс Car с указанными свойствами и методами.

// class Car {
//   static getSpecs(car) {
//     console.log(
//       `maxSpeed:${car.maxSpeed}, speed :${car.speed}, isOn:${car.isOn}, distance:${car.distance}, price: ${car.price}`
//     );
//   }

//   constructor({ maxSpeed, speed = 0, isOn = false, distance = 0, price }) {
//     this.maxSpeed = maxSpeed;
//     this.speed = speed;
//     this.isOn = isOn;
//     this.distance = distance;
//     this._price = price;
//   }

//   get price() {
//     return this._price;
//   }
//   set price(value) {
//     this._price = value;
//   }

//   turnOn() {
//     this.isOn = true;
//   }

//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }

//   accelerate(value) {
//     if (value < this.maxSpeed) {
//       this.speed += value;
//     }
//   }

//   decelerate(value) {
//     if (value > 0) {
//       this.speed -= value;
//     }
//   }
//   drive(hours) {
//     if (this.isOn === true) {
//       this.distance = hours * this.speed;
//     }
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000
