class Calculator {
  constructor(num1, num2) {
    this.setX = this.setX.bind(this);
    this.setY = this.setY.bind(this);
    this.logDiv = this.logDiv.bind(this);
    this.logSum = this.logSum.bind(this);
    this.logMul = this.logMul.bind(this);
    this.logSub = this.logSub.bind(this);

    if (arguments.length > Calculator.length) {
      throw new Error('Too many arguments!!!');
    }
    if (this.isNotDefinedArg(num1) && this.isNotDefinedArg(num2)) {
      throw new Error('Arguments are not defined!');
    }
    if (this.isNotDefinedArg(num1)) {
      throw new Error('Argument 1 is not defined!');
    }
    if (this.isNotDefinedArg(num2)) {
      throw new Error('Argument 2 is not defined!');
    }
    if (this.isNotValidArg(num1) && this.isNotValidArg(num2)) {
      throw new Error('Both of arguments is not are valid values!');
    }
    if (this.isNotValidArg(num1)) {
      throw new Error('Argument 1 is not a valid value!');
    }
    if (this.isNotValidArg(num2)) {
      throw new Error('Argument 2 is not a valid value!');
    }
  }

  isNotDefinedArg = function (arg) {
    if (arg === null || arg === undefined) {
      return true;
    }
  };
  isNotValidArg = function (arg) {
    if (typeof arg !== 'number' || !isFinite(arg) || isNaN(arg)) {
      return true;
    }
  };
  setX = function (arg) {
    if (this.isNotDefinedArg(arg)) {
      throw new Error('Argument 1 is not defined!');
    }
    if (this.isNotValidArg(arg)) {
      throw new Error('Argument 1 is not a valid value!');
    }
    this.num1 = arg;
  };
  setY = function (arg) {
    if (this.isNotDefinedArg(arg)) {
      throw new Error('Argument 2 is not defined!');
    }
    if (this.isNotValidArg(arg)) {
      throw new Error('Argument 2 is not a valid value!');
    }
    this.num2 = arg;
  };
  logSum = function () {
    console.log(this.num1 + this.num2);
  };
  logMul = function () {
    console.log(this.num1 * this.num2);
  };
  logSub = function () {
    console.log(this.num1 - this.num2);
  };
  logDiv = function () {
    if (this.num2 === 0) {
      throw new Error('No divining by 0!!!');
    }
    console.log(this.num1 / this.num2);
  };
}
