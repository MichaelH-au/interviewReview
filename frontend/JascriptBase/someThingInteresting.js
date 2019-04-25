let arr = []

arr.test = 123

console.log(arr)
// [ test: 123 ]
arr.push(1)
console.log(arr[0])
// 1
console.log(arr[1])
// undefined
console.log(arr.hasOwnProperty(test))
// test is not defined
