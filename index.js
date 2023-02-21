
import Dog from "./Dog.js"
import dogs from "./data.js"

const mainContent = document.getElementById("main-content")
const heartBtn = document.getElementById("heart-btn")
const crossBtn = document.getElementById("cross-btn")
let dog
let counter = 0
let isWaiting = false


function render() {
    if (counter < dogs.length) {
        dog = createNewDog()
        mainContent.innerHTML = dog.getDogHtml()
    }
    else {
        document.body.innerHTML = `<div class="end-dogs">
        <h1 class="end-text">There are no more dogs in your area!</h1>
        </div>`
    }
    isWaiting = false
}
render()

function addEventsListeners() {
    heartBtn.addEventListener("click", function () {
        if (!isWaiting) {
            isWaiting = true
            mainContent.innerHTML += `<img class="like" src="images/badge-like.png">`
            setTimeout(render, 1000)
            dog.setSwiped()
            dog.setLiked()
        }
    })

    crossBtn.addEventListener("click", function () {
        if (!isWaiting) {
            isWaiting = true
            mainContent.innerHTML += `<img class="nope" src="images/badge-nope.png">`
            setTimeout(render, 1000)
            dog.setSwiped()

        }
    })

}
addEventsListeners()

function createNewDog() {
    const newDog = new Dog(dogs[counter])
    counter++
    return newDog
}
