// let arr = [1,2,3,4,5,6]

// let [a,b,...c] = arr
// console.log("----------->a", a)
// console.log("----------->b", b)
// console.log("----------->c", c)

// ans= a = 1 b= 2 ...c = 3,4,5,6

// function fun1(a, b, ...c) {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("c", c);

//   let total = 0;

//   c.map((e) => {
//     total += e;
//   });

//   return a + b + total;
// }


// let x = fun1 (1,2,3,4,5,6,7)
// console.log(" x:", x)

let obj = {
    a:20,
    b:30,
    c:60,
    d:90,
};


let {a,b,...c} = obj;
console.log("a",a);
console.log("b",b);
console.log("c",c);