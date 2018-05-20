define([
    './Stead'
], function() {
    'use strict';
});

class SteadPresenter {
    constructor(domElement) {
        this.domElement = domElement;
    }

    bind(stead) {
        this.stead = stead;
    }

    update() {
        this.domElement.style.backgroundColor = this.stead.color;
    }
}
