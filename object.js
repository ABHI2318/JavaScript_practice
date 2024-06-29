const js1=Symbol("key1")
const personal ={
    name:"abhishek",
    [js1]:"mykey",
    age: 21,
    college:"ltce",
    city:"thane"
}

console.log(personal.name)
console.log(personal["name"])
console.log(personal[js1])
console.log(typeof[js1])