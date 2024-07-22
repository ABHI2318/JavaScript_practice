const input = [1,2,3,4,5,6,7,8,9,10];

// Using map() function to create a new array

function transform(i){
    return i*2;
}
const ans=input.map(transform)

console.log(ans);