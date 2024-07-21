let userScore=0;
let compScore=0;
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
let userscorepara=document.querySelector("#user-score");
let compscorepara=document.querySelector("#comp-score");
gencompChoice=()=>{
    const options=["rock","paper","scissors"];
    let compChoice=options[Math.floor(Math.random()*3)];
    return compChoice;
}
gameDraw=()=>{
    console.log("draw");
    msg.innerText="Draw.Play Again";
    msg.style.backgroundColor="black";
}
showWin=(userWin,userChoice,compChoice)=>{
    if(userWin){
    userScore++;
    console.log("you win");
    userscorepara.innerText=userScore;
    msg.innerText=`You Won.Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    }
    else {
        compScore++;
        console.log("you lose");
        compscorepara.innerText=compScore;
        msg.innerText=`You Lost.${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
playGame=(userChoice)=>{
    console.log("usechoice=",userChoice);
    let compChoice=gencompChoice();
    console.log("compchoice=",compChoice);
    if(userChoice === compChoice)
    gameDraw();
    else {
    let userWin=true;
    if(compChoice==="rock")
    {
        userWin= (userChoice === "paper" ? true:false);
    }
    else if(compChoice==="paper")
    {
        userWin= (userChoice === "scissors" ? true:false);
    }
    else if(compChoice==="scissors")
    {
        userWin= (userChoice === "rock" ? true:false);
    }
    showWin(userWin,userChoice,compChoice);
}
}
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () =>{
    const userChoice=choice.getAttribute("id")
    playGame(userChoice);
});    
});
