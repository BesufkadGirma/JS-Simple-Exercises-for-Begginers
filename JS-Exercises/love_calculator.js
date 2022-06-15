//let's take this couples as an input
//the girl name
var girlName = 'Angela';
//the guy name
var guyName = 'Jack'
//let's define a fuction that takes the name of the couples and return the percentage of love 
function loveCalculator(girlName, guyName){
    //assigning the random numbers to a variable
    var randnum = Math.random();
   // let's remove the floating number
   var num = randnum * 100;
//let's create a random percentage value for love output
    var loveResult = Math.floor(num)+1;
    //let's generate the messages based on the result
    console.log('your love score '+loveResult + '%');
    if(loveResult>=80){
        console.log('you really love eachother')
    }
    if(loveResult<=30){
        console.log('you go together like oil and water')
    }
 
}

loveCalculator(girlName, guyName);