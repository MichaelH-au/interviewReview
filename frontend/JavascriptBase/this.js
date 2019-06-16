class Test{
    constructor(name){
        this.name = name
    }
    test1(){

    }
}

//ES5
let Test1 = function(name) {
    this.name = name
}
Test1.prototype.test = function () {
    console.log(this)

}
name ="my name"
Test1.prototype.test1 = () => {
    console.log(this)
}

let test = new Test1("name");
test.test()
test.test1()