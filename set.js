const letters = new Set(["a", "b", "c"]);

letters.add("d");
letters.add("e");

console.log("Size = " + letters.size);

let text = " ";

//        for of loop

// for(let item of letters){
//     console.log(item);
// }

//       for each loop

letters.forEach(function(values){
    console.log(values);
})



//           has() method

// const answer = letters.has("e");
// console.log(answer);


//              using keys

const myIterator = letters.keys();

for(let item of myIterator){
    console.log(item);
}

console.log(myIterator);