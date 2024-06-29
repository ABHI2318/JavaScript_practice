const value = ()=> {
   
 
    let newdate = new Date()
    let Hour = newdate.getHours()
    let Minute = newdate.getMinutes()
    let Second = newdate.getSeconds()
    
    let hour = document.getElementById("hour")
    let minute = document.getElementById("minute")
    let second = document.getElementById("second")
    
    hour.textContent = Hour
    minute.innerHTML = Minute 
    second.innerHTML = Second
      
     }
    // setInterval(hour, minute, second, 1000);
    setInterval(value, 1000);