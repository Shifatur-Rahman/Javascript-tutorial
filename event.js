
const displayDate = () =>{
    let date = new Date();
    console.log(date.getFullYear());
}

let myInputField = document.getElementById("myInputField");

function myFun(e){
  console.log(e.target.value);
}

myInputField.addEventListener('input', myFun)

