// i will give the output to find the greatest number in the array 

function greaternumber(numbers) {

    let biggernum=numbers[0];
    for(i=0;i<length.numbers;i++){
        if(numbers[i]>biggernum){
            biggernum=numbers[i]
        }
    }
    return biggernum;
}

/*function greter() {
    let input = prompt("enter the numbers for example 1,2,3")
    if(input){
        let numberarray=input.split('').map(Number);
        let greayernumber=numberarrays;(numberarray);
        alert("greater numbet is"+greayernumber)
    }
    else{
        alert("enter the number propely")
    }
}
greter()
*/
function findGreatestNumber() {
    let input = prompt("Enter numbers separated by commas (e.g., 3,5,2,8,1):");
    if (input) {
        let numberArray = input.split(',').map(Number);  // Convert the input string to an array of numbers
        let greatestNumber = greaternumber(numberArray);
        alert("The greatest number is: " + greatestNumber);
    } else {
        alert("No input provided!");
    }
}

// Call the function to prompt user input
findGreatestNumber();