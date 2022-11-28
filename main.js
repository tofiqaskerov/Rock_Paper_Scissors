const playerTxt = document.querySelector("#player_txt")
const computerTxt = document.querySelector("#computer_txt")
const resultTxt = document.querySelector("#result_txt")

const btn = document.querySelectorAll(".btn")

console.log(playerTxt.textContent);
let player, computer, result;

btn.forEach(button => button.addEventListener("click", () => {
    player = button.textContent
    console.log(player);
    computerTurn()
    playerTxt.innerHTML = `Player: ${player}`
    computerTxt.innerHTML = `Computer: ${computer}`
    resultTxt.innerHTML = checkWinner()
}))

function computerTurn() {
    const randomNum = Math.floor(Math.random() * 3) + 1
    console.log(randomNum);
    switch (randomNum) {
        case 1:
            computer = "Rock"
            break;
        case 2:
            computer = "Paper"
            break;
        case 3:
            computer = "Scissors"
            break;
       
    }
}

function checkWinner(){
    if(player == computer){
        return "Draw!"
    }
    else if(computer == "Rock"){
        return (player == "Paper") ? "You win " : "You Lose"
    }
    else if(computer == "Paper"){
        return (player == "Scissors") ? "You win " : "You Lose"
    }
    else if(computer == "Scissors"){
        return (player == "Rock") ? "You win " : "You Lose"
    }
}