//let's year as an input
var year = 1989;
function isLeap(year){
    if((year%4==0 && year%100!=0) || (year%4==0 && year%100==0 && year%400==0)){
    console.log('its a leap year');
    }
    else{
        console.log('its not leap year');
    }
}
isLeap(year);