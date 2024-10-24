const Person = require('../Person');
const Bag = require('../Bag');

test('should create an instance of Person', () => {
    const person = new Person('Alice', 'New York');
    expect(person).toBeInstanceOf(Person);
});

test('should assign name and destination correctly', () => {
    const person = new Person('Bob', 'London');
    expect(person.name).toBe('Bob');
    expect(person.destination).toBe('London');
});

test('should initialize bags as an empty array', () => {
    const person = new Person('Charlie', 'Sydney');
    expect(person.bags).toEqual([]);
});

test('should add a bag to the bags array', () => {
    const person = new Person('David', 'Tokyo');
    const bag = new Bag(30, 5);
    person.addBag(bag);
    expect(person.getBags()).toContain(bag);
});
