let homeScore = 0;
let guestScore = 0;


let homeScoreElement = document.getElementById("home-score");
console.log(homeScoreElement)
let guestScoreElement = document.getElementById("guest-score");

function addPoints(team, points){
    if (team == "home"){
        homeScore += points;
        homeScoreElement.textContent = homeScore;
    }
    else{
        guestScore += points;
        guestScoreElement.textContent = guestScore;
    }
}

function reset(){
    homeScore = 0;
    guestScore = 0;
    homeScoreElement.textContent = homeScore;
    guestScoreElement.textContent = guestScore;
}