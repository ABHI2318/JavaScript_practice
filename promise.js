const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("the wait for async function is over");
        resolve()
        
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise is consumed");
})
 //this method is used without stored in any variable
new Promise(function(resolve,reject){

    setTimeout(function(){

   
    console.log("the wait of async function 2");
    resolve()
},1000)
}).then(function(){
    console.log("Aync 2 is resolved");
})


//promise 3 

const promiseThree=new Promise(function(resolve,reject){

    setTimeout(function(){
     resolve({username:"abhishek",email:"abhishek@gnail.com"})
    },1000)
 
})

promiseThree.then(function(a){
    console.log(a);

})

//4

const promisefour =new Promise(function(resolve,reject){

  setTimeout(function(){
    let error =true
    if(!error){
        resolve({user1:"abhi",pass:"124"})
    }
    else{
        reject("there is error")
    }
  },1000)
})

promisefour.then((user)=>{
    console.log(user);
    return(user.user1)
}).then((user1)=>{
    console.log(user1);
}).catch(function(error){
    console.log("there is error");
}).finally(()=>{
    console.log("the promise is either resolved or rejeted");
})