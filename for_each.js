const abhi=['abhi','rahu','rahys']

abhi.forEach((item)=> {
   // console.log(item);

})

const abhi1=['abhi','rahu','rahys']

abhi.forEach(function(item){
  //  console.log(item);

})

//now craeting multiple objects in a array

const cricket =[
    {
        player:"virat",
        playerId:23
    },
    {
        player:"rohit",
        playerId:234
    },
    {
        player:"dhoni",
        playerId:238
    }
]
 cricket.forEach((item)=>{
    console.log(item);
    console.log(item.player);
 })
