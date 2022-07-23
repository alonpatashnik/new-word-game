const headerEl = document.getElementById('myHeader')
const mainEl = document.getElementById('gameBoard')
const btnEl = document.getElementById('startGame')
const timerEl = document.getElementById('timer')
const enterEl = document.getElementById('enter')
const formEl = document.getElementById('form')



function startGame(event) {
    event.preventDefault();
    const input = enterEl.value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cec63751bcmsh6ce18b67ce4ff83p135998jsn883aacf8dbc7',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };
    
    fetch(`https://wordsapiv1.p.rapidapi.com/words/${input}`, options)
        .then(response => response.json())
        .then(data => {
            if (data[0].success === false) {
                enterEl.textContent = ""
                enterEl.setAttribute('placeholder', 'Not a valid word')
            }
        })
        .catch(err => console.error(err));
}

function startTimer() {
    let gameTime = 120
    const timerInterval = setInterval(function() {
        timerEl.textContent = gameTime;
        --gameTime;

        if (timerEl.textContent === 0) {
            clearInterval(timerInterval)
        }
    }, 1000)
}

btnEl.addEventListener('click', startGame)
// btnEl.addEventListener('click', startTimer())
// formEl.addEventListener('submit', startGame())



// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://wordsapiv1.p.rapidapi.com/words/',
//   params: {letters: '12', limit: '100', page: '2', hasDetails: 'inCategory,partOf'},
//   headers: {
//     'X-RapidAPI-Key': 'cec63751bcmsh6ce18b67ce4ff83p135998jsn883aacf8dbc7',
//     'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });