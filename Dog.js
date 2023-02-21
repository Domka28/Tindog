class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    getDogHtml() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this
        return ` <img class="dog-photos" src="${avatar}">
			<div class="desc-absolute">
			<h1 class="dog-info">${name}, ${age}</h1>
			<p class="bio">${bio}</p>
			</div>`
    }

    setSwiped() {
        this.hasBeenSwiped = true
    }

    setLiked() {
        this.hasBeenLiked = true
    }
}





export default Dog