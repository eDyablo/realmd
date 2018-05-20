class Hud {
    constructor(dom) {
        this.dom = dom;
    }

    display(message) {
        let title = document.createElement('div');
        title.innerText = message;
        this.dom.appendChild(title);
    }
}
