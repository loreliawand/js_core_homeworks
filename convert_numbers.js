const NUMBER = +prompt('Введите число');
const NUMERAL_SYSTEM = +prompt('Введите систему счисления');
const RESULT = NUMBER.toString(NUMERAL_SYSTEM);

if (isNaN(NUMBER) || isNaN(NUMERAL_SYSTEM)) {
  alert('Некорректный ввод!');
} else {
  console.log('Ответ:', RESULT);
}
