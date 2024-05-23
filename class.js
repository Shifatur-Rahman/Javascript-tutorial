class person{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    birthYear(){
        const date = new Date();
        return date.getFullYear() - this.year;
    }



}

const person1 = new person("Novel", 1996);

console.log(person1.name + " " + person1.birthYear());