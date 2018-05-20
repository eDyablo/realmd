define([
    './Animator'
], function() {
    'use strict';
});

class Updater extends Animator {
    constructor(object, interval) {
        super(interval)
        this.object = object
        this.interval = interval
    }

    animate() {
        this.object.update()
    }
}
