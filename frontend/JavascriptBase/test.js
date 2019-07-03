//
// let before = [23.83 , 74.77 , 67.35 , 44.49 , 7.71 , 96.26 , 50.20 , 38.63]
// // let after = [20.31 , 60.17 , 64.5 , 39.98 , 8.27 , 16.86 , 59.47 , 6.45]
// // let after = [8.53 , 61 , 73 , 21.24 , 3.24 , 28.89 , 50.80 , 15.35]
// // let after = [ 7.44, 26.47, 57.37, 34.71, 4.79, 3.93, 50.88, 7.91]
// let after = [ 0.72, 23.06, 20.68, 19.36, 0.66, 11.81, 49.07, 6.09]
//
//
//
// let arrsDiff = before.map((value, i) => value - after[i])
// let sum = arrsDiff.reduce((accu, curr, i) => {
//     return accu + Math.abs(curr / before[i])
// }, 0)
// console.log(sum / 8)
//


// function markdownParser (markdown) {
//     markdown = markdown.trim()
//     return markdown.replace(/(#+) (.+)/g, function(...args){
//         if (args.length == 5 && args[1].length < 7) {
//             return `<h${args[1].length}>${args[2]}</h${args[1].length}>`
//         }
//         return args[0]
//     })
// }
//
// console.log(markdownParser("### ### Double Triple Header"))

function getMiddle (str) {
    let len = str.length
    let halfLen = len / 2 | 0
    if (len % 2 === 0) {
        // console.log(str.substr(0,1))
        return str.substr(halfLen, 2)
    }
    console.log(str.substr(0,1))
    console.log(halfLen)
    return str.substr(halfLen, 1)
}
console.log(getMiddle('A'))