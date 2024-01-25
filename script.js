function getComputerChoice()
{
    let num = 0; 
    num = Math.floor(Math.random() * 3 + 1);
    if(num == 1)
    {
        return "Rock"; 
    }
    if(num == 2)
    {
        return "Scissors"; 
    }
    if(num == 3)
    {
        return "Paper"; 
    }
}

function playAround(playerSelection, computerChoice)
{
    if(playerSelection.toUpperCase() == computerChoice.toUpperCase())
    {
        console.log("Its a Tie!"); 
        return "Tie"; 
    }
    else if(playerSelection.toUpperCase() == "ROCK" && computerChoice.toUpperCase() == "PAPER")
    {
        console.log("You lose! Paper beats Rock!"); 
        return false; 
    }
    else if(playerSelection.toUpperCase() == "PAPER" && computerChoice.toUpperCase() == "ROCK")
    {
        console.log("You win! Paper beats rock!") ; 
        return true; 
    }
    else if(playerSelection.toUpperCase() == "SCISSORS" && computerChoice.toUpperCase() == "PAPER")
    {
        console.log("You win! Scissors beats paper!");
        return true; 
    }
    else if(playerSelection.toUpperCase() == "PAPER" && computerChoice.toUpperCase() == "SCISSORS")
    {
        console.log("You lose! Scissors beats paper!");
        return false; 
    }
    else if(playerSelection.toUpperCase() == "ROCK" && computerChoice.toUpperCase() == "SCISSORS")
    {
        console.log("You win! Rock beats scissors!"); 
        return true; 
    }
    else if(playerSelection.toUpperCase() == "SCISSORS" && computerChoice.toUpperCase() == "ROCK")
    {
        console.log("You lose! Rock beats Scissors!"); 
        return false; 
    }
}

const rockButton = document.getElementById("R"); 
const paperButton = document.getElementById("P"); 
const scissorsButton = document.getElementById("S"); 

rockButton.addEventListener('click', () => console.log("ROCK"));
paperButton.addEventListener('click',() => console.log("PAPER")); 
scissorsButton.addEventListener('click', () => console.log("Paper")); 
