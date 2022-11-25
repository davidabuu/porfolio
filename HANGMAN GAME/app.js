//Get The UI Elements
const wordEl = document.querySelector('.word');
const btn = document.querySelectorAll('#btn');
const playAgain = document.querySelector('#play-button');
const popup = document.querySelector('.popup')
const wrongLetters = document.querySelector('.wrong-letters');
const notification = document.querySelector('.notification-container');
//Get The HangMan body parts
const figureParts = document.querySelectorAll('.figure-part');
//Put the correct words in an array
const words = ['JAVA','PHP', 'C', 'JAVASCRIPT', 'PYHTON'];
//Get the words randomly
let selectedWords = words[Math.floor(Math.random() * words.length)];
const correctWords =[];
const wrongWords = [];
//Show The Hidden Word
function displayWord(){
    wordEl.innerHTML = `
    ${selectedWords
    .split('')
    .map(letter => `<span class="letter">${correctWords.includes(letter) ? letter: ''}</span>`)
    .join('')
}
    `
    const innerWord =  wordEl.innerText.replace(/\n/g, '');
    if(innerWord === selectedWords){
        popup.style.display = 'block';
    }
}
//Show Notification
function showNotifcation(){
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show')
    }, 2000);
}
//Update The wrong letter message
function updateWrongLettersEl(){
    wrongLetters.innerHTML = `
    ${wrongWords.length > 0 ? '<p>Wrong</p>': ''}
    ${wrongWords.map(wrongLetters => `<span>${wrongLetters}</span>`)}
    `
    figureParts.forEach((part, index) => {
        const wrongErrors = wrongWords.length
        if(index < wrongErrors){
            part.style.display = 'block';
        }else{
            part.style.display = 'none';
        }
    });
    //Check if lost
    if(wrongWords.length === figureParts.length){
        popup.innerHTML = '<h2>You Failed</h2> <button id="play-again">PLAY AGAIN</button>';
        popup.style.display = 'block';
        popup.addEventListener('click', ()=> {
            window.location.reload()
        })
        

    }
}
//Add Event Listener on th buttons
btn.forEach(buttons => {
    buttons.addEventListener('click', (e)=> {
       e.preventDefault();
       const letters = buttons.innerText;
       if(selectedWords.includes(letters)){
           if(!correctWords.includes(letters)){
               wordEl.innerHTML = `
               <span class="letter">
               ${letters}
               </span>
               `
               correctWords.push(letters);
               displayWord();
           }else{
              showNotifcation()
           }
       }else{
            if(!wrongWords.includes(letters)){
                wrongWords.push(letters);
                updateWrongLettersEl();
            }else{
                showNotifcation();
            }
       }
    })
})
displayWord();
//Play Again
playAgain.addEventListener('click', ()=> {
    window.location.reload()
})