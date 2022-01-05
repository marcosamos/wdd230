var currentDay = Date();
var dd = currentDay.getDate();
var mm = currentDay.getMonth(); + 1
var yyyy = currentDay.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
  }
  
  if (mm < 10) {
    mm = '0' + mm;
  }

  currentDay = `${mm} / ${dd} / ${yyyy}`
  document.getElementById(footer_scrip_time)