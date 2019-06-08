// before ES6

var allKeys = function (obj) {
    var keys = [];
    for (var key in obj) keys.push(key)
    return keys
}

var createAssigner = function (keysFunc, defaule) {
    return function (obj) {
        var length = arguments.length
        if (defaule) obj = Object(obj)
        if (length < 2 || obj == null) return obj
        for (var index = 1; index < length; index++) {
            var source = arguments[index], keys = keysFunc(source), l = keys.length
            for (var i = 0; i < l; i++) {
                var key = keys[i];
                if (!defaule || obj[key] === void 0)
                    obj[key] = source[key]
            }
        }
        return obj;
    }
}

var extend = createAssigner(allKeys)
var test = extend({t:1}, {k:2})

console.log(test)

// ES6

test = Object.assign({k:3})
console.log(test)