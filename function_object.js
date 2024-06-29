const user={
    name:"abhishek",
    roll_no:41,
    clg:"ltce"

}

function Myuser(anyuser){
      console.log(`the name is ${anyuser.name} and he is from ${anyuser.clg}`)
}
Myuser(user)
console.log((Myuser(user)))