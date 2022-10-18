let left = [];
let checked = [];
let count = 0;
for (let i = 1; i <= 365; i++) {
  left.push(i);
}

function convert(dayOfYear) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let monthSizes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let month = 0;

  for (let i = 0; i < monthSizes.length; i++) {
    if (dayOfYear > monthSizes[i]) {
      dayOfYear -= monthSizes[i];
    } else {
      month = i;
      break;
    }
  }

  return months[month] + " " + dayOfYear;
}

function guess() {
  if (left.length == 0) {
    displayGuess("", true);
    return;
  }
  let guess = Math.floor(Math.random() * left.length);
  let guessDay = left[guess];
  let guessDate = convert(guessDay);

  left.splice(guess, 1);
  checked.push(guessDay);
  displayGuess(guessDate, false);
  displayChecked(guessDate);
}

function displayGuess(date, isDone) {
  let guessOutput = document.getElementById("guess");
  if (isDone) {
    guessOutput.innerHTML = "You've already generated all 365 days. Bitch."
  } else {
    guessOutput.innerHTML = date;
  }
}

function displayChecked(date) {
  let checkedOutput = document.getElementById("checked");
  if (checkedOutput.innerHTML == "") {
    checkedOutput.innerHTML += date;
  } else {
    checkedOutput.innerHTML += " | " + date;
  }
}
