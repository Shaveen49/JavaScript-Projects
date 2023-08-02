function getCompterChoice(){
    const value = ["rock", "paper" , "scissors"]
    //return value
    return(value[Math.floor(Math.random()*value.length)])
}


function Round(playerSelection,computerSelection){
    if(playerSelection=="rock" && computerSelection=="scissors"){
        return("You won! Rock Beats Scissors")
    }else if(playerSelection=="rock" && computerSelection == "paper"){
        return("You Lose! Paper Beats Rock")
    }else if(playerSelection=="rock" && computerSelection == "rock"){
        return("Draw!")
    }else if(playerSelection=="paper" && computerSelection == "rock"){
        return("You won! Rock Beats Scissors")
    }else if(playerSelection=="paper" && computerSelection == "scissors"){
        return("You Lose! Scissors Beats Paper")
    }else if(playerSelection=="paper" && computerSelection == "Paper"){
        return("Draw!")
    }else if(playerSelection=="scissors" && computerSelection == "paper"){
        return("You won! Scissors Beats Paper")
    }else if(playerSelection=="scissors" && computerSelection == "rock"){
        return("You Lose! Rock Beats Scissors")
    }else if(playerSelection=="scissors" && computerSelection == "Scissors"){
        return("Draw")
    }
}

const playerSelection = "rock";
const computerSelection = getCompterChoice();
console.log(Round(playerSelection,computerSelection))


function game(){
    let n = 5;
    for(i=0; i<n ; i++){
        const playerSelection = prompt('Enter value')
        const computerSelection = getCompterChoice();
        console.log(Round(playerSelection,computerSelection))
    }
}

game();