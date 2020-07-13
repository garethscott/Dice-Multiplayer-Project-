const rollButton = document.getElementById("button")
const rollButtonTwo = document.getElementById("button-player2")

const rollButText = document.getElementById("back-but-one")
const rollButTextTwo = document.getElementById("back-but-two")

const newBackButton = document.getElementById("new-back-button")
const backButText = document.getElementById("new-back-but-text")

const diceImg = document.getElementById("dice-img")
const diceImgTwo = document.getElementById("dice-img-two")

const mainHead = document.getElementById("roll-heading")
const mainHeadTwo = document.getElementById("roll-heading-two")


const scoreHead = document.getElementById("score-heading")
const scoreHeadTwo = document.getElementById("score-heading-two")



// Player 1 

let score = 0

const rollDice = () => {
    mainHead.textContent = "No more Bets!"
    let randomNum = Math.floor(((Math.random() * 6) + 1))
    diceImg.src = `assets/dice-${randomNum}.png`

    if (randomNum === 1) {
        mainHead.textContent = "You loose!"
        scoreHead.textContent = score
        mainHead.style.animationName = "flash-black"
        mainHead.style.animationPlayState = "running"
        rollButText.style.color = "rgb(190, 190, 190)"
        document.removeEventListener("keydown", keyRollOne, true)
        newBackButton.style.visibility = "visible"

    }
    else if (score <= 20) {
        score += randomNum
        scoreHead.textContent = score
    }
    if (score > 20) {
        mainHead.textContent = "You've won!"
        scoreHead.textContent = score
        mainHead.style.animationPlayState = "running"
        rollButText.style.color = "rgb(190, 190, 190)"
        document.removeEventListener("keydown", keyRollOne, true)
        newBackButton.style.visibility = "visible"

    }


}

const keyRollOne = (a) => {
    if (a.key === "a") {
        rollDice()
    }
}



document.addEventListener("keydown", keyRollOne, true)

console.log()


// document.addEventListener('keydown', (a) => {
//     if (a.key === "a") {
//         rollDice()
//     }
// });










// Player 2

let scoreTwo = 0

const rollDicePlayer2 = () => {
    mainHeadTwo.textContent = "No more Bets!"
    let randomNum = Math.floor(((Math.random() * 6) + 1))
    diceImgTwo.src = `assets/dice-blue-${randomNum}.png`

    if (randomNum === 1) {
        mainHeadTwo.textContent = "You loose!"
        scoreHeadTwo.textContent = scoreTwo
        mainHeadTwo.style.animationName = "flash-black"
        mainHeadTwo.style.animationPlayState = "running"
        rollButTextTwo.style.color = "rgb(190, 190, 190)"
        document.removeEventListener("keydown", keyRollTwo, true)
        newBackButton.style.visibility = "visible"

    }
    else if (scoreTwo <= 20) {
        scoreTwo += randomNum
        scoreHeadTwo.textContent = scoreTwo
    }
    if (scoreTwo > 20) {
        mainHeadTwo.textContent = "You've won!"
        scoreHeadTwo.textContent = scoreTwo
        mainHeadTwo.style.animationPlayState = "running"
        rollButTextTwo.style.color = "rgb(190, 190, 190)"
        document.removeEventListener("keydown", keyRollTwo, true)
        newBackButton.style.visibility = "visible"

    }
}


const keyRollTwo = (l) => {
    if (l.key === "l") {
        rollDicePlayer2()
    }
}

document.addEventListener("keydown", keyRollTwo, true)


// newBackButton.addEventListener('click', () => {
//     location.reload()
// });

//let resultOne = rollDice()
//let resultTwo = rollDicePlayer2()


// console.log(rollDicePlayer2())



// const oneVTwo = () => {
//     if (resultOne > resultTwo) {

//     }
//     else if (resultTwo > resultOne) {

//     }
//     else if (resultOne === resultTwo) {

//     }
//     else if (resultTwo === resultOne) {

//     }
// }




newBackButton.addEventListener('click', () => {
    location.reload()
});