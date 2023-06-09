//Завдання 1
function getCurrentTime() {
    var currentDate = new Date();

    var hours = currentDate.getHours().toString().padStart(2, '0');
    var minutes = currentDate.getMinutes().toString().padStart(2, '0');
    var seconds = currentDate.getSeconds().toString().padStart(2, '0');

    var daysOfWeek = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'пʼятниця', 'субота'];
    var dayOfWeek = daysOfWeek[currentDate.getDay()];

    var months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
    var month = months[currentDate.getMonth()];

    var day = currentDate.getDate().toString().padStart(2, '0');
    var year = currentDate.getFullYear();

    var formattedTime = hours + ':' + minutes + ':' + seconds;
    var formattedDate = dayOfWeek + ', ' + day + ' ' + month + ' ' + year + ' року';

    var currentTimeElement = document.getElementById('currentTime');
    currentTimeElement.textContent = formattedTime + ', ' + formattedDate;
}

getCurrentTime();
// Оновлення часу кожну секунду (1000 мс)
setInterval(getCurrentTime, 1000);

//Завдання 2
function playGuessNumberGame() {
    var randomNumber = Math.floor(Math.random() * 101);
    var attempts = 0;
    var guessed = false;

    while (!guessed) {
        var guess = prompt("Вгадайте число від 0 до 100:");

        if (guess === null) {
            break;
        }

        var parsedGuess = parseInt(guess);

        if (isNaN(parsedGuess)) {
            alert("Введено некоректне число. Будь ласка, спробуйте ще раз.");
            continue;
        }

        attempts++;

        if (parsedGuess === randomNumber) {
            alert("Ви вгадали число! За " + attempts + " спроб ви вгадали число " + randomNumber);
            guessed = true;
        } else {
            var difference = Math.abs(parsedGuess - randomNumber);
            var message = "";

            if (difference < 10) {
                if (parsedGuess < randomNumber) {
                    message = "Тепло більше!";
                } else {
                    message = "Тепло менше!";
                }
            } else if (difference < 30) {
                if (parsedGuess < randomNumber) {
                    message = "Гаряче більше!";
                } else {
                    message = "Гаряче менше!";
                }
            } else {
                if (parsedGuess < randomNumber) {
                    message = "Холодно більше!";
                } else {
                    message = "Холодно менше!";
                }
            }

            alert(message);
        }

        console.log(new Date().toLocaleString() + " Спроба " + attempts + ": число " + parsedGuess + " – не вірно");
    }

    var playAgain = confirm("Бажаєте зіграти ще раз?");

    if (playAgain) {
        playGuessNumberGame();
    }
}

playGuessNumberGame();
