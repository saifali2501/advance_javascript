// // class User {
// //     constructor(){
// //         console.log("--constructor--");
// //         this.name = "Saif Ali";
// //         this.age = 22;
// //     }
// //     print(){
// //         console.log("----constructor",this.name);
// //     }
// //     print2(){
        
// //         console.log("----constructor",this.age);
// //     }
// // }
// // const class1 = new User()
// // const class2 = new User()
// // console.log(" class1:", class1)
// // console.log(" class1:", class2)
// // class1.print()
// // class1.print2()

// class User{
//    constructor(name,age){
//         console.log("---constructer---");
//         this.name = "saifu"
//         this.age = 21
//    }
//    printName(){
//     console.log("---printName",this.name);
//    }
//    printAge(x){
//     console.log(`My age will be ${this.age + x} after ${x}`);
//     console.log("---PrintAge--",this.age);
//    }
//    sum(a,b){
//     return a+b;
//    }
// }
// const class1 = new User("saifu",21)
// const class2 = new User("Nimesh",21)
// // console.log("class2:", class1)
// // console.log(" class1:", class2)

// console.log("----class one -------");
// // class1.printName()
// class1.printAge(10)

// console.log("----class two -------");
// // class1.printName()
// class1.printAge(10)


// let total = class1.sum(52,12)
// console.log("total:", total)

class school{
    defineData(){
        this.school = "Bhartimaiya"
    }
    print(){
        console.log(`My School name is ${this.school}`);
    }
}
const abc = new school();
console.log(" abc:", abc)
abc.print()
abc.defineData()
console.log("abc",abc);
abc.print()