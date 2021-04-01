const timeBlockElement = document.getElementById("timeBlockDiv");
const saveButton = document.getElementById("saveBtn");
const containerParent = document.getElementById("container");
// target data attribute
//const textAreas = containerParent.children().children(".text-area");

// set current time fn with moment.js
const setCurrentTime = () => {
  const currentTime = moment().format("dddd, MMMM Do YYYY, LT");
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
    const myTimeString = textAreas[index].dataset.mytime;
    // convert to int
    const myTimeInt = parseInt(myTimeString);
    if (myTimeInt === currentHourInt) {
      $(textAreas).addClass("present");
    } else if (myTimeInt > currentHourInt) {
      $(textAreas).addClass("future");
    } else {
      $(textAreas).addClass("past");
    }
  };
  textAreas.each(setTimeClass);
};

// create fn to save input to local storage
const setSaveButton = () => {
  const textInput = document.getElementById("text-area");

  if (textInput !== "") {
    localStorage.setItem("textInput");
  }
  location.href = "https://misha244.github.io/work_day_scheduler/";
};

window.addEventListener("load", setCurrentTime);
//TODO

//saveBtn - save to local storage and load on refresh
/// event listener
//set text content of textarea
