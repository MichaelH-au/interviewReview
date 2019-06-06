/**
 * it cannot be a true single object because you cannot not make constructor
 * to a private function
 */
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


/**
 * Application
 * jQuery $
 * login window
 * vuex redux (store)
 */
