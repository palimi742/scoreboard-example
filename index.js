let homeScore = 0;
let guestScore = 0;


let homeScoreElement = document.getElementById("home-score");
console.log(homeScoreElement)
let guestScoreElement = document.getElementById("guest-score");

function add_one_home(){
    homeScore += 1;
    homeScoreElement.textContent = homeScore;
}
function add_two_home(){
    homeScore += 2;
    homeScoreElement.textContent = homeScore;
}
function add_three_home(){
    homeScore += 3;
    homeScoreElement.textContent = homeScore;
}

function add_one_guest(){
    guestScore += 1;
    guestScoreElement.textContent = guestScore;
}
function add_two_guest(){
    guestScore += 2;
    guestScoreElement.textContent = guestScore;
}
function add_three_guest(){
    guestScore += 3;
    guestScoreElement.textContent = guestScore;
}

function reset(){
    guestScore = 0;
    homeScore = 0;
    guestScoreElement.textContent = guestScore;
    homeScoreElement.textContent = homeScore;
}
