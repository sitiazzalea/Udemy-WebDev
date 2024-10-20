// alert("it worked!");
var buttonColors = ["red", "blue", "yellow", "green"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;

var level = 0;

$(document).keypress(function(){
    if (!started) {
        $("level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").on("click", function(){
    // alert($(this).attr("id") + " is clicked");
    // var userChosenColor = $("#" + chosenColor);
    var userChosenColor = $(this).attr("id");
    // console.log("user chosen color: " + userChosenColor);
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);

    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }

    else{
        // 1. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
        var wrongAudio = new Audio('sounds/wrong.mp3');
        wrongAudio.play();
        // 2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
        $(document.body).addClass("game-over");
        setTimeout(function(){
            $(document.body).removeClass("game-over");
        }, 200);
        // 3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
        $("h1").text("Game Over, Press Any Key to Restart");

        // 2. Call startOver() if the user gets the sequence wrong.
        startOver();
    }
}

// 1. Create a new function called startOver().
function startOver() {
// 3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
    level = 0;
    gamePattern = [];
    started = false;

}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
} 

function animatePress(currentColor) {

        // $("button").click(function() {
        //     // $(this).attr("id").addClass("pressed");
        //     $(this).attr("id").addClass("pressed").delay(100).removeClass("pressed");
        //     // $(this).attr("id").removeClass("pressed");
        // });
    
        $("#" + currentColor).addClass("pressed");

        setTimeout(function() {
            $("#" + currentColor).removeClass("pressed");
        }, 100);
}


function nextSequence() {
    //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
    userClickedPattern = [];
    level++;

    $("#level-title").text("Level " + level);

    var randNum =  Math.floor((Math.random()*4));

    var chosenColor = buttonColors[randNum];
    // console.log("random color: " + chosenColor);

    gamePattern.push(chosenColor);
       
    $("#" + chosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);   
    
    var audio = new Audio("sounds/" + chosenColor + ".mp3");
    audio.play();


}





