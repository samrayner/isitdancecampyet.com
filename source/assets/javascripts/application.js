//= require_tree .

function setBackgroundImage() {
  var filename = filenames[Math.floor(Math.random()*filenames.length)];
  var imageUrl = "http://www.oxforddancecamp.info/uploads/1/0/0/4/10043810/" + filename + "_orig.jpg"
  var containerElement = document.getElementById("container");
  containerElement.style.backgroundImage = "url('" + imageUrl + "')";
}

var phrase = phrases[Math.floor(Math.random()*phrases.length)];
var offsetDate = new Date();
offsetDate.setDate(offsetDate.getDate() - 9);
var date = dates.find(function(d) { return d > offsetDate; });

var oneSecond = 1000;
var oneMinute = oneSecond * 60;
var oneHour = oneMinute * 60;
var oneDay = oneHour * 24;
var oneWeek = oneDay * 7;

function startCountdown() {
  var contentElement = document.getElementById("center");
  var countDownTime = date.getTime();

  var timer = setInterval(function() {
    var now = new Date().getTime();
    var delta = countDownTime - now;

    var weeks = Math.floor(delta / oneWeek);
    var days = Math.floor(delta % oneWeek / oneDay);
    var hours = Math.floor((delta % oneDay) / oneHour);
    var minutes = Math.floor((delta % oneHour) / oneMinute);
    var seconds = Math.floor((delta % oneMinute) / oneSecond);

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
