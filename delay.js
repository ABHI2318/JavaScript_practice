function array() {
    let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < a.length; i++) {
      setTimeout(()=>{
        console.log(a[i]);
      },i*1000)
    }
  }
  
  array()


  //

  function DelayNode(){

    let a=[1,2,3,4,5,6,7,8,9,10]
    for(let i=0;i<a.length;i++){
        setTimeout(()=>{
            console.log(a[i]);
        },i*1000)
    }
  }
  DelayNode()