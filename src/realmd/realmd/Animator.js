define([
], function() {
    'use strict';
});

class Animator {
    constructor(interval) {
        this.interval = interval
    }

    start() {
        let self = this
        self.animate();
        this.intervalId = setInterval(function() { self.animate() }, this.interval)
    }

    stop() {
        clearInterval(this.intervalId)
    }
}
