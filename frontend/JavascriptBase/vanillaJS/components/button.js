class LikeButton {
    render () {
        return `        
        <button class='like-btn'>          
          <span class='like-text'>赞</span>          
          <span>👍</span>        
        </button>      `
    }
}

const wrapper = $('.wrapper')
const likeButton = new LikeButton()
wrapper.innerHTML = likeButton.render()


const button = document.querySelector('.like-btn')
const buttonText = button.querySelector('.like-text')
let isLiked = false
button.addEventListener('click', function () {
    isLiked = !isLiked
    if (isLiked) {
        buttonText.innerHTML = '取消'
    } else {
        buttonText.innerHTML = '点赞'
    }
}, false)