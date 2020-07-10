const rollButton = document.getElementById("button")
const rollButtonTwo = document.getElementById("button-player2")


const backButton = document.getElementById("button2")
const backButtonTwo = document.getElementById("buttonTwo")


const diceImg = document.getElementById("dice-img")
const diceImgTwo = document.getElementById("dice-img-two")

const mainHead = document.getElementById("roll-heading")
const mainHeadTwo = document.getElementById("roll-heading-two")


const scoreHead = document.getElementById("score-heading")
const scoreHeadTwo = document.getElementById("score-heading-two")


const againButton = document.getElementById("again-button")


let score = 0





const rollDice = () => {
    mainHead.textContent = "No more Bets!"
    let randomNum = Math.floor(((Math.random() * 6) + 1))
    diceImg.src = `assets/dice-${randomNum}.png`

    if (randomNum === 1) {
        mainHead.textContent = "You loose!"
        scoreHead.textContent = score
        rollButton.style.display = "none"
        backButton.style.display = "inline"
        mainHead.style.animationName = "flash-black"
        mainHead.style.animationPlayState = "running"
    }
    else if (score <= 20) {
        score += randomNum
        scoreHead.textContent = score
    }
    if (score > 20) {
        mainHead.textContent = "You've won!"
        scoreHead.textContent = score
        rollButton.style.display = "none"
        backButton.style.display = "inline"
        backButton.style.background = "black"
        mainHead.style.animationPlayState = "running"
    }


}

rollButton.addEventListener('click', () => {
    rollDice()
});
backButton.addEventListener('click', () => {
    location.reload()
});






let scoreTwo = 0





const rollDicePlayer2 = () => {
    mainHeadTwo.textContent = "No more Bets!"
    let randomNum = Math.floor(((Math.random() * 6) + 1))
    diceImgTwo.src = `assets/dice-blue-${randomNum}.png`

    if (randomNum === 1) {
        mainHeadTwo.textContent = "You loose!"
        scoreHeadTwo.textContent = scoreTwo
        rollButtonTwo.style.display = "none"
        backButtonTwo.style.display = "inline"
        mainHeadTwo.style.animationName = "flash-black"
        mainHeadTwo.style.animationPlayState = "running"
    }
    else if (scoreTwo <= 20) {
        scoreTwo += randomNum
        scoreHeadTwo.textContent = scoreTwo
    }
    if (scoreTwo > 20) {
        mainHeadTwo.textContent = "You've won!"
        scoreHeadTwo.textContent = scoreTwo
        rollButtonTwo.style.display = "none"
        backButtonTwo.style.display = "inline"
        backButtonTwo.style.background = "black"
        mainHeadTwo.style.animationPlayState = "running"
    }


}

rollButtonTwo.addEventListener('click', () => {
    rollDicePlayer2()
});
backButtonTwo.addEventListener('click', () => {
    location.reload()
});