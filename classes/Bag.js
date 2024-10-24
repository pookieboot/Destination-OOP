class Bag {
    constructor(weight, id) {
        this.weight = weight;
        this.id = id;
        this._owner = null; // Private property, simulating using convention
    }

    getOwner() {
        return this._owner;
    }

    assignOwner(person) {
        this._owner = person;
    }
}

module.exports = Bag;


