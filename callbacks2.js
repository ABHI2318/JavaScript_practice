function calculate(a,b,finalcalculate) {

    const ans=finalcalculate(a,b)
    return ans;  
}

function sum(a,b) {
    return a+b;
    
}

const value=calculate(1,2,sum);
console.log(value);

//another approach to get callback function
function greet() {
    console.log("hello greet");
    
}

function allein() {
    console.log("hello allein");
    
}

setTimeout(greet,3*1000)
setTimeout(allein,2*1000)

function calculatesum(a,b) {
    const sum = a+b;
    return sum;
    
}
console.log(calculatesum(4,5));
setTimeout(calculatesum,1000)