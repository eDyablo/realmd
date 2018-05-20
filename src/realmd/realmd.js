requirejs(['lib/domReady', 'realmd/game'], function (domReady) {
    domReady(function () {
        var game = new Game();
        game.play();
    });
});