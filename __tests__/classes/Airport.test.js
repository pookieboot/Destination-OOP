

import Airport from '../Airport';
import Plane from '../Plane';

describe('Airport Class', () => {
    let airport;

    beforeEach(() => {
        airport = new Airport('John F. Kennedy International Airport');
    });

    test('should have the correct name', () => {
        expect(airport.name).toBe('John F. Kennedy International Airport');
    });

    test('should have the correct airportCode', () => {
        expect(airport.airportCode).toBe('JFK');
    });

    test('should initialize planes as an empty array', () => {
        expect(airport.planes).toEqual([]);
    });

    test('should be able to add Plane objects to the planes array', () => {
        const plane1 = new Plane('Boeing 737');
        airport.addPlane(plane1);
        expect(airport.getPlanes()).toContain(plane1);

        const plane2 = new Plane('Airbus A320');
        airport.addPlane(plane2);
        expect(airport.getPlanes()).toContain(plane2);
        expect(airport.getPlanes()).toHaveLength(2);
    });
});
