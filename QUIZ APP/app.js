//Get the UI Elemnts
const questionForm = document.querySelector('form');
const body = document.querySelector('.body');
const repeat = document.querySelector('.repeat');
//Get the answers in an array = 
const testAnswers = ['A', 'B', 'A', 'B', 'D', 'A', 'D', 'A', 'C', 'B'];
const resultContainer = document.querySelector('.result-container');
const correction = document.querySelector('.correction');
const showScore = document.querySelector('.show-score');
const displayAnswer = document.querySelectorAll('.show-answer');
let timed = 0;
let score = 0;
//Show correct answer
function showCorrectAnswer(){
    const good = document.querySelectorAll('.fa-check')
    good.forEach(mark => {
        mark.classList.add('show');
    })
}
// Show wrong answer
function showWrongAnswer(){
    const failed = document.querySelectorAll('.fa-times');
    failed.forEach((fail)=> {
        fail.classList.add('show')
    })
}
//Add event listener on the form button
questionForm.addEventListener('submit', e => {
    e.preventDefault();
    // Get the values in an array
let answer = [questionForm.q1.value, questionForm.q2.value,questionForm.q3.value, questionForm.q4.value, questionForm.q5.value, questionForm.q6.value, questionForm.q7.value, questionForm.q8.value, questionForm.q9.value, questionForm.q10.value];
    answer.forEach((ans, index) => {
        if(ans === testAnswers[index]){
            score++;
            //Show correct answer
            const good = document.querySelectorAll('.fa-check');
            good[index].classList.add('show');
        }
        else{
            const failed = document.querySelectorAll('.fa-times');
            failed[index].classList.add('show');
            displayAnswer[index].classList.add('show');
            displayAnswer[index].innerHTML = `Correct answer is ${testAnswers[index]}`;

        }
        
    });
    //Display score to DOM
showScore.innerHTML = `Total Score:${score} out of 10`;
// Show result
resultContainer.classList.add('show');
//Repeat the Quiz
repeat.classList.add('show');
//Disable the button
document.querySelector('.submit').disabled = true;
//Show correction
document.querySelector('.body').style.display = 'none';
correction.addEventListener('click', showCorrection)
function showCorrection(){
    resultContainer.classList.remove('show');
    document.querySelector('.body').style.display = 'block';
}
});
const startingTime =2;
let time = startingTime * 60;
//Timing function
window.addEventListener('DOMContentLoaded', () => {
const countDown = document.querySelector('.time');
const timeInterVal = setInterval(timeCountDown, 1000)
function timeCountDown(){
    const minutes = Math.floor(time / 60);
    let seconds = (time % 60);
   seconds = seconds < 10 ? '0' + seconds : seconds 
    countDown.innerHTML = `${minutes}: ${seconds}`
    time--;
    if(time < 0){
        time = 0;
        time = timed;
        resultContainer.classList.add('show');
        document.querySelector('.body').style.display = 'none';
        showScore.innerHTML = `Your Time is Up`
        clearInterval(timeInterVal)
        
        
            
    }
} 
});
if(timed === 0){
correction.addEventListener('click', () => {
    resultContainer.classList.remove('show');
    document.querySelector('.body').style.display = 'block';
    let answer = [questionForm.q1.value, questionForm.q2.value,questionForm.q3.value, questionForm.q4.value, questionForm.q5.value, questionForm.q6.value, questionForm.q7.value, questionForm.q8.value, questionForm.q9.value, questionForm.q10.value];
answer.forEach((ans, index) => {
if(ans === testAnswers[index]){
    score -1 ;
    //Show correct answer
    const good = document.querySelectorAll('.fa-check');
    good[index].classList.add('show');
}
else{
    const failed = document.querySelectorAll('.fa-times');
    failed[index].classList.add('show');
}
document.querySelector('.score').innerHTML = `Your Total Score is ${score} out of 10`
});

})
}