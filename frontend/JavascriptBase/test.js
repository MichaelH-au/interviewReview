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


console.log('begin');
setTimeout(() => {
    console.log('setTimeout 1');
    Promise.resolve().then(() => {
        console.log('promise 1');
        setTimeout(() => {
            console.log('setTimeout2');
        })
    }).then(() => {
        console.log('promise 2');
    });
}, 0);
console.log('end');
