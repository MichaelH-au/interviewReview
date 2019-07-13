/**
 * 字符大数除法
 * @param str1
 * @param str2
 * @returns {string}
 */
const bigDivide = (str1, str2) => {
    let resultArr = []
    let remainPart = 0
    for (let i = 0; i < str1.length; i++) {
        let currentNumber = parseInt(str1.charAt(i))
        let intePart = Math.floor((remainPart * 10 + currentNumber) / str2)
        remainPart = (remainPart * 10 + currentNumber) % str2
        resultArr.push(intePart)
    }

    return resultArr.join('')
}

/**
 * 字符大数加法
 * @param str1
 * @param str2
 * @returns {string}
 */
function add(a,b){
    var str1,str2,temp;
    var addFlag = 0;
    var max = [],min = [],res = [];
    str1 = a.split("").reverse();//分割字符串，并且反转
    str2 = b.split("").reverse();

    if (parseInt(a) >= parseInt(b)) {
        max = str1;
        min = str2;
    }
    else{
        max = str2;
        min = str1;
    }
    for (var i = 0; i <= max.length - 1; i++) {
        if (i <= min.length - 1) {
            temp = parseInt(max[i]) + parseInt(min[i]) + addFlag;
        }
        else{
            temp = parseInt(max[i]) + addFlag;
        }

        if (temp > 9) {
            res[i] = temp - 10;
            addFlag = 1;
            if (i == max.length - 1) {
                res[max.length] = 1;//如果是最后一位，要进位
            }
        }
        else{
            res.push(temp);
            addFlag = 0;
        }
    };
    return res.reverse().join("");
}
console.log(add("19","21"))

/**
 * 字符大数减法
 * @param str1
 * @param str2
 * @returns {string}
 */
const bigSub = (str1, str2) => {
    let lend = 0    // 是否需要借位
    let maxLength = Math.max(str1.length, str2.length)
    let isPositive = true  // 结果是否是正数
    let isChecked = false
    let result = []

    if (str1.length < str2.length) {
        isPositive = false
    } else if (str1.length == str2.length) {
        for (let i = 0; i < str1.length; i++) {
            let number1 = parseInt(str1.charAt(i))
            let number2 = parseInt(str2.charAt(i))
            if (number1 < number2 && !isChecked) {
                isPositive = false
                isChecked = true
            }
            if (number1 > number2 && !isChecked) {
                isPositive = true
                isChecked = true
            }
        }
    }
    let remainer
    for (let i = 0; i < maxLength; i++) {
        let larger, smaller
        if (isPositive) {
            larger = i <= str1.length - 1 ? parseInt(str1.charAt(i)) : 0
            smaller = i <= str2.length - 1 ? parseInt(str2.charAt(i)) : 0
        } else {
            larger = i <= str1.length - 1 ? parseInt(str2.charAt(i)) : 0
            smaller = i <= str2.length - 1 ? parseInt(str1.charAt(i)) : 0
        }
        // positive 为 true 一定是 number1 - number2
        // positive 为 false 一定是 number2 - number1
        if (larger - smaller < 0) {
            remainer = larger + 10 - smaller - lend
            lend = 1
        } else {
            remainer = larger - smaller - lend
            lend = 0
        }
        result.push(remainer)
    }

    if (!isPositive) {
        result.push('-')
    }
    // 最后可以通过处理字符串形式抹除 0
    return result.reverse().join('')
}

/**
 * 字符大数乘法
 * @param str1
 * @param str2
 * @returns {string}
 */
const bigMulti = (str1, str2) => {
    let addObj = Object.create(null)
    for (let i = 0; i < str1.length; i++) {
        // 后位轮位置
        let number1 = parseInt(str1.charAt(str1.length - i - 1))
        let overflow = 0
        let innerResult = []
        for (let j = 0; j < str2.length; j++) {
            let number2 = parseInt(str2.charAt(str2.length - j - 1))
            let remainer = (number1 * number2 + overflow) % 10
            overflow = Math.floor((number1 * number2 + overflow) / 10)
            innerResult.push(remainer)
        }
        addObj[i] = innerResult.reverse().join('')
    }
    let target = '0'
    for (let i in addObj) {
        target = bigAdd(target, addObj[i] + produceZero(i))
    }
    return target
}

function produceZero (number) {
    let str = ''
    for (let i = 0; i < number; i++) {
        str += '0'
    }
    return str
}