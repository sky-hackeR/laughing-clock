const hourElement = document.getElementById("hour") 
const minutesElement = document.getElementById("minutes") 
const secondsElement = document.getElementById("seconds") 
const ampmElement = document.getElementById("ampm"); 
  
function updateClock(){ 
    let hour = new Date().getHours() 
    let minutes = new Date().getMinutes() 
    let seconds = new Date().getSeconds() 
    let ampm = hour => 12 ? "PM" : "AM" 

    if(hour > 12 ){
    ampm = "PM"
    }

    if (hour < 12 ) {
    ampm = "AM"
    }

    hour = hour < 10 ? "0" + hour : hour; 
    minutes = minutes < 10 ? "0" + minutes : minutes; 
    seconds = seconds < 10 ? "0" + seconds : seconds; 

    hourElement.innerText = hour; 
    minutesElement.innerText = minutes; 
    secondsElement.innerText = seconds; 
    ampmElement.innerText = ampm; 
    setTimeout(()=>{ 
    updateClock()    
    }, 1000) 
} 
updateClock()