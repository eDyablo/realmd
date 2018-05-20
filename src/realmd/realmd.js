requirejs(['lib/domReady', 'realmd/Game'], function (domReady) {
    domReady(function () {
        var game = new Game();
        game.play();
    });
});