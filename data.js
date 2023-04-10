
  const timeContainer = document.getElementById("time-container");
const timeEl = document.getElementById("time");
const toggleTimeBtn = document.getElementById("toggle-time");

let isTimeVisible = true;

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const dateString = now.toDateString();
  timeEl.textContent = `${dateString} ${timeString}`;
}


updateTime();
setInterval(updateTime, 1000);

toggleTimeBtn.addEventListener("click", toggleTime);


function toggleTime() {
    var time = document.getElementById("time");
    var button = document.getElementsByTagName("button")[0];

    if (time.style.display === "none") {
      time.style.display = "block";
      time.innerHTML = new Date().toLocaleString();
      button.innerHTML = "Hide Time";
    } else {
      time.style.display = "none";
      button.innerHTML = "Show Time";
    }
  }