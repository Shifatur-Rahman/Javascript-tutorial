const arr = [1,2,3,4,5];

              //      Map array method (1)
const myArr1 = arr.map(myFunction);

function myFunction(value, index, array){
    return value*2;
}
console.log(myArr1);

                  //     Map array method (2)
const myArr2 = arr.map((item)=>{
    return item * 3;
})
console.log(myArr2);

//      filter

const myArr3 = arr.filter((item) =>{
    return item>3;
})

console.log(myArr3);


//                  reduce
const sum = arr.reduce((item1, item2)=>{
    return item1 + item2;
})

console.log(sum);
