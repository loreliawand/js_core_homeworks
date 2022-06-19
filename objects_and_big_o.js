// deep cloning objects
function makeObjectDeepCopy(obj) {
  let clone = {};
  for (let key in obj) {
    if (obj[key] instanceof Object) {
      clone[key] = makeObjectDeepCopy(obj[key]);
      continue;
    }
    clone[key] = obj[key];
  }
  return clone;
}

// selecting from interval
function selectFromInterval(array, val1, val2) {
  const WRONG_VALUE = array.find(function (item) {
    return typeof item !== 'number';
  });
  if (WRONG_VALUE || typeof val1 !== 'number' || typeof val2 !== 'number') {
    throw new Error('Data contains not numeral values!');
  }
  let result = array.filter(function (item) {
    if (val1 < val2) {
      return item >= val1 && item <= val2;
    } else if (val2 < val1) {
      return item >= val2 && item <= val1;
    }
  });
  return result;
}

// iterable object
let myIterable = { from: 4, to: 10 };
let { from, to } = myIterable;
if (typeof from !== 'number' || typeof to !== 'number') {
  throw new Error('Object contains not numeral values or values not defined!');
}
if (to < from) {
  throw new Error(`'To' is smaller than 'From'!`);
}
myIterable[Symbol.iterator] = function () {
  return {
    current: from,
    last: to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};
