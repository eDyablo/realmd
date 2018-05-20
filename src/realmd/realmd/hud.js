define([
    './MapDisplay',
    './Animator',
    './Updater'
], function() {
    'use strict';
});

class Hud {
    constructor(dom, element, realm) {
        this.dom = dom;
        this.element = element;
        this.realm = realm;
    }

    create() {
        let title = this.dom.createElement('div');
        title.id = 'title';
        title.innerText = this.realm.name;
        this.element.appendChild(title);

        let mapDiv = this.dom.createElement('div');
        mapDiv.id = 'map-display';
        this.element.appendChild(mapDiv);
        let mapDisplay = new MapDisplay(this.dom, mapDiv, this.realm);
        mapDisplay.create(500, 500);
        mapDisplay.viewRealm();
        let mapUpdater = new Updater(mapDisplay, 500)
        mapUpdater.start()
    }
}
