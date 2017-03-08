//Set var to keep track of the click count
var clickCounter = 0;

document.getElementById("shape").onclick = function () {

    //increment the counter every time shape is clicked
    clickCounter = clickCounter + 1;
    document.getElementById("counter").innerHTML = clickCounter;

    //To get the id 'shape' to disappear
    document.getElementById("shape").style.display = "none";

    appearAfterDelay();

    function youWin() {
        var maxTarget = 0;

        maxTarget = document.getElementById("textInput").value;

        if (clickCounter == maxTarget) {
            alert("You win! You've reached the Max Target: " + clickCounter);
            location.reload();
        }
    }
    youWin();
}

//This function will make the shape reappear
function makeShapeAppear() {

    //Randomize the top postion of the shape
    var top = Math.random() * 300;

    //Randomize the left postion of the shape
    var left = Math.random() * 500;

    //Move the shape position towards the top
    document.getElementById("shape").style.top = top + "px";
    //Move the shape position towards the left
    document.getElementById("shape").style.left = left + "px";
    //Shows the shape
    document.getElementById("shape").style.display = "block";


}

//This function will delay the time the shape appear            
function appearAfterDelay() {
    //It makes the shape reappear in random amount of time
    setTimeout(makeShapeAppear, Math.random() * 200);

}

//This function provides a timer and once the timer is done, it will alert a message telling the user that the game is over.
function countDown(elementName, minutes, seconds) {
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits(n) {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer() {
        msLeft = endTime - (+new Date);
        if (msLeft < 1000) {
            element.innerHTML = "Game Over";
            alert("GameOver! Thank you for playing. You've hit " + clickCounter + " targets.");
            location.reload();

        } else {
            time = new Date(msLeft);
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());
            setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
        }
    }

    element = document.getElementById(elementName);
    endTime = (+new Date) + 1000 * (60 * minutes + seconds) + 500;
    updateTimer();
}

document.getElementById("start").onclick = function () {
    var timeEntered = "";
    var textEntered = "";

    //Set the max target in the game for the user
    textEntered = document.getElementById("textInput").value;
    document.getElementById("text").innerHTML = textEntered;

    //Set the time in the game for the user
    timeEntered = document.getElementById("timeInput").value;
    document.getElementById("countDown").innerHTML = timeEntered;

    countDown("countDown", 0, timeEntered);
    appearAfterDelay();

    //Hide the start button once game begins
    document.getElementById("start").style.display = "none";
}

document.getElementById("restart").onclick = function () {
    location.reload();
}
