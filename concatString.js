function concatString(str, sep) {
  let next = function (str, newSep, sep, acc) {
    if (typeof str != 'string') {
      return acc;
    } else {
      if (typeof newSep == 'string') {
        sep = newSep;
      }
      acc = acc + str + sep;
      return (str, newSep) => next(str, newSep, sep, acc);
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
