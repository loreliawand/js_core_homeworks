const FIRST_NUMBER = Number(prompt('Введите первое число'));
if (isNaN(FIRST_NUMBER)) {
  alert('Некорректный ввод!');
} else {
  const SECOND_NUMBER = Number(prompt('Введите второе число'));
  if (isNaN(SECOND_NUMBER)) {
    alert('Некорректный ввод!');
  } else {
    const ADDITION = FIRST_NUMBER + SECOND_NUMBER;
    const DIVINING = FIRST_NUMBER / SECOND_NUMBER;

    console.log(`Ответ: ${ADDITION}, ${DIVINING}`);
  }
}
