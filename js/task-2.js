const total = 100;
const ordered = 50;
let result;

if (total >= ordered) {
  result = "Заказ оформлен, с вами свяжется менеджер";
} else {
  result = "На складе недостаточно товаров!";
}

console.log(result);
