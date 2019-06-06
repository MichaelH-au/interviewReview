class Greeter {
    constructor(message) {
        this.message = message
    }

    greet() {
        return "hello " + this.message
    }
}

let test1 = new Greeter()
console.log(test1.greet())

let Greeter = (function () {
    function Greeter(message) {
        this.message = message
    }

    Greeter.prototype.greet = function () {
        return "hello " + this.message
    }

    return Greeter
})()
let test1 = new Greeter()
console.log(test1.greet())
