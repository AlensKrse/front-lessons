function playSoundDependOnClick(event) {
    playDependOnKey(event.target.innerText);
    buttonAnimation(event.target.innerText);
}

function playSoundDependOnKeyDown(event) {
    playDependOnKey(event.key);
    buttonAnimation(event.key);
}

function playDependOnKey(key) {
    switch (key) {
        case "w":
            new Audio("./sounds/crash.mp3").play();
            break;
        case "a":
            new Audio("./sounds/kick-bass.mp3").play();
            break;
        case "s":
            new Audio("./sounds/snare.mp3").play();
            break;
        case "d":
            new Audio("./sounds/tom-1.mp3").play();
            break;
        case "j":
            new Audio("./sounds/tom-2.mp3").play();
            break;
        case "k":
            new Audio("./sounds/tom-3.mp3").play();
            break;
        case "l":
            new Audio("./sounds/tom-4.mp3").play();
            break;
        default:
            console.log(key);
    }
}


// function buttonAnimation(key) {
//     var button =  document.querySelector("." + key);
//     button.classList.add("pressed");
 
//     setTimeout(function() {
//      button.classList.remove("pressed");
//     }, 50);
//  }
 
 
//  document.querySelectorAll(".drum").forEach(selector => {
//      selector.addEventListener("click", playSoundDependOnClick);
//  });
 
//  document.addEventListener("keydown", playSoundDependOnKeyDown);

function buttonAnimation(key) {
   var button = $("." + key);
   button.addClass("pressed");

   setTimeout(function() {
    button.removeClass("pressed");
   }, 50);
}


$(".drum").click(playSoundDependOnClick);
$(document).keypress(playSoundDependOnKeyDown);

