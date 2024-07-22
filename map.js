const input = [1,2,3,4,5,6,7,8,9,10];

// Using for loop to create a new array which is the traditional way to put .

let newarray=[];
for (let i = 0; i < input.length; i++) {
    newarray.push(input[i]*5);
    
}
console.log(newarray);

// Using map() function to create a new array

function transform(i){
    return i*2;
}
const ans=input.map(transform)

console.log(ans);

//another way to do this using map function

const ans2=input.map(function(i){
    return i*3;
})
console.log(ans2);

//another way to do this using arrow and map function

const ans3=input.map((i)=>{
    return i*4;})
    
console.log(ans3);