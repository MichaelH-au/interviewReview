/**
 *  Even arr can attach extra attribute on the variable
 * */
let arr = []

arr.test = 123

console.log(arr)
// [ test: 123 ]
arr.push(1)
console.log(arr[0])
// 1

console.log(arr[1])
// undefined

console.log(arr)
// [1, test: 123 ]

arr.push({test1:222})
console.log(arr)
// [ 1, { test1: 222 }, test: 123 ]
console.log(arr.length)
// 2

console.log(arr.hasOwnProperty(test))
// test is not defined

console.log(arr.test)
// 123
