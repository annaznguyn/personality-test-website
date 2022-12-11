// STORE "RESULT"
var result = "";

// THIS FUNCTION STORES AND MANIPULATES ELEMENTS OF HTML BY USING 'VAR' AND IF/ELSE IF/ELSE CONDITIONS
function function1() {
    
    let user_name = document.getElementById("name").value;

    // USE 'VAR' TO STORE THE VALUES OF THE OPTIONS OF QUESTION 1
    var optn1 = document.getElementById("optn1");
    var optn2 = document.getElementById("optn2");

    // USE 'VAR' TO STORE THE VALUES OF THE OPTIONS OF QUESTION 2
    var optn3 = document.getElementById("optn3");
    var optn4 = document.getElementById("optn4");

    // USE 'VAR' TO STORE THE VALUES OF THE OPTIONS OF QUESTION 3
    var optn5 = document.getElementById("optn5");
    var optn6 = document.getElementById("optn6");

    // USE 'VAR' TO STORE THE VALUES OF THE OPTIONS OF QUESTION 4
    var optn7 = document.getElementById("optn7");
    var optn8 = document.getElementById("optn8");

    // SET CONDITIONS USING IF/ELSE
    // IF NO USER NAME IS INPUT, THE PAGE WILL ALERT THE MESSAGE ONLY
    if (user_name == "") {

        // THE PAGE WILL ALERT THE MESSAGE WHEN ALL OPTIONS ARE SELECTED
        if (optn1.checked == true && optn3.checked == true && optn5.checked == true && optn7.checked == true) {
            result = "introvert" 
            alert("Congratulations! You are an " + result + "!");
        }
    
        else if (optn1.checked == true && optn4.checked == true && optn5.checked == true && optn8.checked == true) {
            result = "introvert" 
            alert("Congratulations! You are an " + result + "!");
        }

        else if (optn1.checked == true && optn4.checked == true && optn6.checked == true && optn7.checked == true) {
            result = "extrovert" 
            alert("Congratulations! You are an " + result + "!");
        }

        else if (optn1.checked == true && optn4.checked == true && optn6.checked == true && optn8.checked == true) {
            result = "extrovert" 
            alert("Congratulations! You are an " + result + "!");
        }

        else if (optn1.checked == true && optn4.checked == true && optn5.checked == true && optn7.checked == true) {
            result = "introvert" 
            alert("Congratulations! You are an " + result + "!");
        }

        else if (optn1.checked == true && optn3.checked == true && optn6.checked == true && optn7.checked == true) {
            result = "extrovert" 
            alert("Congratulations! You are an " + result + "!");
        }

        else if (optn1.checked == true && optn3.checked == true && optn5.checked == true && optn8.checked == true) {
            result = "extrovert" 
            alert("Congratulations! You are an " + result + "!");
        }

        else if (optn2.checked == true && optn3.checked == true && optn5.checked == true && optn7.checked == true) {
            result = "introvert" 
            alert("Congratulations! You are an " + result + "!");
        }

        else if (optn2.checked == true && optn3.checked == true && optn6.checked == true && optn8.checked == true) {
            result = "extrovert" 
            alert("Congratulations! You are an " + result + "!");
        }

        else if (optn2.checked == true && optn3.checked == true && optn6.checked == true && optn7.checked == true) {
            result = "extrovert" 
            alert("Congratulations! You are an " + result + "!");
        }

        else if (optn2.checked == true && optn3.checked == true && optn5.checked == true && optn8.checked == true) {
            result = "extrovert" 
            alert("Congratulations! You are an " + result + "!");
        }

        else if (optn2.checked == true && optn4.checked == true && optn5.checked == true && optn7.checked == true) {
            result = "introvert" 
            alert("Congratulations! You are an " + result + "!");
        }

        else if (optn2.checked == true && optn4.checked == true && optn6.checked == true && optn7.checked == true) {
            result = "introvert" 
            alert("Congratulations! You are an " + result + "!");
        }

        else if (optn2.checked == true && optn4.checked == true && optn6.checked == true && optn8.checked == true) {
            result = "introvert" 
            alert("Congratulations! You are an " + result + "!");
        }

        else if (optn1.checked == true && optn3.checked == true && optn6.checked == true && optn8.checked == true) {
            result = "extrovert" 
            alert("Congratulations! You are an " + result + "!");
        }

        else if (optn2.checked == true && optn4.checked == true && optn5.checked == true && optn8.checked == true) {
            result = "introvert" 
            alert("Congratulations! You are an " + result + "!");
        }

        // THE PAGE WILL ALERT THE MESSAGE WHEN ONE OR MORE OR NO OPTIONS ARE SELECTED
        else {
            alert("You must select an option for each question!");
        }
    
    // IF USER NAME IS INPUT, THE PAGE WILL ALERT THE MESSAGE WITH THE NAME INPUT
    }
    else {
    
        // THE PAGE WILL ALERT THE MESSAGE WHEN ALL OPTIONS ARE SELECTED
        if (optn1.checked == true && optn3.checked == true && optn5.checked == true && optn7.checked == true) {
            result = "introvert"
            alert("Congratulations, " + user_name + "! You are an " + result + "!");
        }
    
        else if (optn1.checked == true && optn4.checked == true && optn5.checked == true && optn8.checked == true) {
            result = "introvert"
            alert("Congratulations, " + user_name + "! You are an " + result + "!");
        }
    
        else if (optn1.checked == true && optn4.checked == true && optn6.checked == true && optn7.checked == true) {
            result = "extrovert"
            alert("Congratulations, " + user_name + "! You are an " + result + "!");
        }

        else if (optn1.checked == true && optn4.checked == true && optn6.checked == true && optn8.checked == true) {
            result = "extrovert"
            alert("Congratulations, " + user_name + "! You are an " + result + "!");
        }

        else if (optn1.checked == true && optn4.checked == true && optn5.checked == true && optn7.checked == true) {
            result = "introvert"
            alert("Congratulations, " + user_name + "! You are an " + result + "!");
        }

        else if (optn1.checked == true && optn3.checked == true && optn6.checked == true && optn7.checked == true) {
            result = "extrovert"
            alert("Congratulations, " + user_name + "! You are an " + result + "!");
        }

        else if (optn1.checked == true && optn3.checked == true && optn5.checked == true && optn8.checked == true) {
            result = "extrovert"
            alert("Congratulations, " + user_name + "! You are an " + result + "!");
        }

        else if (optn2.checked == true && optn3.checked == true && optn5.checked == true && optn7.checked == true) {
            result = "introvert"
            alert("Congratulations, " + user_name + "! You are an " + result + "!");
        }

        else if (optn2.checked == true && optn3.checked == true && optn6.checked == true && optn8.checked == true) {
            result = "extrovert"
            alert("Congratulations, " + user_name + "! You are an " + result + "!");
        }

        else if (optn2.checked == true && optn3.checked == true && optn6.checked == true && optn7.checked == true) {
            result = "extrovert"
            alert("Congratulations, " + user_name + "! You are an " + result + "!");
        }

        else if (optn2.checked == true && optn3.checked == true && optn5.checked == true && optn8.checked == true) {
            result = "extrovert"
            alert("Congratulations, " + user_name + "! You are an " + result + "!");
        }

        else if (optn2.checked == true && optn4.checked == true && optn5.checked == true && optn7.checked == true) {
            result = "introvert"
            alert("Congratulations, " + user_name + "! You are an " + result + "!");
        }

        else if (optn2.checked == true && optn4.checked == true && optn6.checked == true && optn7.checked == true) {
            result = "introvert"
            alert("Congratulations, " + user_name + "! You are an " + result + "!");
        }

        else if (optn2.checked == true && optn4.checked == true && optn6.checked == true && optn8.checked == true) {
            result = "introvert"
            alert("Congratulations, " + user_name + "! You are an " + result + "!");
        }

        else if (optn1.checked == true && optn3.checked == true && optn6.checked == true && optn8.checked == true) {
            result = "extrovert"
            alert("Congratulations, " + user_name + "! You are an " + result + "!");
        }

        else if (optn2.checked == true && optn4.checked == true && optn5.checked == true && optn8.checked == true) {
            result = "introvert"
            alert("Congratulations, " + user_name + "! You are an " + result + "!");
        }

        // THE PAGE WILL ALERT THE MESSAGE WHEN ONE OR MORE OR NO OPTIONS ARE SELECTED
        else {
            alert("You must select an option for each question, " + user_name + "!");
        }
    }
}

// SAVE THE RESULT TO A LINK OF A TEXT FILE TO DOWNLOAD
function saveTextAsFile() {

    var textFileAsBlob = new Blob([result], {type:'text/plain'});

    var downloadLink = document.createElement("a");
    downloadLink.download = "Result.txt";   
    downloadLink.innerHTML = "Download File";
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    downloadLink.click();
}

// CREATE A COUNTDOWN TIMER - DURATION: 1 MINUTE
function countDownTimer(duration, display) {
    var time = duration, minutes, seconds;
    var countDown = setInterval(function setTime() {
        minutes = parseInt(time / 60, 10);
        seconds = parseInt(time % 60, 10);

        // DISPLAY '02:59' INSTEAD OF '2:59' WHEN MINS/SECS < 10
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // DISPLAY '02:59' INSTEAD OF '0259'
        display.textContent = minutes + ":" + seconds;

        // DISPLAY THE MESSAGE WHEN TIME IS OUT AND CLOSE THE WINDOW
        if (--time < 0) {
            time = duration;
            clearInterval(countDown);
            alert("OOPSIE!! Time's out! Hope you had fun!");
            window.close();
        }
    }, 1000);
}

// SET TIME DURATION
window.onload = function setTime() {
    var setDuration = 60,
        display = document.querySelector('#time');
    countDownTimer(setDuration, display);
};