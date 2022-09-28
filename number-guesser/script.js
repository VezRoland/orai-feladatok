const random = (min, max) => min + Math.floor(max * Math.random())
let randomNumber = random(1, 20)

let guessCount = 0
let guessLimit = 5

let wrongStreak = 0

function createModal() {
    const main = document.createElement("div")
    main.className = "modal-container";

    const box = document.createElement("div")
    box.className = "modal-box"

    const title = document.createElement("p")
    title.className = "modal-title"
    title.textContent = (wrongStreak == guessLimit - 1) ? "Nyertél!" : "Vesztettél!"

    const restart = document.createElement("button")
    restart.textContent = "Újrakezdés"

    box.append(title, restart)
    main.appendChild(box)
    document.body.appendChild(main)
}

function checkGuess(guess) {
    const dataset = document.querySelector(".title").dataset

    if (guessCount == guessLimit) return createModal()
    if (guess == randomNumber) {
        dataset.result = "Helyes"
        wrongStreak = 0
        createModal()
    }
    else {
        if (wrongStreak == 0) dataset.result = "Helytelen"
        else dataset.result = `Helytelen (${wrongStreak})`
        wrongStreak++
    } 
    guessCount++
}

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault()
    checkGuess(document.getElementById("guess").value)
})