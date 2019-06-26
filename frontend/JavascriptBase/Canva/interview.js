let ndBox = document.getElementById('js-dragBox')

let previousX
let previousY

function boxMove(){
    let e = window.event
    if (!previousX) {
        previousX = e.clientX
    }

    if (!previousY) {
        previousY = e.clientY
    }

    let diffX = e.clientX - previousX
    let diffY = e.clientY - previousY
    // console.log(diffX, e.clientX, previousX)


    let newPositionY = ndBox.getBoundingClientRect().y + diffY
    let newPositionX = ndBox.getBoundingClientRect().x + diffX
    let screenX = document.documentElement.clientWidth
    let screenY = document.documentElement.clientHeight
    let boundX = screenX - ndBox.getBoundingClientRect().width
    let boundY = screenY - ndBox.getBoundingClientRect().height
    console.log(boundX, boundY)
    if (newPositionY > 0 && newPositionY <= boundY) {
        ndBox.style.top = newPositionY + "px"
    }
    if (newPositionX > 0 && newPositionX <= boundX) {
        ndBox.style.left = newPositionX + "px"
    }
    // console.log(ndBox.style.top)
    previousX = e.clientX
    previousY = e.clientY
}

// let debounce =

ndBox.addEventListener("mousedown", function () {
    ndBox.addEventListener("mousemove", boxMove)

})

ndBox.addEventListener("mouseup", function () {
    ndBox.removeEventListener("mousemove",boxMove)
    previousX = false
    previousY = false
})
