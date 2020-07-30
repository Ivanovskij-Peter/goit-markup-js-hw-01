import users from "./user.js";
import user from "./user.js";
// import user from "./user.js";
// Получить массив имен всех пользователей(поле name).
// const getUserNames = (users) => {
//   const names = users.map((user) => user.name);
//   return names;
// };
// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// Получить массив объектов пользователей по цвету глаз(поле eyeColor).

// const getUsersWithEyeColor = (users, color) => {
//   let res = users.filter((elem) => elem.eyeColor === color);
//   return res;
// };

// console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// Получить массив имен пользователей по полу(поле gender).

// const getUsersWithGender = (users, gender) => {
//   let newArr = users.filter((user) => user.gender === gender);
//   return newArr;
// };

// console.log(getUsersWithGender(users, "male"));
// ['Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson']

// Получить массив только неактивных пользователей(поле isActive).

// const getInactiveUsers = (users) => {
//   let newArr = users.filter((user) => !user.isActive);
//   return newArr;
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// Получить пользоваля(не массив) по email(поле email, он уникальный).

// const getUserWithEmail = (users, email) => {
//   let newArr = users.find((user) => user.email === email);
//   return newArr;
// };

// console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// Получить массив пользователей попадающих в возрастную категорию от min до max лет(поле age).

// const getUsersWithAge = (users, min, max) => {
//   let findUser = users.filter((user) => user.age >= min && user.age <= max);
//   return findUser;
// };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// Получить общую сумму баланса(поле balance) всех пользователей.

// const calculateTotalBalance = (users) => {
//   const balance = users.reduce(
//     (totalBalance, user) => totalBalance + user.balance,
//     0
//   );
//   return balance;
// };

// console.log(calculateTotalBalance(users)); // 20916

// ассив имен всех пользователей у которых есть друг с указанным именем.

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter((user) => user.friends.indexOf(friendName) !== -1);
// };

// console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// Массив имен(поле name) людей, отсортированных в зависимости от количества их друзей(поле friends)

// const getNamesSortedByFriendsCount = (users) => {
//   return users.sort((a, b) => a.friends.length - b.friends.length);
// };

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez'

// Получить массив всех умений всех пользователей(поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// const getSortedUniqueSkills = (users) => {
//   return users
//     .reduce((allSkills, user) => {
//       allSkills.push(...user.skills);
//       return allSkills;
//     }, [])
//     .filter((user, index, arr) => arr.indexOf(user) === index)
//     .sort();
// };

// console.log(getSortedUniqueSkills(users));
