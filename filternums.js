const arr=[1,2,3,4,5,6,7,8,9,10]

function filterlogic(n){
    for(let i=0;i<arr.length;i++){
        if(n%2==0){
            return true;
        }
        else{
            return false;
        }
}}

const ans=arr.filter(filterlogic) 
console.log(ans);// true or false depending on whether there's an even number in the array or not.