

// Set the date we're counting down to
var countDownDate = new Date("Mar 1, 2020 08:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("inicio-contador-dias").innerHTML = days;
  document.getElementById("inicio-contador-horas").innerHTML = hours;
  document.getElementById("inicio-contador-minutos").innerHTML = minutes;
  document.getElementById("inicio-contador-segundos").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("inicio-contador-dias").innerHTML = "0";
    document.getElementById("inicio-contador-horas").innerHTML = "0";
    document.getElementById("inicio-contador-minutos").innerHTML = "0";
    document.getElementById("inicio-contador-segundos").innerHTML = "0";
  }
}, 1000);

