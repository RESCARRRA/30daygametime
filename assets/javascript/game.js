// document.ready event occurs when the DOM has been loaded. 
$(document).ready(function() {
  // Declare and define Global Variables & initial assignments using jQuery
  var wins = 0;
  var losses = 0;
  var currentScore = 0;
  var counter = 0;
  var targetNumber = Math.floor(Math.random() * (120 - 19) + 1);
  var numberOptions = [4, 5, 6, 7];
  // Present the targetNumber to the user at the top of the screen 
  $("#number-to-guess").text(targetNumber);
  //Using the indices of the array, numberOptions, Assign values to each crystal
  $("#one").attr("data-crystalvalue", numberOptions[0]);
  $("#two").attr("data-crystalvalue", numberOptions[1]);
  $("#three").attr("data-crystalvalue", numberOptions[2]);
  $("#four").attr("data-crystalvalue", numberOptions[3]);
  // =================================================================================
  // ON CLICK:
  // When user clicks a crystal
  // Crystal's current value, as indicated by the use of '$(this)'
  // is passed to the local variable crystalValue
  // crystalValue is converted into a integer
  // and added to the counter and alerted to the user
  // =================================================================================
  $("img").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    //alert("New score: " + counter);
    // =================================================================================
    // CONDITIONALS:
    // If counter/current score is equivalent to the value of targetNumber
    // * Then, 1 point is added to user's Wins 
    // * User receives a You Win!! alert
    // * Trial resets
    // Else, if counter/current score exceeds the value of targetNumber
    // * Then, 1 point is added to user's Losses 
    // * User receives a You Lose!! alert
    // * Trial resets
    // =================================================================================
    if (counter === targetNumber) {
      alert("Woohoo! You won that round!")
      wins++;
      reset();
    } else if (counter >= targetNumber) {
      alert("Ouch! You lost that round!")
      losses++;
      reset();
    }
    // =================================================================================
    // Update wins & losses (html) after each trial
    // =================================================================================
    var html = "<p><h3>Wins: " + wins + "</h3></p>" + "<p><h3>Losses: " + losses + "</h3></p>";
    document.querySelector("#score").innerHTML = html;
    var html = "<p><h3>Current Score: " + counter + "</h3></p>";
    document.querySelector("#current-score").innerHTML = html;
  });
  // =================================================================================
  // Define reset function to
  // set count to 0; targetNumber = *randomly generated value to be displayed
  // randomly generate 4 numbers to populate array, numberOptions
  // reassign the data-crystalvalues = numberOptions[i] to each crystal
  // =================================================================================
  function reset() {
    counter = 0;
    targetNumber = Math.floor(Math.random() * (120 - 19) + 1);
    $("#number-to-guess").text(targetNumber);
    numberOptions = Array.from({
      length: 4
    }, () => Math.floor(Math.random() * (12) + 1))
    $("#one").attr("data-crystalvalue", numberOptions[0]);
    $("#two").attr("data-crystalvalue", numberOptions[1]);
    $("#three").attr("data-crystalvalue", numberOptions[2]);
    $("#four").attr("data-crystalvalue", numberOptions[3]);
    console.log("array2:" + numberOptions)
  }
  $(".instruct").click(function() {
    $("#toggle").toggle("blind");
  });
});