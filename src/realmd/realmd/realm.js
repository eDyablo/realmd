define([
    './Stead'
], function() {
    'use strict';
});

class Realm {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.name = 'Realm';
    }

    create() {
        var steads = [];
        for (let index = 0; index < this.width * this.height; index++) {
            steads.push(createGrass());
        }
        this.steads = steads;

        this.setStead(4, 5, createLake());
        this.setStead(5, 5, createLake());
        this.setStead(5, 6, createLake());
        this.setStead(6, 6, createLake());

        this.setStead(4, 4, createSand());
        this.setStead(5, 4, createSand());
        this.setStead(6, 4, createSand());
        this.setStead(6, 5, createSand());

        this.setStead(2, 2, createWood());
        this.setStead(3, 2, createWood());
    }

    stead(wIndex, hIndex) {
        return this.steads[hIndex * this.width + wIndex];
    }

    setStead(wIndex, hIndex, stead) {
        this.steads[hIndex * this.width + wIndex] = stead;
    }
}
