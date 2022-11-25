class Buttons{
validaiteButtons(){
    //Adding event listeners on the all buttons
document.querySelectorAll('button').forEach(button => {
button.addEventListener('click', (e) => {
    e.preventDefault()
    const but = document.querySelectorAll('button')
    //To check for 'X or 'O'
    if(but[0].innerHTML === 'X' & but[1].innerHTML === 'X' & but[2].innerHTML === 'X'){
    showXWinner();
    playAgain();
    }
    if(but[0].innerHTML === 'O' & but[1].innerHTML === 'O' & but[2].innerHTML === 'O'){
        showOWinner();
        playAgain();
    }
    if(but[3].innerHTML === 'X' & but[4].innerHTML === 'X' & but[5].innerHTML === 'X'){
        showOWinner();
        playAgain();
    }if(but[3].innerHTML === 'O' & but[4].innerHTML === 'O' & but[5].innerHTML === 'O'){
        showOWinner();
        playAgain();
    }if(but[6].innerHTML === 'X' & but[7].innerHTML === 'X' & but[8].innerHTML === 'X'){
        showXWinner();
        playAgain();
    }if(but[6].innerHTML === 'O' & but[7].innerHTML === 'O' & but[8].innerHTML === 'O'){
        showOWinner();
        playAgain();
    }if(but[0].innerHTML === 'X' & but[3].innerHTML === 'X' & but[6].innerHTML === 'X'){
        showXWinner();
        playAgain();
    }if(but[0].innerHTML === 'O' & but[3].innerHTML === 'O' & but[6].innerHTML === 'O'){
        showOWinner();
        playAgain();
    }if(but[4].innerHTML === 'X' & but[1].innerHTML === 'X' & but[7].innerHTML === 'X'){
        showXWinner();
        playAgain();
    }if(but[4].innerHTML === 'O' & but[1].innerHTML === 'O' & but[7].innerHTML === 'O'){
        showOWinner();
        playAgain();
    }if(but[5].innerHTML === 'X' & but[8].innerHTML === 'X' & but[2].innerHTML === 'X'){
        showXWinner();
        playAgain();
    }if(but[5].innerHTML === 'O' & but[8].innerHTML === 'O' & but[2].innerHTML === 'O'){
        showOWinner();
        playAgain();
    }if(but[0].innerHTML === 'X' & but[4].innerHTML === 'X' & but[8].innerHTML === 'X'){
        showXWinner();
        playAgain();
    }if(but[0].innerHTML === 'O' & but[4].innerHTML === 'O' & but[8].innerHTML === 'O'){
        showOWinner();
        playAgain();
    }if(but[4].innerHTML === 'X' & but[6].innerHTML === 'X' & but[2].innerHTML === 'X'){
        showXWinner();
        playAgain();
    }if(but[4].innerHTML === 'O' & but[6].innerHTML === 'O' & but[2].innerHTML === 'O'){
        showOWinner();
        playAgain();
    }
    //TO DISABLE THE BUTTON WHEN IT IS CLICKED
    if(but[0].innerHTML === 'X'|| but[0].innerHTML === 'O'){
        but[0].disabled = true;
    }if(but[1].innerHTML === 'X'|| but[1].innerHTML === 'O'){
        but[1].disabled = true;
    }if(but[2].innerHTML === 'X'|| but[2].innerHTML === 'O'){
        but[2].disabled = true;
    }if(but[3].innerHTML === 'X'|| but[3].innerHTML === 'O'){
        but[3].disabled = true;
    }if(but[4].innerHTML === 'X'|| but[4].innerHTML === 'O'){
        but[4].disabled = true;
    }if(but[5].innerHTML === 'X'|| but[5].innerHTML === 'O'){
        but[5].disabled = true;
    }if(but[6].innerHTML === 'X'|| but[6].innerHTML === 'O'){
        but[6].disabled = true;
    }if(but[7].innerHTML === 'X'|| but[7].innerHTML === 'O'){
        but[7].disabled = true;
    }if(but[8].innerHTML === 'X'|| but[8].innerHTML === 'O'){
        but[8].disabled = true;
    }
})
});
}
}


