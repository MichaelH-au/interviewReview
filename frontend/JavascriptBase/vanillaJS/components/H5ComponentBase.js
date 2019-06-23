let H5ComponentBase = function (name, cfg = {}) {
    let id = ('h5_c_' + Math.random()).replace('.', '_')
    let ndContainer = document.createElement(cfg.tagName)

    if (cfg.text) {
        ndContainer.innerText = cfg.text
    }
    if (cfg.css) {
        for (let entry of Object.entries(cfg.css) ){
            ndContainer.style[entry[0]] = entry[1]
        }
    }
    if (cfg.className) {
        ndContainer.className = cfg.className
    }
    return ndContainer
}