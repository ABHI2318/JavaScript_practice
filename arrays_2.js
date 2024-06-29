const crickters =["kohli","rohit","dhoni","sachin"]
console.log(crickters)
const actors=["akshay","salman","amir","srk"]

const combined =[...actors,...crickters]
console.log(combined)

const array=[5,6,7,8,[4,2,6,6,[5,2,8,[4,5]]]]
console.log(array)
const newarray=array.flat(Infinity)
console.log(newarray)