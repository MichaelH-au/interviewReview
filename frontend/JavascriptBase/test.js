let ajax = function (callback, ...args) {
    setTimeout(function () {
        callback && callback.apply(this,args)
        console.log(args)
        console.log(callback)
    },1000)
}
let test = function(name) {
    console.log('name',name)
}
ajax(test, '123')