const car = {
    model: "x5",
    name: "Toyota",
    year: "2008",
    engine: function(){
       return this.model = "valo engine";
    }
}

console.log(car.engine());