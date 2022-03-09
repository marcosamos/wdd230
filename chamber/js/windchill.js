const temp = document.querySelector(".temperature");
const wspeed = document.querySelector(".windSped");

if (temp>=50 && wspeed>3){
    const windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wspeed,0.16)) + (0.4275*temp*Math.pow(wspeed,0.16));
    const roundedWindChill= Math.round(windChill);
    document.querySelector(".windChill").innerHTML= roundedWindChill;
}else {
    document.querySelector(".windChill").innerHTML = "N/A";

}