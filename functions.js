/*function saymyname(){
    console.log("ABHISHEK")


}
saymyname()

function addition(num1,num2){
    console.log(num1+num2)

}
addition(4,5)
*/

/*function usermessage(username="abhishek"){
    if(username===undefined){
        console.log("enter the username")
    return
    }
    return (`the user just logged in ${username}`)
}
console.log(usermessage()) //function call*/
/*
function myFunc(theObject) {
    theObject.make = "Toyota";
  }
  
  const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };
  
  console.log(mycar.make); // "Honda"

  console.log(mycar.make); // "Toyota"
  myFunc(mycar)
  console.log(mycar.make)*/


  function users(num1,num2,...val){
    return val

  }
  console.log(users(100,200,300,455))