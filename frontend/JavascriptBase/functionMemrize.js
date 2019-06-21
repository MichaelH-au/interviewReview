const memorize = function (fun) {
    const cache = {}
    return function (...args) {
        const _args = JSON.stringify(args)
        return cache[_args] || (cache[_args] = fun(...args))
    }
}

function add(a) {
    return a + 1
}

const adder = memorize(add)
console.log(adder(1))