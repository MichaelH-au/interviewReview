let div1 = document.getElementById('div1')
div1.addEventListener('click', function (e) {
    let target = e.target
    if (target.nodeName === 'A') {
        alert(target.innerHTML)
    }
})


