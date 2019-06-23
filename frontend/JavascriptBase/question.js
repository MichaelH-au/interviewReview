function formatNum (num) {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, function (args) {
        console.log(args)
        return ','
    });
}
var num = '1234567890';
var res = formatNum(num);
console.log(res);
