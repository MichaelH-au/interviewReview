// Default parameters
// ES5
function hello(txt) {
    txt = txt || 'test'
}


// ES6
function hello(txt = 'test') {

}


// String template
// `my name is ${user.name}`

// assign group value
let a = 1;
let b = 2;
[a, b] = [b, a];
let rest;
[a,b, ...rest] = [1,2,3,4,5,6,7];
({a,b} = {a:1, b:2});

// regular expression
let regex = new RegExp('xyz','i')
let regex2 = new RegExp(/xyz/i)

// ES6
let regex3 = new RegExp(/xyz/ig, 'i')
// regex3.flags === 'i'
// modifier u and y
let s = 'bbb_bb_b';
let a1 = /b+/g; // global match
let a2 = /b+/y; // global match but the first letter should be matched

console.log('one', a1.exec(s), a2.exec(s))
console.log('two', a1.exec(s), a2.exec(s)) // a2 will be null

/**
 * String in ES5 cannot handel unicode well
 * ES5 str.charAt(0)  str.charCodeAt(0)
 *
 * ES6 str.codePointAt(0) str.codePointAt(0).toString(16) -> unicode value
 * includes(), startsWith() endsWith() repeat(1) ``
 * padStart(2,'0) padEnd(3. '0') String.raw`1\n1`
 */
{
    let str = '\u{20bb7}abc'
    for (let code of str) {
        console.log(code)
    }
}

/**
 * Number
 * Number.isFinite()   Number.isNaN()
 * Number.isInteger()
 * Number.MAX_SAFE_INTEGER   Number.MIN_SAFE_INTEGER
 * Number.isSafeInteger()
 * Number.MAX_VALUE Number_MIN_VALUE
 */

/**
 * Array
 * Array.of()   Array.from([], function(){})  Array.fill(value, from, to)
 * Array.keys()  Array.values() Array.entries() Array.copyWithin()
 * Array.includes() Array.find() Array.find(function(){}) Array.findIndex(function(){})
 *
 */


/**
 * Function
 * () => {}
 * default value
 */

/**
 * Object
 * {name}
 * {func(){}}
 * Object.is(obj1, obj2) <=> '==='
 * Object.assign() shadow copy
 *
 */

/**
 * Symbol
 * Symbol Symbol.for()
 * Object.getOwnPropertySymbols(obj)
 * Reflect.ownKeys(obj)
 */

/**
 * Set
 * set.add()  set.has() set.delete() set.clear() set.keys() set.values()
 * WeakSet
 * only reference
 *
 * Map  map.set(key, value)
 * new Map([[], []])
 */

// Proxy Reflect
/**
 * Proxy Reflect
 */
{
    let obj = {
        time: '2019',
        name: 'alice',
        _r: 123
    }

    let monitor = new Proxy(obj, {
        get(target, key) {
            return target[key].replace('2019', '2020')
        },
        set(target, key, value) {
            if (key === 'name') {
                return target[key] = value
            }
            return target[key]
        },
        has(target, key) {
            if (key === 'name') {
                return target[key]
            }
            return false
        },
        deleteProperty(target, key) {
            if (key.indexOf('_') > -1) {
                return true
            }
            return target[key]
        },
        ownKeys(target) {
            return Object.keys(target).filter(item => item != 'time')
        }
    })
    monitor.time

}

/**
 * Class
 * get set  static
 */

/**
 * Promise
 */

/**
 * Iterator
 */

/**
 * Generator
 *
 */
{
    let test = function* () {
        yield 'a';
        yield 'b';
        return 'c'
    }
    let result = test()
    console.log(result.next()) // {value: "a", done: false}
}

{
    let obj = {}
    obj[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        yield 3;
    }

    let state = function* () {
        while (1) {
            yield 'A'
            yield 'B'
            yield 'C'
        }
    }
    // async is a type of generator
    let state1 = async function f() {
        while (1) {
            await 'A'
            await 'B'
            await 'C'
        }
    }
}


// async fun

// class

//modulation