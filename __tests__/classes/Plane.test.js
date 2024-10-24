const Plane = require('../Plane');
const Person = require('../Person');

test('should create an instance of Plane', () => {
    const plane = new Plane('Airways', 'JFK', 'LAX');
    expect(plane).toBeInstanceOf(Plane);
});

test('should assign company, origin, and destination correctly', () => {
    const plane = new Plane('Airways', 'LHR', 'SFO');
    expect(plane.company).toBe('Airways');
    expect(plane.origin).toBe('LHR');
    expect(plane.destination).toBe('SFO');
});

test('should initialize passengers as an empty array', () => {
    const plane = new Plane('Airways', 'ORD', 'SEA');
    expect(plane.passengers).toEqual([]);
});

test('should add a Person to the passengers array', () => {
    const plane = new Plane('Airways', 'DFW', 'MIA');
    const person = new Person('Eve', 'Miami');
    plane.addPassenger(person);
    expect(plane.getPassengers()).toContain(person);
});
