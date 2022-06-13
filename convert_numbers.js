const NUMBER = parseInt(prompt('Введите число'));
const NUMERAL_SYSTEM = parseInt(prompt('Введите систему счисления'));
const RESULT = NUMBER.toString(NUMERAL_SYSTEM);

if (isNaN(parseInt(RESULT, NUMERAL_SYSTEM))) {
  alert('Некорректный ввод!');
}

console.log('Ответ:', RESULT);
