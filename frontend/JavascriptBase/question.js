function debounce(fn, dely = 1000) {
    let timer = null
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(function () {
            fn.apply(this, args)
        }, dely)
    }
}

let test = function (name) {
    console.log(name)
}

test = debounce(test)

test(123)
test(123)
test(123)
test(123)
