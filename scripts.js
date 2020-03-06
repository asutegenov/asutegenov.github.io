var timeInHeader = setInterval(timeHead, 1000);
var dateInHeader = setInterval(dateHead, 1000);

function timeHead() {
  var t = new Date();
  document.getElementById("time").innerHTML = t.toLocaleTimeString();
}

function dateHead () {
  var d = new Date();
  document.getElementById("date").innerHTML = d.toLocaleDateString()
}

