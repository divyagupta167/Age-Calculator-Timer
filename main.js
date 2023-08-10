let id = (id) => document.getElementById(id);
let isDOBOpen = false;
let dateOfBirth;
const settingCogEl = document.getElementById("settingsIcon");
const settingContentEl = document.getElementById("settingContent");
const initialTextEl = document.getElementById("initialText");
const afterDOBBtnTextEl = document.getElementById("afterDOBBtnText");
const dobButtonEl = document.getElementById("dobButton");
const dobInputEl = document.getElementById("dobInput");

let yearEl = id("years"),
  monthEl = id("months"),
  dayEl = id("days"),
  hourEl = id("hours"),
  minuteEl = id("minutes"),
  secondEl = id("seconds");

const makeTwoDigit = (str) => {
  return str < 10 ? `0${str}` : `${str}`;
};

const toggleDateOfBirthSelector = () => {
  if (isDOBOpen) {
    settingContentEl.classList.add("hide");
  } else {
    settingContentEl.classList.remove("hide");
  }
  isDOBOpen = !isDOBOpen;
};

const updateAge = () => {
  const currentDate = new Date();
  const dateDiff = currentDate - dateOfBirth;
  const year = Math.floor(dateDiff / (60 * 60 * 24 * 365 * 1000));
  const month = Math.floor((dateDiff / (60 * 60 * 24 * 365 * 1000)) % 12);
  const day = Math.floor((dateDiff / (60 * 60 * 24 * 1000)) % 30);
  const hour = Math.floor((dateDiff / (60 * 60 * 1000)) % 24);
  const minute = Math.floor((dateDiff / (60 * 1000)) % 60);
  const second = Math.floor((dateDiff / 1000) % 60);
  //   console.log({
  //     year,month,day,hour,minute,second
  //   });

  yearEl.innerHTML = makeTwoDigit(year);
  monthEl.innerHTML = makeTwoDigit(month);
  dayEl.innerHTML = makeTwoDigit(day);
  hourEl.innerHTML = makeTwoDigit(hour);
  minuteEl.innerHTML = makeTwoDigit(minute);
  secondEl.innerHTML = makeTwoDigit(second);
};

const LocalStorageGetter = () => {
  const year = localStorage.getItem("year");
  const month = localStorage.getItem("month");
  const date = localStorage.getItem("date");
  const hour = localStorage.getItem("hour");
  const minute = localStorage.getItem("minute");
  const second = localStorage.getItem("second");

  if (year && month && date && hour && minute && second) {
    dateOfBirth = new Date(year, month, date, hour, minute, second);
  }

  updateAge();
};

const contentToggler = () => {
  updateAge();
  if (dateOfBirth) {
    initialTextEl.classList.add("hide");
    afterDOBBtnTextEl.classList.remove("hide");
  } else {
    afterDOBBtnTextEl.classList.add("hide");
    initialTextEl.classList.remove("hide");
  }
};

const setDOBHandler = () => {
  const dateString = dobInputEl.value;
  dateOfBirth = dateString ? new Date(dateString) : null;

  if (dateOfBirth) {
    localStorage.setItem("year", dateOfBirth.getFullYear());
    localStorage.setItem("month", dateOfBirth.getMonth());
    localStorage.setItem("day", dateOfBirth.getDay());
    localStorage.setItem("hour", dateOfBirth.getHours());
    localStorage.setItem("minute", dateOfBirth.getMinutes());
    localStorage.setItem("second", dateOfBirth.getSeconds());
  }
  setInterval(() => updateAge(), 1000);
  contentToggler();
};

LocalStorageGetter();
contentToggler();

settingCogEl.addEventListener("click", toggleDateOfBirthSelector);
dobButtonEl.addEventListener("click", setDOBHandler);
