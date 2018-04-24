var timeElement = document.getElementById('time')

timeElement.innerText = 'no time'

function calcolaTempo() {
  var adesso = new Date()
  var oraDiPranzo = new Date()
  oraDiPranzo.setHours(13, 30, 00)

  var quantoMancaInMillisecondi = oraDiPranzo - adesso

  if (quantoMancaInMillisecondi < 0) {
    oraDiPranzo.setHours(oraDiPranzo.getHours() + 24)

    quantoMancaInMillisecondi = oraDiPranzo - adesso
  }

  var quantoMancaObject = convertMS(quantoMancaInMillisecondi)

  var ora = quantoMancaObject.hour
  var minuti = quantoMancaObject.minutes
  var secondi = quantoMancaObject.seconds

  var time = ora + ':' + minuti + ':' + secondi

  return time
}

timeElement.innerText = calcolaTempo()

var button = document.getElementById('bottone-aggiorna')

button.addEventListener('click', function() {
  timeElement.innerText = calcolaTempo()
})

setInterval(function() {
  timeElement.innerText = calcolaTempo()
}, 1000)

function convertMS(milliseconds) {
  var hour
  var minute
  var seconds

  seconds = Math.floor(milliseconds / 1000)
  minute = Math.floor(seconds / 60)
  seconds = seconds % 60
  hour = Math.floor(minute / 60)
  minute = minute % 60
  hour = hour % 24
  return {
    hour: hour,
    minutes: minute,
    seconds: seconds,
  }
}
