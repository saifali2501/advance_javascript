function fun2() {
  for (let i = 1; i < 10; i--) {
    let x = Math.random() * 10;
    let y = Math.trunc(x);
    if (y <= 6 && y !== 0) {
      // console.log(y);
      return y;
    }
  }
}

let print = fun2();
console.log("🚀 ~ file: day-task.js:36 ~ print:", print);
