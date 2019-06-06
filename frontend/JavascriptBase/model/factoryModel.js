// encapsulate function
class Product {
    constructor(name) {
        this.name = name
    }

    init() {
        console.log('init')
    }

    fun1() {
        console.log('fun1')
    }
    fun2() {
        console.log('fun2')
    }
}

class Creator {
    create(name) {
        return new Product(name)
    }
}

let creator = new Creator()
let product = creator.create(test)

/**
 * Application
 *
 * jQuery $('div')
 * React.createElement
 * Vue async components
 */


// Simple jQuery example of factory model
class jQuery {
    constructor(selector) {
        let slice = Array.prototype.slice
        let dom = slice.call(document.querySelectorAll(selector))
        let len = dom ? dom.length : 0
        for (let i = 0; i < len; i++) {
            this[i] = dom[i]
        }
        this.length = len
        this.selector = selector || ''
    }

    append(node) {

    }

    addClass(name) {

    }

}

window.$ = function (selector) {
    return new jQuery(selector)
}