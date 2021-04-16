
function currentTime () {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds()
    minute = updateTime(minute);
    second = updateTime(second);
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);
    document.querySelector('.led-second-line--hours').innerText = hour;
    document.querySelector('.led-second-line--minutes').innerText = minute;
    document.querySelector('.led-second-line--seconds').innerText = second;
    var t = setTimeout(function(){ currentTime() }, 1000);
}

function currentDay () {
    var day = new Date().getDate();
    document.querySelector('.led-first-line-day').textContent = day;
    var t = setTimeout(function(){ currentDay() }, 1000);
}

function weekDay () {
    var day = new Date().getDay();
    switch (day) {
        case 1:
            document.querySelector('.led-first-line-week').textContent = 'Mo';
            break;
        case 2:
            document.querySelector('.led-first-line-week').textContent = 'Tu';
            break;
        case 3:
            document.querySelector('.led-first-line-week').textContent = 'We';
            break;
        case 4:
            document.querySelector('.led-first-line-week').textContent = 'Th';
            break;
        case 5:
            document.querySelector('.led-first-line-week').textContent = 'Fr';
            break;
        case 6:
            document.querySelector('.led-first-line-week').textContent = 'Sa';
            break;
        case 0:
            document.querySelector('.led-first-line-week').textContent = 'Su';
            break;
    }
    var t = setTimeout(function(){ weekDay() }, 1000);
}

function amPM () {
    var hour = new Date().getHours();
    var ledAP = document.querySelector('.led-second-line--ap');
    ledAP.textContent = (hour >= 12)? 'PM' : 'AM';
    var t = setTimeout(function(){ amPM() }, 1000);
}

function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
}

function button01 () {
    var button = document.querySelector('.button01');
    var screenWatch = document.querySelector('.screenWatch');
    var ledAP = document.querySelector('.led-second-line--ap');
    button.addEventListener('mousedown', function () {
        screenWatch.style.backgroundColor = '#33FFE0';
        screenWatch.style.boxShadow = '0 0 0 3px #000, 0 0 0 4px #33FFE0';
        ledAP.style.color = '#000';
    }, false)
    button.addEventListener('mouseup', function (e) {
        screenWatch.style.backgroundColor = '#e9e8e1';
        screenWatch.style.color = '#000';
        screenWatch.style.boxShadow = '0 0 0 3px #000, 0 0 0 4px #e9e8e1';
    }, false)
}


button01();
currentTime();
currentDay();
weekDay();
amPM();


