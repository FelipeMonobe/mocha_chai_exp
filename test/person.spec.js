import Person from '../person/person';
import chai from 'chai';

const EXPECT = chai.expect;

describe('PERSON', () => {
  let person;

  beforeEach(() => {
    person = new Person(26, 1.68, 'Felipe', 50);
  });

  // AGE
  describe('age', () => {
    it('is a number', () => {
      EXPECT(person.age)
        .to.be.a('number');
    });

    it('equals 26', () => {
      EXPECT(person.age)
        .to.equal(26);
    });

    it('is greater than 0', () => {
      EXPECT(person.age)
        .to.be.above(0);
    });

    it('isn\'t decrementable', () => {
      EXPECT(() => person.age--)
        .to.throw(/Age must always increment/);
    });

    it('is incrementable', () => {
      EXPECT(() => person.age++)
        .to.increase(person, 'age');
    });
  });

  // NAME
  describe('name', () => {
    it('is a string', () => {
      EXPECT(person.name)
        .to.be.a('string');
    });

    it('equals "Felipe"', () => {
      EXPECT(person.name)
        .to.equal('Felipe');
    });

    it('has only letters', () => {
      EXPECT(person.name)
        .to.match(/[A-z]/);
    });

    it('is immutable', () => {
      EXPECT(() => person.name = 'Alexandre')
        .to.throw(TypeError, /Cannot set property/);
    });
  });

  // WEIGHT
  describe('weight', () => {
    it('BMI equals 17.7154195011',() => {
      EXPECT(person.calculateBMI())
        .to.be.equal(17.71541950113379);
    });
  })
});
