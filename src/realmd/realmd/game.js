define(['./hud']);

class Game {
    play() {
        let hud = new Hud(document.body);
            hud.display('Realmd 1.0');
    }
}
