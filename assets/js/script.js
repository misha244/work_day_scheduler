const containerDiv = $(".container");
const textAreas = containerDiv.children().children("textarea");

// set current time fn with moment.js
const setCurrentTime = () => {
  const currentTime = moment().format("dddd, MMMM Do YYYY");
  $("#currentDay").text(currentTime);
};

// declared as a function expression due to 'this'
const onSave = function () {
  // Get nearby values of the input in JQuery
  const text = $(this).siblings(".input").val();
  const time = $(this).parent().attr("id");

  // Save text in local storage
  localStorage.setItem(time, text);
};

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

const onReady = () => {
  // saveBtn click listener
  $(".saveBtn").on("click", onSave);
  // Get item from local storage if any
  $("#input8 .input").val(localStorage.getItem("input8"));
  $("#input9 .input").val(localStorage.getItem("input9"));
  $("#input10 .input").val(localStorage.getItem("input10"));
  $("#input11 .input").val(localStorage.getItem("input11"));
  $("#input12 .input").val(localStorage.getItem("input12"));
  $("#input13 .input").val(localStorage.getItem("input13"));
  $("#input14 .input").val(localStorage.getItem("input14"));
  $("#input15 .input").val(localStorage.getItem("input15"));
  $("#input16 .input").val(localStorage.getItem("input16"));
  $("#input17 .input").val(localStorage.getItem("input17"));

  updateTimeBlocks();
};
$(document).ready(onReady);
