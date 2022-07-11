
var sec = 00
var min = 00
var hr = 00

var interval

function twoDigits (digit){
    if(digit < 10){
        return('0'+ digit)
    } else {
        return(digit)
    }
}

function start (){
    watch()
    interval = setInterval(watch, 1000)
}

function stop (){
   clearInterval(interval) 
}

function reset (){
    clearInterval(interval)
    sec = 00
    min = 00 
    document.getElementById('watch') 
    .innerText = '00:00:00'
}

function watch (){
    sec++
    if (sec == 60) {
        min++
        sec = 0
        if (min == 60) {
            min = 0
            hr++
        }
    }
    document.getElementById('watch') 
    .innerText = twoDigits(hr) + ':' + twoDigits(min) + ':' + twoDigits(sec)
}