// Detecting button clicks

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function() {
   
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

});

}

// Detecting keyboard press

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})


function makeSound(key) {
    switch (key) {
        case "a":
            var kick = new Audio("sounds/Kick.wav");
            kick.play();
            break;

        case "d":
            var snare = new Audio("sounds/Snare.wav");
            snare.play();
            break;

        case "t":
            var hihat = new Audio("sounds/HiHat.wav");
            hihat.play();
            break;

        case "u":
            var crash = new Audio("sounds/Crash.wav");
            crash.play();
            break;

        case "h":
            var tom1 = new Audio("sounds/Tom1.wav");
            tom1.play();
            break;

        case "g":
            var tom2 = new Audio("sounds/Tom2.wav");
            tom2.play();
            break;

        case "f":
            var tom3 = new Audio("sounds/Tom3.wav");
            tom3.play();
            break;

        default: 
        console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey) {
   var activeButton = document.querySelector("." + currentKey);

   activeButton.classList.add("pressed");
   setTimeout(function() {
       activeButton.classList.remove("pressed");
   }, 100);
}