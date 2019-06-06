function each(data) {
    // Array Map Set String TypeArray arguments NodeList
    let iterator = data[Symbol.iterator]()

    let item = {done: false}

    while(!item.done) {
        item = iterator.next()
        if (!item.done) {
            console.log(item.value)
        }
    }
}

function newEach(data) {
    for (let item of data) {
        console.log(item)
    }
}

