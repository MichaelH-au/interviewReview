function quickSort(arr) {
    if(arr.length == 0) {
        return [];    // empty array
    }
    let cIndex = Math.floor(arr.length / 2);
    let c = arr.splice(cIndex, 1);
    let l = [];
    let r = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < c) {
            l.push(arr[i]);
        } else {
            r.push(arr[i]);
        }
    }
    return quickSort(l).concat(c, quickSort(r));
}