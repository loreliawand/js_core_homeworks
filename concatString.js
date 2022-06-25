function concatString(str, sep) {
  let next = function (str, newSep, sep, acc) {
    if (typeof str != 'string') {
      console.log(acc);
    } else {
      if (typeof newSep == 'string') {
        sep = newSep;
      }
      return (strNew, newSep) => next(strNew, newSep, sep, acc + str + sep);
    }
  };
  if (typeof sep != 'string') {
    sep = '';
  }
  if (typeof str != 'string') {
    return;
  }
  acc = str + sep;
  return (str, newSep) => next(str, newSep, sep, acc);
}
