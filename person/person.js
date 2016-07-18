export default class Person {
  constructor(age, height, name, weight) {
    this._age    = age;
    this._height = height;
    this._name   = name;
    this._weight = weight;
  }

  get age()          { return this._age;      }
  set age(age) {
    if (this._age < age) this._age = age;
    else throw new Error('Age must always increment.');
  }
  get height()       { return this._height;   }
  get name()         { return this._name;     }
  get weight()       { return this._weight;   }
  set weight(weight) { this._weight = weight; }

  calculateBMI() {
    return this._weight / Math.pow(this._height, 2);
  }
}
