const Myarray =['abhishek','rahul','swayam','virat']
let arr=0
while (arr<Myarray.length) {
    //console.log(`the array is ${Myarray[arr]}`);
    arr++;
}
// high order array maps
const map = new Map()
map.set('IN','INDIA')
map.set('USA','UNITES STATES OF AMERICA')
map.set('ENG','ENGLAND')

//console.log(map)
for (const [key,value] of map) {
    //console.log(key,':-',value);
    
}

/*const name={
    In:'India',
    ENG:'England',
    USA:'United states'

}
  for (const [key,value] of name) {
   // console.log(key,':-',name); //this for of loop will not work for normal object delclaration

  }
*/

  const arr1 = ['abhi', 2, 3, 4, 5]

for (const num of arr1) {
    console.log(num);
}
