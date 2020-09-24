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

let playerOneScore = 0
let playerTwoScore = 0
let finGameOne = false
let finGameTwo = false
let randomNumOne = 0
let randomNumTwo = 0




// Player 1 Function

let score = 0

const rollDice = () => {
    mainHead.textContent = "No more Bets!"
    randomNumOne = Math.floor(((Math.random() * 6) + 1))
    diceImg.src = `assets/dice-${randomNumOne}.png`

    if (randomNumOne === 1) {
        score++
        mainHead.textContent = "You loose!"
        scoreHead.textContent = score
        mainHead.style.animationName = "flash-black"
        mainHead.style.animationPlayState = "running"
        // rollButText.style.color = "rgb(190, 190, 190)"
        rollButton.removeEventListener("click", rollDice, true)
        rollButton.style.display = "none"
        newBackButton.style.display = "block"
        newBackButton.style.background = "rgb(146, 4, 11)"
        finGameOne = true


    }
    else if (score <= 20) {
        score += randomNumOne
        scoreHead.textContent = score
    }
    if (score > 20) {
        mainHead.textContent = "You've won!"
        scoreHead.textContent = score
        mainHead.style.animationPlayState = "running"
        rollButText.style.color = "rgb(190, 190, 190)"
        rollButton.removeEventListener("click", rollDice, true)
        rollButton.style.display = "none"
        newBackButton.style.display = "block"
        finGameOne = true


    }

    return score
}




// Player One eventListenter and Function

// const keyRollOne = (event) => {
//     if (event.key === "a") {
//         let temp = rollDice()
//         playerOneScore = temp


//     }
// }

// document.addEventListener('keydown', keyRollOne, true)

rollButton.addEventListener('click', rollDice, true)









// Player 2 Function

let scoreTwo = 0

const rollDicePlayer2 = () => {
    mainHeadTwo.textContent = "No more Bets!"
    randomNumTwo = Math.floor(((Math.random() * 6) + 1))
    diceImgTwo.src = `assets/dice-blue-${randomNumTwo}.png`

    if (randomNumTwo === 1) {
        scoreTwo++
        mainHeadTwo.textContent = "You loose!"
        scoreHeadTwo.textContent = scoreTwo
        mainHeadTwo.style.animationName = "flash-black"
        mainHeadTwo.style.animationPlayState = "running"
        rollButTextTwo.style.color = "rgb(190, 190, 190)"
        document.removeEventListener("keydown", keyRollTwo, true)
        newBackButton.style.visibility = "visible"
        finGameTwo = true


    }
    else if (scoreTwo <= 20) {
        scoreTwo += randomNumTwo
        scoreHeadTwo.textContent = scoreTwo
    }
    if (scoreTwo > 20) {
        mainHeadTwo.textContent = "You've won!"
        scoreHeadTwo.textContent = scoreTwo
        mainHeadTwo.style.animationPlayState = "running"
        rollButTextTwo.style.color = "rgb(190, 190, 190)"
        document.removeEventListener("keydown", keyRollTwo, true)
        newBackButton.style.visibility = "visible"
        finGameTwo = true

    }


    return scoreTwo
}



// Player One eventListenter and Function


const keyRollTwo = (event) => {
    if (event.key === "l") {
        let temp = rollDicePlayer2()
        playerTwoScore = temp
    }
}

document.addEventListener('keydown', keyRollTwo, true)

// Resorted back to having two Eventlistner because I can't find away to turn one the events off when you have two functions

// document.addEventListener('keydown', () => {
//     keyRollTwo(event)
//     keyRollOne(event)
// }, true)





const message = () => {
    if (finGameOne === false && finGameTwo === false) {
        console.log("hello")
    }
    else if (finGameOne === false || finGameTwo === true) {
        console.log("not quite done waiting for game one")
    }
    else if (finGameOne === true || finGameTwo === false) {
        console.log("not quite done waiting for two")
    }
    if (finGameOne === true && finGameTwo === true) {
        console.log("fuck yeah")
        clearInterval(timer)
        oneVTwo(playerOneScore, playerTwoScore)
    }

}

//let timer = setInterval(message, 1000)




// Player One 

const oneVTwo = (scoreA, scoreB) => {
    if (randomNumOne === 1) {
        console.log("Player one lands on one you lose!")
    }
    else if (randomNumTwo === 1) {
        console.log("Player one lands on one you lose!")
    }
    else if (randomNumOne === 1 && randomNumTwo === 1) {
        console.log("OOOhh your both out!")
    }
    else if (scoreA > scoreB) {
        console.log("Player 1 wines")
    }
    else if (scoreB > scoreA) {
        console.log("Player 2 wins")
    }

}














//so whereever you call oneVTwo you need to pass in playerOneScore and playerTwoScore
// oneVTwo(playerOneScore, playerTwoScore)



newBackButton.addEventListener('click', () => {
    location.reload()
});