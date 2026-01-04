let testText = "On the window to the right, click on Explorer as shown at 1 in the screnshot";
let startTime, endTime;

function startTest(){
    // Set the test text
    document.getElementById("inputText").value = testText;

    // Reset user input and output
    let userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();

    // clear output
    document.getElementById("output").innerHTML = "";

    // Start timer
    startTime = new Date().getTime();
}

function endTest(){
    endTime = new Date().getTime();

    // Disable typing
    document.getElementById("userInput").readOnly = true;

    // Calculate time 
    var timeElapsed = (endTime-startTime)/ 1000; // in seconds
    var userTypedText = document.getElementById("userInput").value;

    var typedWords = userTypedText
        .trim()
        .split(/\s+/)
        .filter(word => word != "")
        .length;

    var wpm = 0; // Default value

    if(timeElapsed > 0){
        wpm = Math.round((typedWords / timeElapsed)*60);
    }

    // Display the results
    document.getElementById("output").innerHTML = `
    <h2>Typing Test Results:</h2>
    <p>Words Typed: ${typedWords}</p>
    <p>Time Elapsed: ${timeElapsed.toFixed(2)} seconds</p>
    <p>Words Per Minute (WPM): ${wpm}</p>
    `;
}

