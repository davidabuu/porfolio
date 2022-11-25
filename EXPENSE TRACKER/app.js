//Get The UI Element
const balance = document.querySelector('.balance');
const list = document.querySelector('.list');
const item_text = document.querySelector('.item-text');
const item_money = document.querySelector('.item-money');
const form = document.querySelector('#form');
const money_income = document.querySelector('.money-income');
const money_expense = document.querySelector('.money-expense');
const sortByPrice = document.querySelector('.sort-btn');
const localStorageTrnsactions = JSON.parse(localStorage.getItem('transactions'));
let transactions = localStorage.getItem('transactions') !== null ? localStorageTrnsactions: [];
//Add new Trnsaction to the DOM
function addNewTransaction(e){
    e.preventDefault();
    //Check input field is empty
    if(item_text.value.trim()=== '' || item_text.value.trim() === ''){
        //Create new Element
        const newElement = document.createElement('div');
        newElement.classList.add('error');
        const body = document.querySelector('.form-control');
        newElement.appendChild(document.createTextNode('Please fill all Fields'))
        const dowm = document.querySelector('.item-text');
        body.insertBefore(newElement, dowm)
    }else{
        //Create an Object Data
        const newTransactions = {
            id: randomID(),
            text: item_text.value,
            amount: +item_money.value,

        }
        transactions.push(newTransactions);
        addTransactionsToDOM(newTransactions)
        updateValues()
        updateLocalStorge();


    }
    item_money.value = '';
    item_text.value = '';
    //Set TimeOut to clear the error
    setTimeout(()=> {
       document.querySelector('.error').remove()
    }, 3000)
}
//Create Random ID
function randomID(){
    return Math.floor(Math.random() * 1000000000);
}
//Update The Values
function updateValues(){
    const amount = transactions.map(transaction => transaction.amount)
    const totalAmount = amount.reduce((acc, curr)=> (acc += curr), 0).toFixed(2)
    const income = amount.filter(trans => trans > 0)
    .reduce((acc, curr)=> (acc += curr), 0).toFixed(2);
    const expense = amount.filter(trans => trans < 0)
    .reduce((acc, curr)=> (acc += curr), 0).toFixed(2)* -1;
    balance.innerText = `$${totalAmount}`;
    money_income.innerText = `$${income}`;
    money_expense.innerText =`$${expense}`

}
//Add Transactions To DOM
function addTransactionsToDOM(transaction){
    //Get The Sign
    const sign = transaction.amount < 0 ? '-': '+';
    //Create a new Element
    const item = document.createElement('li');
    item.classList.add(transaction.amount < 0 ? 'list-minus': 'list-plus');
    item.innerHTML = `
    ${transaction.text}<span>${sign}${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onclick="removeItem(${transaction.id})">x</button>
    `
    list.appendChild(item);
}
//Sort By Prices
function sortByPrices(){
    transactions = transactions.sort((a, b)=> a.amount - b.amount)
}
//Delete Item
function removeItem(id){
    transactions = transactions.filter(trans => trans.id !== id)
    updateLocalStorge();
    init()
}
//Intialise the function to add to DOM
function init(){
    list.innerHTML = ''
    transactions.forEach(addTransactionsToDOM);
    updateValues();
}
init();

//Update Local storeg
function updateLocalStorge(){
    localStorage.setItem('transactions', JSON.stringify(transactions))
}
//Add event listner to the transaction button
form.addEventListener('submit', addNewTransaction);
//Add Event Listener on the sort button
sortByPrice.addEventListener('click', ()=> {
    sortByPrices()
    transactions.forEach(sortByPrices)
    updateLocalStorge();
    init()
})