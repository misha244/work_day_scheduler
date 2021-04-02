const containerDiv = $(".container");
const textAreas = containerDiv.children().children("textarea");

// set current time fn with moment.js
const setCurrentTime = () => {
  const currentTime = moment().format("dddd, MMMM Do YYYY");
  $("#currentDay").text(currentTime);
};

// update time blocks fn - adjust colours according to the current hour
const updateTimeBlocks = () => {
  // get current hour from moment.js
  const currentHour = moment().format("H");

  // convert str number to int number
  const currentHourInt = parseInt(currentHour);
  // set time classes to text
  const setTimeClass = (index) => {
    const myTimeString = textAreas[index].dataset.time;
    // convert to int
    const myTimeInt = parseInt(myTimeString);
    if (myTimeInt === currentHourInt) {
      $(textAreas[index]).addClass("present");
    } else if (myTimeInt > currentHourInt) {
      $(textAreas[index]).addClass("future");
    } else {
      $(textAreas[index]).addClass("past");
    }
  };
  textAreas.each(setTimeClass);
};

// save input into local storage using on click event
$(".saveBtn").click(function () {
  const textInputItem = localStorage.getItem();
});
// call functions with jquery
$(document).ready(setCurrentTime);
$(document).ready(updateTimeBlocks);
