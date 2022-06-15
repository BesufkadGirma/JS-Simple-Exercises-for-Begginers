//taking the current age as input
//let's assume this person will be alive until 90 years old
var currentAge = 25;
function lifeInWeeks(currentAge){
var leftYear = 90 - currentAge;
console.log('You have only :' + leftYear + 'Years---' + leftYear*52 + 'Weeks----' + leftYear*365 + 'days in the rest of your life.')
}
lifeInWeeks(currentAge);