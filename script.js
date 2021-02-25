//stone paper scissors game
var flag = 0;
function decide(yourChoice) {
    if (flag == 1) {
        removeAll();
    }

    // console.log(yourChoice.id); //will give the id of the chosen button
    yourChoice = yourChoice.id;
    console.log(yourChoice);
    computerChoice = Math.floor(Math.random() * 3);//will return 0,1,2

    if (computerChoice === 0) {
        computerChoice = "stone";
    }
    else if (computerChoice === 1) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    console.log(computerChoice);
    //if both choices are same
    if (computerChoice === yourChoice) {
        message = "You tied!";
    }
    if (yourChoice === "stone" && computerChoice === "paper") {
        message = "You lost!";
    }
    if (yourChoice === "stone" && computerChoice === "scissors") {
        message = "You win!";
    }
    if (yourChoice === "paper" && computerChoice === "stone") {
        message = "You win!";
    }
    if (yourChoice === "paper" && computerChoice === "scissors") {
        message = "You lost!";
    }
    if (yourChoice === "scissors" && computerChoice === "stone") {
        message = "You lost!";
    }
    if (yourChoice === "scissors" && computerChoice === "paper") {
        message = "You win!";
    }
    console.log("final message : ", message);
    showResult(yourChoice, computerChoice, message);
}
function showResult(yourChoice, computerChoice, message) {
    //show the result on the front end
    var yourHeading = document.createElement("h4");
    yourHeading.setAttribute('id', 'yourHeading')
    yourHeading.textContent = "You"
    var src = document.querySelector('.headings');
    src.appendChild(yourHeading);

    var computerHeading = document.createElement("h4");
    computerHeading.setAttribute('id', 'computerHeading');
    computerHeading.textContent = "Computer"
    var src = document.querySelector('.headings');
    src.appendChild(computerHeading);

    yourImage = `${yourChoice}` + ".jpg";
    var img1 = document.createElement("img");
    img1.src = yourImage;
    var src = document.querySelector('.images');
    src.appendChild(img1);

    computerImage = `${computerChoice}` + ".jpg";
    var img2 = document.createElement("img");
    img2.src = computerImage;
    var src = document.querySelector('.images');
    src.appendChild(img2);

    var winnerMessage = document.createElement("h1");
    winnerMessage.setAttribute('id', 'winnerMessage');
    winnerMessage.textContent = message;
    var src = document.querySelector('.winnerMessage');
    src.appendChild(winnerMessage);
    flag = 1;

}

function removeAll() {
    document.querySelector('.images').innerHTML = '';
    document.querySelector('.headings').innerHTML = '';
    document.querySelector('.winnerMessage').innerHTML = '';
}
