// // the prototype of the variable is Object
// let o1 = {name: 1}
// let o11 = new Object({name:1})
//
// // use constructor function
// var M = function () {
//     this.name = 1
// }
// let o2 = new M()
//
// // use Object.create
// let P = {name:1}
// let o3 = Object.create(P)


// constructor function, prototype, __proto__, constructor, instance

/**
 * new operator    new Foo()
 * 1. create a new object and extend Foo.prototype
 * 2. execute Foo
 * 3. if the Foo return a object return this object otherwise return the
 * object create by step 1
 */

let new1 = function () {
    let func = Array.prototype.shift.call(arguments)
    let object = Object.create(func.prototype)
    console.log(arguments.constructor)
    console.log(Array.from(arguments))
    let test = Array.from(arguments, function (item) {
        return item.repeat(2)
    })
    console.log(test.constructor)
    console.log(test)
    let result = func.apply(object, arguments)
    if (typeof result == "object") {
        return result
    }
    return object
}

function M(name) {
    this.name = name
}

let test = new1(M, "123")
console.log(test.name)