class State {
    constructor(state) {
        this.state = state
    }
    handler(context) {
        console.log(`change to ${this.state}`)
        context.setState(this)
    }
}


class Context {
    constructor(){
        this.state = null
    }
    getState() {
        return this.state
    }
    setState(state) {
        this.state = state
    }
}
let context = new Context()
let state1 = new State("state1")
let state2 = new State("state2")
let state3 = new State("state3")
state1.handler(context)
state2.handler(context)
