let userInput;
const isNumber = function () {
  // цикл будет повторяться вновь и вновь пока пользователь не введет ТОЛЬКО число

  do {
    userInput = prompt("Ведите число");
    userInput = userInput ? parseFloat(userInput.trim()) : null; // нал для проверки отмены, вроде так..
  } while (!(typeof userInput === "number" && isFinite(userInput)));
  return userInput;
};

let numberFunc = isNumber();
console.log(`Поздравляю!!! Ваше число ---->>> ${numberFunc}`);

// пришлось почитать про шаблонные строки тк интересно стало
// потому что + "" никуда не годится :D
// читал про тернарки
//  переделывал пару раз, надеюсь правильлно, по крайней мере вроде все по заданию. Если что то пропустил - дай знать.
