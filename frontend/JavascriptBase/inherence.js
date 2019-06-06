// simple inherence without prototype
function Parent() {
    this.name = "parent"
}
function Child() {
    Parent.call(this)
    this.childName = "child"
}

// simple inherence without prototype but share parent variable
function Parent() {
    this.name = "parent"
}
function Child() {
    this.childName = "child"
}
Child.prototype = new Parent();

// combination inherence
function Parent() {
    this.name = "parent"
}
function Child() {
    Parent.call(this)
    this.childName = "child"
}
Child.prototype = new Parent();

// combination optimization
function Parent() {
    this.name = "parent"
}
function Child() {
    Parent.call(this)
    this.childName = "child"
}
Child.prototype = Parent.prototype

// final version of inherence  <==> class
function Parent() {
    this.name = "parent"
}

function Child() {
    Parent.call(this)
    this.childName = "child"
}

Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

let child1 = new Child()

console.log(child1.constructor === Child)
