//= require_tree .

function setBackgroundImage() {
  var filename = filenames[Math.floor(Math.random()*filenames.length)];
  var imageUrl = "http://www.oxforddancecamp.info/uploads/1/0/0/4/10043810/" + filename + "_orig.jpg"
  var containerElement = document.getElementById("container");
  containerElement.style.backgroundImage = "url('" + imageUrl + "')";
}

var phrase = phrases[Math.floor(Math.random()*phrases.length)];

function startCountdown() {
  var contentElement = document.getElementById("center");
  var countDownDate = new Date("Aug 7, 2020 12:00:00").getTime();

  var timer = setInterval(function() {
    var now = new Date().getTime();
    var delta = countDownDate - now;

    var weeks = Math.floor(delta / (1000 * 60 * 60 * 24 * 7));
    var days = Math.floor(delta % (1000 * 60 * 60 * 24 * 7) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((delta % (1000 * 60)) / 1000);

    var values = [weeks, days, hours, minutes, seconds];
    var units = ["w", "d", "h", "m", "s"];

    if (delta < 0) {
      clearInterval(timer);
      contentElement.innerHTML = "YES!!!!!<br />👯‍♀️✨🎊🎉🕺💃";
      return;
    }

    contentElement.innerHTML = phrase + "<br />🏳️‍🌈☀️🏕💚<br />";

    for (var i = 0; i < values.length; i++) {
      if (values[i] > 0) {
        contentElement.innerHTML += values[i] + units[i] + " ";
      }
    }
  }, 1000);
}

document.addEventListener('DOMContentLoaded', function() { 
  setBackgroundImage()
  startCountdown()
}, false);
