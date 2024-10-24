const Bag = require('../Bag');
const Person = require('../Person'); 

test('should create an instance of Bag', () => {
    const bag = new Bag(10, 1);
    expect(bag).toBeInstanceOf(Bag);
});

test('should assign weight and id correctly', () => {
    const bag = new Bag(15, 2);
    expect(bag.weight).toBe(15);
    expect(bag.id).toBe(2);
});

test('should initialize owner as null', () => {
    const bag = new Bag(20, 3);
    expect(bag.getOwner()).toBeNull();
});

test('should update owner with a Person assigned to a Bag using assignOwner', () => {
    const bag = new Bag(25, 4);
    const person = new Person('John', 'Paris');
    bag.assignOwner(person);
    expect(bag.getOwner()).toBe(person);
});
