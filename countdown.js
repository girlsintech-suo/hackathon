const currdate= new Date();
console.log(currdate);

const enddate= new Date('2024-03-01T19:30:00');

const diff= enddate-currdate;
console.log(diff);

function updateCountdown(){
    const currtime= new Date();
    const difference= enddate-currtime;

    const days= Math.floor(difference/(1000*60*60*24));
    const hours= Math.floor((difference% (1000*60*60*24)) / (1000*60*60));
    const minutes= Math.floor((difference% (1000*60*60)) / (1000*60));
    const seconds= Math.floor((difference% (1000*60)) / (1000));

    document.getElementById("days").innerText= days;
    document.getElementById("hours").innerText= hours;
    document.getElementById("mins").innerText= minutes;
    document.getElementById("secs").innerText= seconds;
}

const interval= setInterval(updateCountdown, 1000);

if(diff< 0){
    clearInterval(interval);
    document.getElementById("timer").innerText= "Get Hacking!";
}

