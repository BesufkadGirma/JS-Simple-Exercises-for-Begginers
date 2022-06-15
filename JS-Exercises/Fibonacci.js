function fibonacciGenerator(n){
    //array to store the sequence of the numbers
    let output=[];
    for(let i=1; i<=n;i++){
        if(n===1){
            output = [0];
        }
        else if(n===2){
            output = [0, 1];
        }
        else{
            output = [0, 1];
            for(let i=2; i < n; i++){
                output.push(output[output.length-2]+output[output.length-1])
            }
        }  
    }
return output;
}
console.log(fibonacciGenerator(20));