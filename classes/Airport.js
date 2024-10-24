class Airport {
    constructor(name, airportCode) {
        this.name = name;
        this.airportCode = airportCode;
        this.planes = [];
    }

    addPlane(plane) {
        this.planes.push(plane);
    }

    getPlanes() {
        return this.planes;
    }
}

module.exports = Airport;
