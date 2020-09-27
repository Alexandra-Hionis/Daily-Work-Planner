// When I open the planner, current day is displayed at the top of the calendar
// I am presented with time blocks for standard business hours 9-5
// each time block is color-coded to indicate whether it is in the past, present, or future
// When I click into a time block I can enter an event
// When save button is clicked the text for that event is saved in local storage
// If page is refreshed, the saved events persist



// use Moment.js to display current date in div
let currentTime = moment().format('MMMM Do YYYY, h:mm a');
console.log(currentTime);

function displayTime(){
    document.getElementById("currentDay").innerHTML = currentTime;

};

