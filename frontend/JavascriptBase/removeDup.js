function remove(s1, s2) {
    for (let i = 0, len = s2.length; i < len; i ++ ) {
        let r = new RegExp(s2[i], "g");
        if (r.test(s1)) {
            s1 = s1.replace(r, "")
        }
    }
    return s1
}

function removeDash(str) {
    return str.replace(/-(\w)/g, function (...args) {
        console.log(args)
        return args[1].toUpperCase()
    })
}

console.log(removeDash("aa-bb-cc"))
