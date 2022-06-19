function convertNumbers () {
  const NUMBER = +prompt('Введите число');
  const NUMERAL_SYSTEM = +prompt('Введите систему счисления');
  const RESULT = parseInt(NUMBER, NUMERAL_SYSTEM);
  const ERROR = console.log('Некорректный ввод!');

  if (isNaN(NUMBER) || isNaN(NUMERAL_SYSTEM) || (isNaN(NUMBER) && isNaN(NUMERAL_SYSTEM))) {
    ERROR;
  } else {
    console.log('Ответ:', RESULT);
  }
}
convertNumbers()