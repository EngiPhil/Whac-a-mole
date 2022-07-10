const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0 
let hitSquare
let currentTime = 60
let timerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
        square.classList.remove('whackedMole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')
    console.log(randomSquare.classList)

    hitSquare = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitSquare) {
            result++
            score.textContent = result
            square.classList.add('whackedMole')
            hitSquare = null
            randomSquare()
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 1800)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime == 0) {
        clearInterval(countDownTimerId)
        alert('TIMES UP! Your final score is ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)