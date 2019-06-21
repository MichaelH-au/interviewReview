class LikeButton extends Component{
    constructor(props) {
        super(props)
        this.state = {isLike: false}
    }

    onClick() {
        // const likeText = $('.like-text')
        // this.state.isLike = !this.state.isLike
        // if (this.state.isLike) {
        //     likeText.innerHTML = 'cancel'
        // } else {
        //     likeText.innerHTML = 'like'
        // }
        this.setState({isLike: !this.state.isLike})
    }



    render () {
        return`        
        <button class='like-btn'>          
          <span class='like-text'>${this.state.isLike?'cancel':'like'}</span>          
          <span>👍</span>        
        </button>`
    }
}

const likeButton = new LikeButton()
const createButton = function(wrapper,state = {word: 'hello' }){
    mount(wrapper, new LikeButton(state))
}
//
// wrapper.appendChild(likeButton.render())
//
//
// const button = document.querySelector('.like-btn')
// const buttonText = button.querySelector('.like-text')
// let isLiked = false
// button.addEventListener('click', function () {
//     isLiked = !isLiked
//     if (isLiked) {
//         buttonText.innerHTML = '取消'
//     } else {
//         buttonText.innerHTML = '点赞'
//     }
// }, false)