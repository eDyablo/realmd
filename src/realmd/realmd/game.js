define([
    './Hud',
    './Realm'
], function() {
    'use strict';
});

class Game {
    play() {
        let realm = new Realm(10, 10);
        realm.create();
        let hud = new Hud(document, document.body, realm);
        hud.create();
    }
}
