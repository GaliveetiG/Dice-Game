let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () =>{
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () =>{
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', 'inactive')
}

if(darkmode === "active") enableDarkmode()


themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})


document.getElementById('play').addEventListener('click', rollDice);

function rollDice() {

var randomNumber1 = Math.floor(Math.random() * 6)+1;

var randomDiceImage =  "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);
 

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + "dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h2").innerHTML = "🙌 player1 wins!!";
}
else if( randomNumber2 > randomNumber1){
    document.querySelector("h2").innerHTML = "🙌 player2 wins!!";
}
else{
    document.querySelector("h2").innerHTML = "draw🤝";
}


}

