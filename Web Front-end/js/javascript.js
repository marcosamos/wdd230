const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Augost",
  "Octuver",
  "September",
  "November",
  "Dicember"
];

const currentDay = new Date();
const dayName = dayNames[currentDay.getDay()];
const monthName = months[currentDay.getMonth()];
const currentDate = `Last Update ${dayName}/ ${currentDay.getDate()} / ${monthName}/ ${currentDay.getFullYear()}`;
document.getElementById("footer_scrip_time").textContent = currentDate;