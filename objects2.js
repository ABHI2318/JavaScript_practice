/*const cicbuzz = {}
cicbuzz.id=41
cicbuzz.name="anhs"
cicbuzz.age=18

//console.log(cicbuzz.id)

const man ={
    email:"abhis@gmai.com",
    nadme:"rahul",
    value:{
        first:183,
        class:{
            coach:"s1",
            seatno:45,
            AC:{
                pass_ID:14,
                name:"nobita"
            }
        }

    }
}
console.log(man.value.class.AC)

//const log={...man,...cicbuzz}
//.log(log)

*/

/*const key1={k:1,l:4}
const key2={m:1,n:2}

const key3={...key1,...key2}
console.log(key3)
*/

const course={
    courseInstruct:"abhi",
    cousePrice:45000,
    courseId:45
}
const {courseInstruct}=course
const {courseInstruct : ins}=course  //destructing of object ,both ways csn be used 
console.log(courseInstruct)
console.log(ins)