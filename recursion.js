function fun1(x) {
  console.log("----->", x);
  if (x > 0) {
    fun1(x - 1);
  }else{
    console.log("loop finish");
  }

}

fun1(10);

// let obj = {
//     burger:100,
//     pizza:200,
// }

// function fun(ab){
//     return obj[ab]
// }

// let a = fun("pizza")
// console.log("price", a)
