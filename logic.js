
function showTime() {

    let date = new Date(),
      hours = date.getHours(),
      mins = date.getMinutes(),
      secs = date.getSeconds(),
      session = "AM",
      main = document.querySelector(".main");

    if(hours == 0){
        hours = 12;
    }
    
    if(hours > 12){
        hours = hours - 12;
        session = "PM";
    }
    if(hours < 10) {
        hours = "0" + hours
    }else {
        hours
    }
    // hours = (hours < 10) ? "0" + hours : hours;
    mins = (mins < 10) ? "0" + mins : mins;
    secs = (secs < 10) ? "0" + secs : secs;
    
  let time = hours + " " + ":" + mins + " " + ":" + secs + " " + session;
  main.innerText = time;
  main.textContent = time;
}
setInterval(showTime, 1000);

showTime();
