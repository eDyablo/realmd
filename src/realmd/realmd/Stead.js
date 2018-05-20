define([
], function() {
    'use strict';
});

class Stead {
    constructor() {
        this.color = 'darkgray';
    }
}

function createGrass() {
    var stead = new Stead();
    stead.color = 'darkgreen';
    return stead;
}

function createLake() {
    var stead = new Stead();
    stead.color = 'darkblue';
    return stead;
}

function createSand() {
    var stead = new Stead();
    stead.color = 'gold';
    return stead;
}

function createStone() {
    var stead = new Stead();
    stead.color = 'darkgray';
    return stead;
}

function createWood() {
    var stead = new Stead();
    stead.color = 'green';
    return stead;
}
