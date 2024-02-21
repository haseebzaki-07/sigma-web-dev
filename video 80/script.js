// let obj ={
//     a:1,
//     b:"Haseeb",
// }

// console.log(obj)

// let animal = {
//     eats:true,
// };

// let rabbit = {
//     jumps:true,
// };

// rabbit._proto_ = animal;

class Animal {

    constructor(name) {
        this.name = name;
        console.log("object is created")
    }

    eats(){
        console.log("kha rha hun")
    }

    sleeps(){
        console.log("so rha hun")
    }
}

class Lion extends Animal{
    constructor(name) {
        super(name)
        console.log("object is created and this is a lion")
    }

}


let a = new Animal("Harry")
console.log(a)

let l = new Lion("Sher")
console.log(l)