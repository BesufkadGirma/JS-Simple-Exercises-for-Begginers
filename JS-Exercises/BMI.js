//let's take weight and height as an input
var height = 1.8;
var weight = 65;
//let's define the function to calculate the BMI
function BMI(height, weight){
var bmiresult = weight/Math.pow(height, 2);
//checking underweight
if(bmiresult < 18.5){
    console.log(`Your BMI is <${bmiresult}>, so you are underweight.`);
}
//checking a normal weight
else if(bmiresult >= 18.5 && bmiresult <= 24.9 ){
        console.log(`Your BMI is <${bmiresult}>, so you have a normal weight.`);
}
//checking under weight
else{
    console.log(`Your BMI is <${bmiresult}>, so you are overweight.`)
}
}
//calling the function
BMI(height, weight);
