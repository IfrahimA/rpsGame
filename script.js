let computerChoice = "";  
let playerChoice = "";
let playerScore = 0; 
let computerScore = 0; 


function getComputerChoice()
{
    let num = 0; 
    num = Math.floor(Math.random() * 3 + 1);
    if(num == 1)
    {
        return "ROCK"; 
    }
    if(num == 2)
    {
        return "SCISSORS"; 
    }
    if(num == 3)
    {
        return "PAPER"; 
    }
}

function playAround(playerSelection, computerChoice)
{
    if (playerSelection == computerChoice)
    {
        console.log("Its a tie!"); 
        return true; 
    }
    else if(playerSelection == "ROCK" && computerChoice == "PAPER")
    {
        console.log("You lose! Paper beats Rock!"); 
        computerScore++; 
        return false; 
    }
    else if(playerSelection == "PAPER" && computerChoice == "ROCK")
    {
        console.log("You win! Paper beats rock!"); 
        playerScore++; 
        return true; 
    }
    else if(playerSelection == "SCISSORS" && computerChoice == "PAPER")
    {
        console.log("You win! Scissors beats paper!");
        playerScore++; 
        return true; 
    }
    else if(playerSelection == "PAPER" && computerChoice == "SCISSORS")
    {
        console.log("You lose! Scissors beats paper!");
        computerScore++; 
        return false; 
    }
    else if(playerSelection == "ROCK" && computerChoice == "SCISSORS")
    {
        console.log("You win! Rock beats scissors!"); 
        playerScore++; 
        return true; 
    }
    else if(playerSelection== "SCISSORS" && computerChoice == "ROCK")
    {
        console.log("You lose! Rock beats Scissors!");
        computerScore++; 
        return false; 
    }
}

const computerResult = document.getElementById("cResult");
const playerResult = document.getElementById("pResult"); 
function updateText(c, p)
{
    computerResult.textContent = c; 
    playerResult.textContent = p; 
}

function updateScore()
{
    const sc = document.getElementById("score"); 
    sc.textContent = "Score: " + computerScore + " - " + playerScore; 
}

function checkScore()
{
    const sc = document.getElementById("score"); 
    if(computerScore == 5)
    {
        sc.textContent = "Woops. The Computer Wins.";
        computerScore = 0;
        playerScore = 0; 
    }
    else if(playerScore == 5)
    {
        sc.textContent = "Congradulations! You Win!";
        computerScore = 0; 
        playerScore = 0;  
    }
}


const rockButton = document.getElementById("R"); 
rockButton.addEventListener('click', () =>
{
    playerChoice = "ROCK";
    computerChoice = getComputerChoice(); 
    playAround(playerChoice, computerChoice); 
    updateText(computerChoice, playerChoice); 
    updateScore(); 
    checkScore(); 
}); 

const paperButton = document.getElementById("P"); 
paperButton.addEventListener('click', () => 
{
    playerChoice = "PAPER";
    computerChoice = getComputerChoice(); 
    playAround(playerChoice, computerChoice);
    updateText(computerChoice, playerChoice);
    updateScore();
    checkScore();  
}); 

const scissorButton = document.getElementById("S"); 
scissorButton.addEventListener('click', () => 
{
    playerChoice = "SCISSORS";
    computerChoice = getComputerChoice(); 
    playAround(playerChoice, computerChoice); 
    updateText(computerChoice, playerChoice); 
    updateScore(); 
    checkScore(); 
}); 


