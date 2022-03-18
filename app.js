
let circle = document.getElementById("c1");
let timeInput = document.getElementById("timeInput");
const diameterOfCircle = circle.getAttribute("r") * 2 * Math.PI;
let intervalFlag = undefined;
function clearTimer() {
    document.getElementById("day").innerHTML = 0;
    document.getElementById("hour").innerHTML = 0;
    document.getElementById("minute").innerHTML = 0;
    document.getElementById("second").innerHTML = 0;
}
clearTimer();
timeInput.addEventListener("input", (e)=>{  
    e.preventDefault();
    let timecount = new Date(e.target.value).getTime() - 25200000;//-25200000 để đưa về đúng múi giờ GMT+07:00;
    if (timecount > 0) {
        if(intervalFlag){
            clearInterval(intervalFlag);
            console.log("clear");
            intervalFlag =  setInterval(renderTimer, 1000);
        }
        
        else intervalFlag =  setInterval(renderTimer, 1000);
        function renderTimer(){
            let now = new Date().getTime();
                let distance = timecount - now;
                let days = Math.floor(distance / 1000 / 60 / 60 / 24);
                let hours = Math.floor(distance / 1000 / 60 / 60) - days * 24;
                let minutes = Math.floor(distance / 1000 / 60) - hours * 60 - days * 24 * 60;
                let seconds = Math.floor(distance / 1000) - minutes * 60 - hours * 3600 - days * 24 * 60 * 60;
    
                if (days < 0) days = 0;
                
                document.getElementById("day").innerHTML = days;
                document.getElementById("hour").innerHTML = hours;
                document.getElementById("minute").innerHTML = minutes;
                document.getElementById("second").innerHTML = seconds;
                tranfer(days, hours, minutes, seconds);
        }
        function tranfer(d, h, m, s) {
            document.getElementById("c4").style.strokeDashoffset = -parseFloat(s * parseFloat(diameterOfCircle / 60));
            document.getElementById("c3").style.strokeDashoffset = -parseFloat(m * parseFloat(diameterOfCircle / 60));
            document.getElementById("c2").style.strokeDashoffset = -parseFloat(h * parseFloat(diameterOfCircle / 24));
            document.getElementById("c1").style.strokeDashoffset = -parseFloat(d * parseFloat(diameterOfCircle / 365));
        }
    }
});


