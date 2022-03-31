function calculateEndTime(airtime:string,runtime:number){
    const time = airtime.split(":",2).map(Number);
    const durationHours = Math.floor(runtime/60);
    const durationMinutes = runtime%60;

    
    let totalHours = time[0]+durationHours;
    let totalMinutes = time[1]+durationMinutes;

    return setTimeStyling(totalHours,totalMinutes);
}

function setTimeStyling(hours:number, minutes:number){
    if(minutes == 60){
        hours = hours+1;
        minutes = 0;
    }

    if(hours == 24){
        hours = 0;
    }

    let hoursString = hours.toString();
    let minutesString = minutes.toString();

    if(minutesString=="0"){
        minutesString = "00";
    }

    return `${hoursString}:${minutesString}`;
}

export default calculateEndTime;