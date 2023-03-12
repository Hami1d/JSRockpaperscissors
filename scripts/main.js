let player = document.querySelectorAll('#choice');

let Cr = document.querySelector('#Cresult');
let Pr = document.querySelector('#Presult');

let result = document.querySelector('#result');

let Cchoice;
let playerchoice;

player.forEach(button => button.addEventListener ('click', () => {
    playerchoice = button.textContent;
    computer();
    Cr.innerText = `${Cchoice}`;
    Pr.innerText = `${playerchoice}`;
    result.innerText = win();

}));

function computer(){

    let randnum = Math.floor(Math.random() * 3) + 1;

    switch(randnum){
        case 1:
            Cchoice = "Rock";
            break;
        case 2:
            Cchoice = "Paper";
            break;
        case 3:
            Cchoice = "Scissors";
            break;
    }
};

function win(){
    if (playerchoice == Cchoice){
        return "Draw!"
    }
    else if(playerchoice == "Rock" && Cchoice == "Paper"){
        return "Computer wins!";
    }
    else if(playerchoice == "Rock" && Cchoice == "Scissors"){
        return "Player wins!";
    }
    else if(playerchoice == "Paper" && Cchoice == "Rock"){
        return "Player wins!";
    }
    else if(playerchoice == "Paper" && Cchoice == "Scissors"){
        return "Computer wins!";
    }
    else if(playerchoice == "Scissors" && Cchoice == "Rock"){
        return "Computer wins!";
    }
    else{
        return "Computer wins!";
    }
    
};