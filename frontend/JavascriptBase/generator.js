function* fibonacci() {
    let [prev, curr] = [0, 1]
    for (;;) {
        [prev, curr] = [curr, prev + curr]
        yield curr
    }
}
for (let n of fibonacci()) {
    if (n > 1000) {
        break
    }
    console.log(n)
}

function* G1() {
    yield 'a'
    yield* G2()  //  yield* will execute G2()
    yield 'b'
}
function* G2() {
    yield 'x'
    yield 'y'
}
for (let item of G1()) {
    console.log(item)
}