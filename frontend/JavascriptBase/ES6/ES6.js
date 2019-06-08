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

// arrow function

// Set Map

// async fun

// class

//modulation