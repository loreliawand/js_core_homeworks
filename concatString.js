function concatString(str, sep) {
  result = '';
  let commonArr = [];
  let args = {};
  args.str = str;
  args.sep = sep;
  commonArr.push(args);
  let newArr = [];
  let separator = '';
  let number = [];
  return (next = function (str, sep) {
    let args = {};
    args.str = str;
    args.sep = sep;
    commonArr.push(args);
    for (let i = 0; i < commonArr.length; i++) {
      if (typeof commonArr[i].str !== 'string') {
        number.push(i);
      }
    }
    newArr = commonArr.slice(0, number);
    if (newArr.length) {
      for (let i = 0; i < newArr.length; i++) {
        if (typeof newArr[i].sep === 'string') {
          separator = newArr[i].sep;
        }
        if (typeof newArr[i].sep === 'string' || !newArr[i].sep) {
          result = result.concat(newArr[i].str, separator);
        } else {
          result = result.concat(newArr[i].str);
          separator = '';
        }
      }
      if (result.slice(-1) === separator) {
        result = result.slice(0, -1);
      }
      console.log(result);
    } else {
      console.log(s);
    }
  });
}
