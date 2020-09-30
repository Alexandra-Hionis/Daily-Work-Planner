// When I open the planner, current day is displayed at the top of the calendar
// I am presented with time blocks for standard business hours 9-5
// each time block is color-coded to indicate whether it is in the past, present, or future
// When I click into a time block I can enter an event
// When save button is clicked the text for that event is saved in local storage
// If page is refreshed, the saved events persist


// use Moment.js to display current date in div
let currentTime = moment().format('dddd, MMMM Do YYYY');







//
$(document).ready(function () {
    checkHour();

    // loop through 9am to 5pm 
    // for each hour pull from local storage
    // display text in matching textarea
    // end

    // loop through local storage
    // for each key/value
    // display in matching textarea
    // end

    for (let index = 0; index < localStorage.length; index++) {
        let key = localStorage.key(index); // "10", "17", "9"
        let value = localStorage.getItem(key); // "Eat breakfast again"
        let textarea = $(`textarea[data-hour=${key}]`);
        textarea.val(value);
    }

    $(".saveBtn").click(function () {
        var button = $(this);
        var row = button.parent();
        var textEntry = row.find(".textEntry");
        var hour = textEntry.data("hour");
        var text = textEntry.val();
        localStorage.setItem(hour, text);
        console.log(hour, text);
    });


    // window.location.reload()



    // $('.saveBtn').click(function (event) {
    //     let button = event.target;
    //     let row = $(button.parentElement); 
    //     let textarea = row.find("textarea");
    //     let text = textarea.value;

    //     // grab the text in the textarea
    //     // grab the hour from the textarea
    //     let hour = parseInt(textarea.data("hour"));
    //     // save text into local storage under the key: hour

    //     localStorage.setItem(hour, text);
    //     console.log(localStorage);

    // });
});




// Get the current time and compare time blocks

//Change textarea background color based on time
var checkHour = function () {
    //Get Current time
    let currentHour = parseInt(moment().format("HH")); // "12", "13", "14"

    //get all elements with class "textarea"
    var timeBlockElements = $("textarea");

    //loop through textarea classes
    for (var i = 0; i < timeBlockElements.length; i++) {
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
};



function displayTime() {
    $("currentDay").innerHTML = currentTime;

}
setInterval(displayTime, 1000);
displayTime();