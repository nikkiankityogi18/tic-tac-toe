const boxes = document.querySelectorAll('.box')
const resetBtn = document.querySelector('.reset-button')
const newGameBtn = document.querySelector('.new-game')
const message = document.querySelector('.msg')

//playerO playerX  if playerO is true means o printed on button click otherwise X is printed
let turnO = true

//winning pattern

let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((e) => {
    e.addEventListener('click', () => {
        turnO ? (e.innerText = "O", turnO = false, e.disabled = true)
            : (e.innerText = "X", turnO = true, e.disabled = true)
        checkWinner()
    })
})
const showWinner = (winner) => {
    message.innerText = `Congratulations , Winner is player - ${winner} `
    setTimeout(() => { alert('Player' + winner + ' - Winner') }, 500)
}

const checkWinner = () => {

    for (pattern of winningPatterns) {
        const pos1val = boxes[pattern[0]].innerText
        const pos2val = boxes[pattern[1]].innerText
        const pos3val = boxes[pattern[2]].innerText

        if (pos1val && pos2val && pos3val) {
            if (pos1val == pos2val && pos2val == pos3val) {
                boxes.forEach(e => {
                    e.disabled = true
                })
                console.log(pos1val)
                showWinner(pos1val)
            }
        }
    }

}
const resetGame = () => {
    boxes.forEach(e => {
        e.innerText = ''
        e.disabled = false
        turnO = false
        message.innerText = ''
    })
}

resetBtn.addEventListener('click', () => {
    resetGame()
})
newGameBtn.addEventListener('click', () => {
    resetGame()
})