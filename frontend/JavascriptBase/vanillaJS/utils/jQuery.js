
if (!window.$) {
    window.$ = function (nodeOrSelector) {
        let nodes;

        if (typeof nodeOrSelector !== 'string') {
            throw "invalid parameter"
        }
        nodes = document.querySelectorAll(nodeOrSelector)
        if (nodes.length === 1) {
            return nodes[0]
        }
        return Array.prototype.slice.call(nodes)
    }
}