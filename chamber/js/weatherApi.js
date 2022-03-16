const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Tijuana&units=imperial&APPID=dd3df6bf460d18fe6d33bc4f08d44723";
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('.temperature').textContent = Math.round(jsObject.main.temp);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector("#desc").textContent = desc
document.querySelector('.windSped').textContent = jsObject.wind.speed;

const temp = document.querySelector(".temperature");
const wspeed = document.querySelector(".windSped");


if (temp <= 50 && wspeed > 3){
    const windChill= Math.round((35.74 + 0.6215 * temp - 35.75 * wspeed ** 0.16 + 0.4275 * temp * wspeed ** 0.16) * 100 / 100);

    document.querySelector(".windChill").textContent = windChill;
}   
else {
    document.querySelector(".windChill").textContent = "N/A";

}
});