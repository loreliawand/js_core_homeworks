function additionAndDivining () {
  const FIRST_NUMBER = +prompt('Введите первое число');
  const ERROR = console.log('Некорректный ввод!');
  if (isNaN(FIRST_NUMBER)) {
    ERROR;
  } else {
    const SECOND_NUMBER = +prompt('Введите второе число');
    if (isNaN(SECOND_NUMBER)) {
      ERROR;
    } else {
      const ADDITION = FIRST_NUMBER + SECOND_NUMBER;
      const DIVINING = FIRST_NUMBER / SECOND_NUMBER;
      console.log(`Ответ: ${ADDITION}, ${DIVINING}`);
    }
  }
}

additionAndDivining()