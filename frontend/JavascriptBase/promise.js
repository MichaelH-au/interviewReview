function cook(){
    console.log('开始做饭。');
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('做饭完毕！');
            resolve({food: '鸡蛋炒饭123',number2:123}); // can only pass one parameter
        }, 0); // 10
        reject({food: '鸡蛋炒饭123',number2:123});
    });
    return p;
}
cook().then(function (data) {
    let {food, number2} = data
    let food1 = data.food
    let number1 = data.number2
    console.log('---resolve----')
    console.log(food, number2)
    console.log(food1, number1)
}).catch(function (data) {

    let {food, number2} = data
    let food1 = data.food
    let number1 = data.number2
    console.log('---rejuct----')
    console.log(food, number2)
    console.log(food1, number1)

})