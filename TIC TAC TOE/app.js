// for increment 
let count = 0;
const repeat = document.querySelector('.show');
//Nobody wins
function draw(){
    winner.innerHTML = 'IT WAS A DRAW. PLAY AGAIN.';
    playAgain();
}
//Adding event listeners on the button
document.querySelector('.button-1').addEventListener('click', (e) => {
    e.preventDefault();
    count++;
    //Check for odd or even number
    if(count % 2 === 0){
        document.querySelector('.button-1').innerHTML = 'X';
        document.querySelector('.button-1').style.color = 'black';
    }else{
        document.querySelector('.button-1').innerHTML = 'O';
        document.querySelector('.button-1').style.color = 'black';
    }if(count >= 9){
      draw();
    }
});
document.querySelector('.button-2').addEventListener('click', (e) => {
    e.preventDefault();
    count++;
     //Check for odd or even number
    if(count % 2 === 0){
        document.querySelector('.button-2').innerHTML = 'X';
        document.querySelector('.button-2').style.color = 'black';
    }else{
        document.querySelector('.button-2').innerHTML = 'O'; 
        document.querySelector('.button-2').style.color = 'black';
    }if(count >= 9){
        draw();
      }
});
document.querySelector('.button-3').addEventListener('click', (e) => {
    e.preventDefault();
    count++;
     //Check for odd or even number
    if(count % 2 === 0){
        document.querySelector('.button-3').innerHTML = 'X';
        document.querySelector('.button-3').style.color = 'black';
    }else{
        document.querySelector('.button-3').innerHTML = 'O';  
        document.querySelector('.button-3').style.color = 'black'; 
    }if(count >= 9){
        draw();
      }
});
document.querySelector('.button-4').addEventListener('click', (e) => {
    e.preventDefault();
    count++;
     //Check for odd or even number
    if(count % 2 === 0){
        document.querySelector('.button-4').innerHTML = 'X';
        document.querySelector('.button-4').style.color = 'black';
    }else{
        document.querySelector('.button-4').innerHTML = 'O'; 
        document.querySelector('.button-4').style.color = 'black';  
    }if(count >= 9){
        draw();
      }
});
document.querySelector('.button-5').addEventListener('click', (e) => {
    e.preventDefault();
    count++;
     //Check for odd or even number
    if(count % 2 === 0){
        document.querySelector('.button-5').innerHTML = 'X';
        document.querySelector('.button-5').style.color = 'black';
    }else{
        document.querySelector('.button-5').innerHTML = 'O';
        document.querySelector('.button-5').style.color = 'black';   
    }if(count >= 9){
        draw();
      }
});
document.querySelector('.button-6').addEventListener('click', (e) => {
    e.preventDefault();
    count++;
     //Check for odd or even number
    if(count % 2 === 0){
        document.querySelector('.button-6').innerHTML = 'X';
        document.querySelector('.button-6').style.color = 'black';
    }else{
        document.querySelector('.button-6').innerHTML = 'O'; 
        document.querySelector('.button-6').style.color = 'black';  
    }if(count >= 9){
        draw();
      }
});
document.querySelector('.button-7').addEventListener('click', (e) => {
    e.preventDefault();
    count++;
     //Check for odd or even number
    if(count % 2 === 0){
        document.querySelector('.button-7').innerHTML = 'X';
        document.querySelector('.button-7').style.color = 'black';
    }else{
        document.querySelector('.button-7').innerHTML = 'O';  
        document.querySelector('.button-7').style.color = 'black'; 
    }if(count >= 9){
        draw();
      }
});
document.querySelector('.button-8').addEventListener('click', (e) => {
    e.preventDefault();
    count++;
     //Check for odd or even number
    if(count % 2 === 0){
        document.querySelector('.button-8').innerHTML = 'X';
        document.querySelector('.button-8').style.color = 'black';
    }else{
        document.querySelector('.button-8').innerHTML = 'O';  
        document.querySelector('.button-8').style.color = 'black'; 
    }if(count >= 9){
        draw();
      }
});
document.querySelector('.button-9').addEventListener('click', (e) => {
    e.preventDefault();
    count++;
     //Check for odd or even number
    if(count % 2 === 0){
        document.querySelector('.button-9').innerHTML = 'X';
        document.querySelector('.button-9').style.color = 'black';
    }else{
        document.querySelector('.button-9').innerHTML = 'O';  
        document.querySelector('.button-9').style.color = 'black'; 
    }if(count >= 9){
        draw();
      }
});
//Winning  and a function 
const winner = document.querySelector('.winner');
//SHOW 'X' WINNER
function showXWinner(){
    winner.innerHTML = 'CONGRATULATIONS PLAYER \'X\' WON!!'
     document.querySelectorAll('button').forEach((loop) => {
        loop.disabled = true;
    });
}
//SHOW 'O' WINNER
function showOWinner(){
    winner.innerHTML = 'CONGRATULATIONS PLAYER \'O\' WON!!'
     document.querySelectorAll('button').forEach((loop) => {
        loop.disabled = true;
    });
}
//show play again
function playAgain(){
    repeat.style.display = 'block';
}
//check for draw
let chance = 0;
//Instantiate the class from ui.js
const bot = new Buttons();
bot.validaiteButtons();
//Add an event listener for play again
document.querySelector('.play').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.reload();
});



