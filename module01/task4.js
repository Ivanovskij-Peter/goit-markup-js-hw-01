let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;
let message;
let buy = prompt("сколько дронов вы хотите купить?");

if (buy === null) {
  console.log("Отменено пользователем!");
} else {
  totalPrice = pricePerDroid * buy;
  console.log(totalPrice);
  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  }
  if (totalPrice <= credits) {
    credits -= totalPrice;
    console.log(
      `Вы купили ${buy} дроидов, на счету осталось ${credits} кредитов.`
    );
  }
}
