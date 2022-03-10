const temp = document.querySelector(".temperature");
const wspeed = document.querySelector(".windSped");


if (temp >= 50 && wspeed > 3){
    const windChill= Math.round((35.74 + 0.6215 * temp - 35.75 * wspeed ** 0.16 + 0.4275 * temp * wspeed ** 0.16) * 100 / 100);

    document.querySelector(".windChill").textContent = windChill;
}   
else {
    document.querySelector(".windChill").textContent = "N/A";

}