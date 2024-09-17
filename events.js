window.gel = (x) => {
    try {
        let el = getEventListeners(x)['click'][0].listener
        return el
    }
    catch
    { return "none" }
}

window.elements = [...document.querySelectorAll('*:not(head, body, html,meta)')];
window.elids = elements.map((a, i) => [i, a]);
