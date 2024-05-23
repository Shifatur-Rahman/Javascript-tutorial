// let a = "Hello";
// let b = "World";

// let c = a.concat(" ",b);

// console.log(c.slice(0,5));

// let text1 = "          My Novel                   ";

// let text2 = text1.trim();

// console.log(text1.length);
// console.log(text2.length);

//                       split
let text = "a,b,c,d,e,f";
const myArray = text.split(",");
for(let i=0; i<myArray.length; i++){
  console.log(myArray[i]);
}

//                         indexOf

let str = "My country name is Bangladesh";

let text1 = str.indexOf("name", 10);
console.log(text1);

let text2 = str.search("country");
console.log(text2);