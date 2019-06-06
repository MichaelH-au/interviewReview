class Adaptor {
    specificRequest() {
        return 'standard'
    }
}

class Target {
    constructor() {
        this.adaptor = new Adaptor()
    }

    request() {
        let info = this.adaptor.specificRequest()
        return `new ${info}`
    }

}

let target = new Target()
let result = target.request()

/**
 * Encapsulation of legacy API
 * vue computed
 */
