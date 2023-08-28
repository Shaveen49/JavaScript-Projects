let PlayerScore = 0;
let computerScore = 0;
let roundWinner='';

function getCompterChoice(){
    const value = ["rock", "paper" , "scissors"]
    //return value
    return(value[Math.floor(Math.random()*value.length)])
}


function Round(playerSelection,computerSelection){
    computerSelection=computerSelection.toLowerCase();
    playerSelection=playerSelection.toLowerCase();
    if(computerScore===5 || PlayerScore ===5){
        if(computerScore>PlayerScore){
            alert("Computer wins")
        }else if(PlayerScore>computerScore){
            alert("Player wins")
        }
    }
    if(playerSelection === computerSelection){
        (roundWinner= 'Tie')
        result.innerHTML= `Both Are ${roundWinner}`
    }
    if (
        (playerSelection === 'rock' && computerSelection=== 'scissors')||
        (playerSelection === 'scissors' && computerSelection === 'paper')||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ){
        PlayerScore++
        (roundWinner = 'player')
        result.innerHTML= `Winner: ${roundWinner} `
        scorePlayer.innerHTML= `Player: ${PlayerScore}`
    }
    if(
        (computerSelection==='rock' && playerSelection === 'scissors')||
        (computerSelection==='scissors' && playerSelection === 'paper')||
        (computerSelection==='paper' && playerSelection === 'rock')
    ){
        computerScore++
        (roundWinner='computer')
        result.innerHTML= `Winner: ${roundWinner}`
        scoreComputer.innerHTML= `Computer: ${computerScore}`
    }
}
getCompterChoice();

//const computerSelection = getCompterChoice();
//console.log(Round(playerSelection,computerSelection))


/*function game(){
    let n = 5;
    for(i=0; i<n ; i++){
        const playerSelection = prompt('Enter value')
        const computerSelection = getCompterChoice();
        console.log(Round(playerSelection,computerSelection))
    }
}*/


//game();




//rock.addEventListner('click',()=>)

function gameOver(computerScore,PlayerScore){
   
    if(PlayerScore===5 || computerScore===5)
    return alert('s');
}
gameOver();

const scorePlayer = document.getElementById('playerScore');
const scoreComputer = document.getElementById('computerScore');
const result = document.getElementById('result');
const rockBtn= document.getElementById('rockBtn');
const paperBtn= document.getElementById('paperBtn');
const scissorsBtn= document.getElementById('scissorsBtn');


function game (computerScore,PlayerScore){
    
//for(i=5;(computerScore||PlayerScore)>=5;){

//if((computerScore || PlayerScore) >=5 ){
    rockBtn.addEventListener('click',()=>{
        let playerSelections = 'rock';
        let computerSelection=getCompterChoice();
        (Round(playerSelections,computerSelection))
        
    }
    )
    
    
    paperBtn.addEventListener('click',()=>{
        
        let playerSelections = 'paper';
        let computerSelection=getCompterChoice();
        (Round(playerSelections,computerSelection))
    }
    )
    
    scissorsBtn.addEventListener('click',()=>{
        let playerSelections = 'scissors';
        let computerSelection=getCompterChoice();
        (Round(playerSelections,computerSelection))
    }   
    )
}



/*function playGame(){
    computerScore;
    PlayerScore;
    game()
    if (PlayerScore===5 || computerScore=== 5){
        return alert('over');
    }else{
        game;
        console.log(`comp :${computerScore}`)
        console.log(`player :${PlayerScore}`)
    }


}
playGame();*/








function playerSelect(rock,paper,scissors){
    if(rock){
        return('rock')
    }
    if(paper){
        return('paper')
    }
    if(scissors){
        return('scissors')
    }
}






game()
