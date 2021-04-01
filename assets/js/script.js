const timeBlockElement = document.getElementById("timeblockDiv");
const saveButton = document.getElementById("saveBtn");
const currentTime = document.getElementById("currentDay");

const setCurrentTime = () => {
  currentTime.textContent = moment().format("dddd, MMMM Do YYYY, LTS");
  return currentTime;
};

window.addEventListener("load", setCurrentTime);
//TODO
//declare timeblock element
//get current time with moment.js

//set up a function that adjusts time block classes accordingly to time //use a for each
///set class names
//const updateTimeBlocks = () => {}

//saveBtn - save to local storage and load on refresh
/// event listener
//set text content of textarea
