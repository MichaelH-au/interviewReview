let A = [3, 5, 6, 3, 3, 5]
let len = A.length
let res = 0
for(let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
        if (A[i] == A[j]) {
            res++
        }
    }
}
console.log(res)

/**
 * 
 * @param a
 */
function a(a) {

}