let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const massage = document.querySelector(".msg-container");

const userScoreVal = document.querySelector("#user-score");
const compScoreVal = document.querySelector("#comp-score");

const matchDraw = ()=>{
    console.log("match was draw !!");
    massage.innerHTML = "match was Draw.";
    massage.style.backgroundColor = "#995ab5";
}

const showWinner = (userwin,userchoice, compChoice)=>{
    if(userwin){
        userScore++;
        userScoreVal.innerHTML = userScore;
        console.log("You win!");
        massage.innerHTML = `You win! ${userchoice} beats ${compChoice}`;
        massage.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScoreVal.innerHTML = compScore;
        console.log("you lose!");
        massage.innerHTML = `You lose! ${compChoice} beats your ${userchoice}`;
        massage.style.backgroundColor = "red";
    }
    
    
}

const genCompchoice = () =>{
    const options =["Rock","Paper","Scissors"];
    const RandomIndx = Math.floor(Math.random()*3);
    return options[RandomIndx];
}

const playGame = (userchoice) =>{
    console.log("user choice is: ",userchoice);
    const compChoice = genCompchoice();
    console.log("computer choice is: ",compChoice);
    

    if(userchoice===compChoice){
        matchDraw();
    }
    
    else {
        let userwin=true;
        if(userchoice === "Rock"){
            //Scisoor, paper
        userwin = compChoice ==="Paper" ? false:true;
        }
        else if (userchoice=== "Paper"){
            //Rock, scissor
            userwin = compChoice === "Scissors"? false: true;
        }
        else{
            //Rock, paper
            userwin = compChoice === "Rock" ? false: true;
        }
        showWinner(userwin, userchoice, compChoice);
    }

}
console.log(choices);
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);

    });

});