function MyPromise(resolver) {
    this.state = 'pending'
    this.result = null
    resolver( this.resolve.bind(this), this.reject.bind(this))
}

MyPromise.prototype.resolve = function (result) {
    this.state = 'fullfill'
    this.result = result
}

MyPromise.prototype.reject = function (result) {
    this.state = 'rejected'
    this.result = result
}

MyPromise.prototype.then = function (resolve, reject) {
    if (this.state === 'fullfill') {
        let _isPromise = resolve(this.result)
        if (_isPromise instanceof MyPromise) {
            return _isPromise
        }
        return this
    } else if (this.state === 'rejected') {
        let _isPromise = reject(this.result)
        if (_isPromise instanceof MyPromise) {
            return _isPromise
        }
        return this
    }
}

let test = new MyPromise(function (resolve, reject) {
    resolve('test')
})

console.log('start')
test.then(function (data) {
    console.log('test')
    console.log(data)
})
console.log('end')