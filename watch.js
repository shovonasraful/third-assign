function watchtime(times){
    let totalSeconds=0;
    for (let i = 0; i < times.length; i++) {
        totalSeconds += times[i];}
        
    let hours = Math.floor(totalSeconds / 3600); 
    
    
    let minutes = Math.floor(totalSeconds / 60); 

    totalSeconds = totalSeconds % 60;

        let seconds = totalSeconds;
        
    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}
const times=[444,555,566,777]
const result =watchtime(times);
console.log(result);