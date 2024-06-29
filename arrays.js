let numbers =[0,1,2,3,4,5]
console.log(numbers[1])

const num1=new Array(5,7,8,6)
console.log(numbers[2])
numbers.push(4)
console.log(numbers)
//to find wheather that numbers exists or not

console.log(numbers.includes(9))
console.log(numbers.indexOf(54))
const newnum=numbers.join()
console.log(newnum)

const n1=numbers.splice(1,3)
console.log(n1)

const n2=numbers.splice(1,3)
console.log(n2)
console.log(numbers)