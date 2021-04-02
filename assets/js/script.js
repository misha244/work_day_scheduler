const containerDiv = $(".container");
const textAreas = containerDiv.children().children("textarea");
// set elements for each time block
const nineAmElement = document.querySelector("#user-input-9");
const tenAmElement = document.querySelector("#user-input-10");
const elevenAmElement = document.querySelector("#user-input-11");
const twelevePmElement = document.querySelector("#user-input-12");
const onePmElement = document.querySelector("#user-input-13");
const twoPmElement = document.querySelector("#user-input-14");
const threePmElement = document.querySelector("#user-input-15");
const fourPmElement = document.querySelector("#user-input-16");
const fivePmElement = document.querySelector("#user-input-17");
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

//
//const saveTasksToLocal = (event) => {
//  event.preventDefault();
//
//  const target = $(event.target);
//};

// call functions with jquery
$(document).ready(setCurrentTime);
$(document).ready(updateTimeBlocks);
$(".saveBtn").on("click", saveTasksToLocal);
