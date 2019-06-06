/**
 *  Add new function
 *  Do not change the original functionalities
 */

import {readonly, deprecate} from 'core-decorators'

class Circle {
    draw() {
        console.log('draw a circle')
    }
}

class Decorator {
    constructor(circle) {
        this.circle = circle
    }

    draw() {
        this.circle.draw()
        this.setRedBorder(circle)
    }
    setRedBorder(circle) {
        console.log('change red color')
    }

}

let circle = new Circle()
circle.draw()

let dec = new Decorator(circle)
dec.draw()

/**
 * ES7 decorator
 * core-decorators
 */

// function readOnly(target, name, descriptor) {
//     descriptor.writable = false;
//     return descriptor
// }

class Person {
    constructor() {
        this.first = 'A'
        this.last = 'B'
    }

    @readonly
    name() {
        return `${this.first} ${this.last}`
    }
    @deprecate('This function no longer use')
    oldName() {
        return 'not use no longer'
    }

}

let p = new Person()
console.log(p.name())
console.log(p.oldName())
// p.name = 'stes'
