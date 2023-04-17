


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

function welcome(){
  var firstName = prompt("Enter you First Name")
  var lastName = prompt("Enter you last name")
  alert("Welcome, " + firstName + lastName + "!")
}

function sortArray() {
  var input = document.getElementById("input-array").value;
  var arr = input.split(",");
  arr.sort(function(a, b){return a - b});
  document.getElementById("output").innerHTML = "Sorted Array: " + arr;
}
