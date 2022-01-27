function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("menuBtn").classList.toggle("open");
}

const x = document.getElementById("menuBtn");

x.onclick = toggleMenu;

const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

const currentlyDate = new Date();
const nameDay = daynames[currentlyDate.getDay()];
const day = currentlyDate.getDate();
const month = months[currentlyDate.getMonth()];
const fullYear = currentlyDate.getFullYear();
const fullDate = `${nameDay} ${day}  ${month} ${fullYear}`;
document.getElementById("header-date").textContent = fullDate;

