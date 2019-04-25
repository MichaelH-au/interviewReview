function SingleObject() {
    this.login = () => {
        console.log('userLogin')
    }
}

SingleObject.getInstance = (function () {
    let instance;
    return function () {
        if (!instance) {
            instance = new SingleObject()
        }
        return instance
    }
})()

let test = SingleObject.getInstance()
test.login()
let test1 = SingleObject.getInstance()
test1.login()
console.log(test === test1)
