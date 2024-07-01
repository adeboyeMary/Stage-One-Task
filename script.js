function setDay() {
    const currentDate = new Date();
    const dayOfTheWeek = currentDate.toLocaleString('en-uk', { weekday: 'long'});
    
    document.getElementById('currentDay').textContent=dayOfTheWeek;
};

setInterval(setDay, 1000);
setDay();


function setTimeInUTC() {
    const date = new Date();
    const utcHours = String(date.getUTCHours()).padStart(2, '0');
    const utcMinutes = String(date.getUTCMinutes()).padStart(2, '0');
    // const utcSeconds = String(date.getUTCSeconds()).padStart(2, '0');


    document.getElementById('currentTimeUTC').textContent= `${utcHours}:${utcMinutes}`;
};

setInterval(setTimeInUTC, 1000);
setTimeInUTC();