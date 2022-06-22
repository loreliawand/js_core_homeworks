// myFilter
Array.prototype.myFilter = function (callbackFn, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (thisArg) {
      let bound = callbackFn.bind(thisArg, this[i], i, this);
      if (bound()) {
        result.push(this[i]);
      } else if (callbackFn(this[i], i, this)) {
        result.push(this[i]);
      }
    }
  }
  return result;
};

// debounce
let log100 = () => {
  console.log(100);
};

const createDebounceFunction = function (callbackFn, time) {
  let callback = () => {
    if (callback.timeout !== undefined) {
      clearTimeout(callback.timeout);
    }
    callback.timeout = setTimeout(callbackFn, time);
  };
  return callback;
};
