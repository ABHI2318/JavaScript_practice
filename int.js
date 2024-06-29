let i=1;
const inter=setInterval(()=>{
    
    console.log(i);
    i++;
    if(i>10){
        clearInterval(inter);
    }
},1000)