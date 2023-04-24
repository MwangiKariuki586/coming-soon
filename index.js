var countdowndate = new Date('April 27,2023 00:00:00').getTime()
var x = setInterval(()=> {
    var now = new Date().getTime()
    var distance = countdowndate - now
    var days = Math.floor(distance/(1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24))/(1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)/(1000 *60)))
    var seconds = Math.floor((distance % (1000 * 60)/1000))

    const addZero = (num) => {
        return num < 10 ? "0" + num : num
    }

    document.getElementById("days").innerHTML = addZero(days)
    document.getElementById("hours").innerHTML = addZero(hours)
    document.getElementById("minutes").innerHTML = addZero(minutes)
    document.getElementById("seconds").innerHTML = addZero(seconds)
    if(distance < 0){
        document.getElementById("days").innerHTML = "00"
        document.getElementById("hours").innerHTML = "00"
        document.getElementById("minutes").innerHTML = "00"
        document.getElementById("seconds").innerHTML = "00"
    }
},1000) 
