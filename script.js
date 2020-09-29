// When I open the planner, current day is displayed at the top of the calendar
// I am presented with time blocks for standard business hours 9-5
// each time block is color-coded to indicate whether it is in the past, present, or future
// When I click into a time block I can enter an event
// When save button is clicked the text for that event is saved in local storage
// If page is refreshed, the saved events persist


// use Moment.js to display current date in div
let currentTime = moment().format('dddd, MMMM Do YYYY');


function displayTime(){
    document.getElementById("currentDay").innerHTML = currentTime;

};
setInterval(displayTime, 1000);
displayTime()


// Display "save" on buttons
// $( "button.saveBtn" ).html( "Save" ) need to make it a save image instead?

//
$(document).ready(function () {
    checkHour();

    $('.saveBtn').click(function (event) {
        let button = event.target;
        let row = $(button.parentElement);
        let textarea = row.find("textarea");
        let text = textarea.value;

        // grab the text in the textarea
        // grab the hour from the textarea
        let hour = parseInt(textarea.data("hour"));
        // save text into local storage under the key: hour
      
        localStorage.setItem(hour, text);
    });
});




// Get the current time and compare time blocks

//Change textarea background color based on time
var checkHour = function () {
    //Get Current time
    let currentHour = parseInt(moment().format("HH")); // "12", "13", "14"

    //get all elements with class "taskarea"
    var timeBlockElements = $("textarea");

    //loop through taskarea classes
    for (var i = 0 ; i < timeBlockElements.length ; i++) {
        let textarea = $(timeBlockElements[i]);
        let hour = parseInt(textarea.data("hour")); // "9"

        // compare hour with currentHour
        if (hour < currentHour) {
            textarea.addClass("past");
        } else if (hour == currentHour) {
            textarea.addClass("present");
        } else {
            textarea.addClass("future");
        }
    }
}
