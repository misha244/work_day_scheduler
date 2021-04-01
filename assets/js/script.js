const timeBlockElement = document.getElementById("timeBlockDiv");
const saveButton = document.getElementById("saveBtn");
const currentTime = document.getElementById("currentDay");

// set current time fn with moment.js
const setCurrentTime = () => {
  currentTime.textContent = moment().format("dddd, MMMM Do YYYY, LTS");
  return currentTime;
};
// time blocks array
// timeBlocks = [];
// update time blocks fn
//const updateTimeBlocks = () => {}

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
//declare timeblock element
//get current time with moment.js

///set class names

//saveBtn - save to local storage and load on refresh
/// event listener
//set text content of textarea
