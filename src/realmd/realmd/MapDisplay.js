define([
    './SteadPresenter'
], function() {
    'use strict';
});

class MapDisplay {
    constructor(dom, element, realm) {
        this.dom = dom;
        this.element = element;
        this.realm = realm;
    }

    create(width, height) {
        let mapDiv = this.dom.createElement('div');
        this.element.appendChild(mapDiv);
        mapDiv.id = 'map';
        mapDiv.style.position = 'relative';
        mapDiv.style.height = height + 'px';
        mapDiv.style.width = width + 'px';
        this.element.appendChild(mapDiv);
        let wCount = 10;
        let hCount = 10;
        let steadWidth = width / wCount;
        let steadHeight = height / hCount;
        var steadPresenters = [];
        for (let hIndex = 0; hIndex < hCount; hIndex++) {
            for (let wIndex = 0; wIndex < wCount; wIndex++) {
                let left = wIndex * steadWidth;
                let top = hIndex * steadHeight;
                steadPresenters.push(this.createSteadPresenter(left, top, steadWidth, steadHeight));
            }
        }
        steadPresenters.forEach(presenter => {
            mapDiv.appendChild(presenter.domElement);
        });
        this.steadPresenters = steadPresenters;
    }

    createSteadPresenter(left, top, width, height) {
        var domElement = this.dom.createElement('div');
        domElement.style.position = 'absolute';
        domElement.style.left = left + 'px';
        domElement.style.top = top + 'px';
        domElement.style.width = width + 'px';
        domElement.style.height = height + 'px';
        var presenter = new SteadPresenter(domElement);
        return presenter;
    }

    viewRealm() {
        const wCount = 10;
        const hCount = 10;
        var steadIndex = 0;
        for (let hIndex = 0; hIndex < hCount; hIndex++) {
            for (let wIndex = 0; wIndex < wCount; wIndex++) {
                let presenter = this.steadPresenters[steadIndex++];
                presenter.bind(this.realm.stead(wIndex, hIndex));
            }
        }
    }

    update() {
        this.steadPresenters.forEach(presenter => {
            presenter.update();
        });
    }
}
