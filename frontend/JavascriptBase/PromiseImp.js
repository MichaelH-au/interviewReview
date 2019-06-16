function _Promise(resolver) {
    this._status = 'pending'
    this._result = ''
    resolver(this.resolve.bind(this), this.reject.bind(this))
}

_Promise.prototype.reject = function (result) {
    if (this._status === 'pending') {
        this._status = 'rejected'
        this._result = result
    }
}

_Promise.prototype.resolve = function (result) {
    if (this._status === 'pending') {
        this._status = 'resolved'
        this._result = result
    }
}

_Promise.prototype.then = function (isResolve, isReject) {
    if (this._status === 'resolved') {
        let _isPromise = isResolve(this._result)
        if (_isPromise instanceof _Promise) {
            return _isPromise
        }
        return this
    } else if (this._status === 'rejected' && arguments[1]) {
        let _isPromise = isResolve(this._result)
        if (_isPromise instanceof _Promise) {
            return _isPromise
        }
        return this;
    }
}

let test = new _Promise(function (resolve, reject) {
        resolve('test')
})

test.then(function (data) {
    console.log('test')
    console.log(data)
})