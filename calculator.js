const NUMBERS = {
  1: { type: 'number', value: 1, title: '1' },
  2: { type: 'number', value: 2, title: '2' },
  3: { type: 'number', value: 3, title: '3' },
  4: { type: 'number', value: 4, title: '4' },
  5: { type: 'number', value: 5, title: '5' },
  6: { type: 'number', value: 6, title: '6' },
  7: { type: 'number', value: 7, title: '7' },
  8: { type: 'number', value: 8, title: '8' },
  9: { type: 'number', value: 9, title: '9' },
  point: { type: 'point', value: '.', title: '.' },
  zero: { type: 'number', value: 0, title: '0' },
  reset: { type: 'reset', value: 'reset', title: 'C' },
};

const OPERATORS = {
  plus: {
    type: 'operator',
    value: 'plus',
    title: '+',
    handler: function (firstValue, seconValue) {
      return parseFloat(firstValue) + parseFloat(seconValue);
    },
  },
  minus: {
    type: 'operator',
    value: 'minus',
    title: '-',
    handler: function (firstValue, seconValue) {
      return parseFloat(firstValue) - parseFloat(seconValue);
    },
  },
  multiply: {
    type: 'operator',
    value: 'multiply',
    title: '*',
    handler: function (firstValue, seconValue) {
      return parseFloat(firstValue) * parseFloat(seconValue);
    },
  },
  divide: {
    type: 'operator',
    value: 'divide',
    title: '/',
    handler: function (firstValue, seconValue) {
      return parseFloat(firstValue) / parseFloat(seconValue);
    },
  },
  equal: {
    type: 'result',
    value: 'equal',
    title: '=',
  },
  inversion: { type: 'inversion', value: 'inversion', title: '+/-' },
  backspace: {
    type: 'backspace',
    value: 'backspace',
    title: '\u2190',
  },
};

class Input {
  constructor() {
    this.value = 0;
    this.input = document.createElement('input');
    this.input.setAttribute('readonly', true);
    this.input.setAttribute('value', '0');
  }

  setValue = (newValue) => {
    this.input.setAttribute('value', newValue);
  };

  render() {
    return this.input;
  }
}

class Button {
  constructor({ title, value, type, handler }) {
    this.title = title;
    this.value = value;
    this.type = type;
    this.handler = handler;

    return this.render();
  }

  render() {
    const button = document.createElement('button');
    button.textContent = this.title;
    button.setAttribute('data-value', this.value);
    button.setAttribute('data-type', this.type);
    button.setAttribute('handler', this.handler);
    button.setAttribute('id', 'number');
    return button;
  }
}

class NumPad {
  constructor() {
    this.numPad = document.createElement('div');
    this.numPad.setAttribute('id', 'numPad');
  }

  render() {
    Object.keys(NUMBERS).forEach((key) => {
      this.numPad.append(new Button(NUMBERS[key]));
    });
    return this.numPad;
  }
}

class OperPad {
  constructor() {
    this.operPad = document.createElement('div');
    this.operPad.setAttribute('id', 'operPad');
  }

  render() {
    Object.keys(OPERATORS).forEach((key) => {
      this.operPad.append(new Button(OPERATORS[key]));
      this[key] = OPERATORS[key].handler;
    });
    return this.operPad;
  }
}

class Calculator {
  constructor() {
    this.calc = document.querySelector('#root');
    this.innerDiv = document.createElement('div');
    this.innerDiv.setAttribute('id', 'body');
    this.input = new Input();
    this.numPad = new NumPad();
    this.operPad = new OperPad();
    this.init();
  }

  init() {
    this.calc.append(this.innerDiv);
    this.innerDiv.append(this.input.render());
    this.innerDiv.append(this.operPad.render());
    this.innerDiv.append(this.numPad.render());

    this.calc.addEventListener('click', (event) => {
      if (event.target.hasAttribute('data-value')) {
        const value = event.target.getAttribute('data-value');
        const type = event.target.getAttribute('data-type');

        switch (type) {
          case 'reset':
            this.reset('firstOperand');
            this.reset('secondOperand');
            this.reset('operation');
            break;
          case 'point':
          case 'number':
            if (!this.operation) {
              this.setOperand(value, 'firstOperand');
            } else {
              this.setOperand(value, 'secondOperand');
            }
            break;
          case 'inversion':
            if (!this.operation) {
              this.inverse('firstOperand');
            } else {
              this.inverse('secondOperand');
            }
            break;
          case 'backspace':
            if (!this.operation) {
              this.deleteLastChar('firstOperand');
            } else {
              this.deleteLastChar('secondOperand');
            }
            break;
          case 'operator':
            if (this.firstOperand) {
              this.operation = value;
            }
            break;
          case 'result':
            this.makeResult(
              this.firstOperand,
              this.secondOperand,
              this.operation
            );
            break;
          default:
            return;
        }
      }
    });
  }

  inverse = (propertyName) => {
    this[propertyName] = -this[propertyName];
    this.input.setValue(this[propertyName]);
  };

  reset = (propertyName) => {
    delete this[propertyName];
    this.input.setValue(0);
  };

  deleteLastChar = (propertyName) => {
    this[propertyName] = this[propertyName].slice(0, -1);
    this.input.setValue(this[propertyName]);
  };

  setOperand = (anotherValue, propertyName) => {
    if (this[propertyName] === undefined) {
      this[propertyName] = anotherValue;
    } else {
      this[propertyName] += anotherValue;
    }
    this.input.setValue(this[propertyName]);
  };

  makeResult = (firstValue, secondValue, operation) => {
    const handler = this.operPad[operation];
    if (handler) {
      this.input.setValue(handler(firstValue, secondValue));
    }
  };
}

new Calculator();
