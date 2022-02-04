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
const fullDate = `${nameDay}  ${month} ${day} ${fullYear}`;
document.getElementById("header-date").textContent = fullDate;

const ageAndName = ` © ${fullYear} Canaco Chamber`;
document.querySelector("#ageAndName").textContent = ageAndName;
const lastModify = `Last Updated: ${document.lastModified}`;
document.querySelector("#footerShow").textContent = lastModify;


// Banner
let banner = document.querySelector("#banner");
let deleteButton = document.querySelector("#button");

if(nameDay == "Monday" || nameDay == "Friday"){
	showElement();}
else{
	;
}