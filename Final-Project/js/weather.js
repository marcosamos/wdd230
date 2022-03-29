const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Tijuana&units=imperial&APPID=dd3df6bf460d18fe6d33bc4f08d44723";
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
//console.log(jsObject)
const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
const humidity = jsObject.main.humidity;
document.querySelector("#weathericon").setAttribute('src', iconsrc);
document.querySelector("#weathericon").setAttribute('alt', desc);
document.querySelector(".temp").textContent = `${Math.round(jsObject.main.temp)} F`;
document.querySelector(".desc").textContent = desc;
document.querySelector(".humidity").textContent = `Humidity: ${humidity}`
});