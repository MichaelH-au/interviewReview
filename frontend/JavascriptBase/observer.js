class Subject {
    constructor() {
        this.state = 0
        this.observers = []
    }

    getState() {
        return this.state
    }

    setState(state) {
        this.state = state
        this.notifyAllObservers()
    }

    notifyAllObservers() {
        this.observers.forEach(observer => {
            observer.update()
        })
    }

    attach(observer) {
        this.observers.push(observer)
    }
}

class Observer {
    constructor(name, subject) {
        this.name = name
        this.subject = subject
        this.subject.attach(this)
    }

    update() {
        console.log(`${this.name} update, state: ${this.subject.getState()}`)
    }
}

let s = new Subject()

let o1 = new Observer('o1', s)
let o2 = new Observer('o2', s)
let o3 = new Observer('o3', s)

s.setState(1)

/**
 * 应用
 * 1. dom 事件绑定 事件触发都为观察者模式
 *
 * 2. Promise 的resolve and reject 的订阅  loadImg
 *
 * 3. jQuery callbacks
 *
 * 4. nodeJs eventEmitter 自定义事件
 *
 * 5. fs = require('fs') readStream.on()
 *
 * 6. vue React 生命周期
 *
 * 7. vue watch
 * */