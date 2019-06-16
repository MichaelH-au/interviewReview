function debounce(fn, wait = 50) {
    let timer  //undefined will become false in if statement
    return function (...args) {
        console.log(arguments)
        console.log(args)
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, wait)
    }
}

let test = function (name) {
    console.log(name)
}

debounce(test)(123)