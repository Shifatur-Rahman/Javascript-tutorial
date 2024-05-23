
// try{
//     altert("Hello world");
// } catch(err){
//     console.log(err.message);
// }

function myFun() {

    let x = document.getElementById("demo").value;
    const para = document.getElementById("para").innerHTML;
    //console.log(x);

    try{
        if(x.trim() == "") throw "empty";
        if(isNaN(x)) throw "not a Number";

        if(x<5) throw "too low";
        if(x>10) throw "too high";

        console.log(x);

    }
    catch(err){
        console.log(err);
    }
    finally{
        document.getElementById("demo").value = "";
    }

}


